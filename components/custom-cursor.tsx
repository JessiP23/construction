"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { createPortal } from "react-dom";

const ACTIVE_SELECTORS = "a, button, [data-cursor='focus'], [data-cursor='link']";
const BASE_TONE = "rgba(36, 48, 71, 0.16)";
const ACTIVE_TONE = "rgba(185, 137, 76, 0.28)";
const BORDER_TONE = "rgba(36, 48, 71, 0.22)";
const SHADOW_TONE = "0 0 26px rgba(36, 48, 71, 0.2)";
const SHADOW_ACTIVE_TONE = "0 0 40px rgba(185, 137, 76, 0.25)";

export function CustomCursor() {
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

  const style = useMemo(
    () => ({
      background: active ? ACTIVE_TONE : BASE_TONE,
      border: `1px solid ${BORDER_TONE}`,
      boxShadow: active ? SHADOW_ACTIVE_TONE : SHADOW_TONE,
    }),
    [active],
  );

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
