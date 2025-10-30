"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "./theme-provider";

const SHAPES = [
  {
    size: 520,
    opacity: 0.08,
    delay: 0,
  },
  {
    size: 420,
    opacity: 0.07,
    delay: 4,
  },
  {
    size: 360,
    opacity: 0.06,
    delay: 8,
  },
];

export function AmbientBackground() {
  const { theme } = useTheme();

  const tones = useMemo(
    () =>
      theme === "dark"
        ? ["rgba(148, 163, 184, 0.22)", "rgba(226, 232, 240, 0.18)", "rgba(100, 116, 139, 0.2)"]
        : ["rgba(31, 41, 55, 0.12)", "rgba(15, 23, 42, 0.1)", "rgba(71, 85, 105, 0.1)"],
    [theme],
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {SHAPES.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2 aspect-square rounded-full blur-3xl"
          style={{
            width: shape.size,
            backgroundColor: tones[index % tones.length],
          }}
          initial={{
            opacity: 0,
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            opacity: shape.opacity,
          }}
          transition={{
            duration: 4,
            delay: shape.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
