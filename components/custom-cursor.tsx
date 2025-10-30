"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { createPortal } from "react-dom";
import { useTheme } from "./theme-provider";

const ACTIVE_SELECTORS = "a, button, [data-cursor='focus'], [data-cursor='link']";

export function CustomCursor() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const visibilityTimeout = window.setTimeout(() => setVisible(!isTouch), 0);
    if (isTouch) {
      return () => window.clearTimeout(visibilityTimeout);
    }

    const handlePointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    };

    const handlePointerDown = () => setActive(true);
    const handlePointerUp = () => setActive(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    const handleInteractiveEnter = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.closest(ACTIVE_SELECTORS)) {
        setActive(true);
      }
    };

    const handleInteractiveLeave = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.closest(ACTIVE_SELECTORS)) {
        setActive(false);
      }
    };

    document.addEventListener("pointerover", handleInteractiveEnter, true);
    document.addEventListener("pointerout", handleInteractiveLeave, true);

    return () => {
      window.clearTimeout(visibilityTimeout);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerover", handleInteractiveEnter, true);
      document.removeEventListener("pointerout", handleInteractiveLeave, true);
    };
  }, [cursorX, cursorY, mounted]);

  const style = useMemo(() => {
    const baseColor =
      theme === "dark" ? "rgba(226, 232, 240, 0.15)" : "rgba(15, 23, 42, 0.15)";
    const activeColor =
      theme === "dark" ? "rgba(226, 232, 240, 0.35)" : "rgba(15, 23, 42, 0.25)";

    return {
      background: active ? activeColor : baseColor,
      border: `1px solid ${
        theme === "dark" ? "rgba(226, 232, 240, 0.3)" : "rgba(15, 23, 42, 0.15)"
      }`,
      boxShadow: active
        ? theme === "dark"
          ? "0 0 30px rgba(148, 163, 184, 0.35)"
          : "0 0 30px rgba(15, 23, 42, 0.25)"
        : "0 0 20px rgba(15, 23, 42, 0.08)",
    };
  }, [active, theme]);

  if (!mounted || !visible) return null;

  return createPortal(
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-lg md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        ...style,
      }}
      animate={{
        scale: active ? 1.35 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
    />,
    document.body,
  );
}
