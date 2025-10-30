"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "./theme-provider";

const SHAPES = [
  {
    size: 520,
    opacity: 0.28,
    duration: 36,
    delay: 0,
  },
  {
    size: 420,
    opacity: 0.24,
    duration: 28,
    delay: 6,
  },
  {
    size: 360,
    opacity: 0.2,
    duration: 24,
    delay: 12,
  },
];

export function AmbientBackground() {
  const { theme } = useTheme();

  const gradients = useMemo(
    () =>
      theme === "dark"
        ? [
            "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.25), transparent 55%)",
            "radial-gradient(circle at 70% 40%, rgba(59, 130, 246, 0.18), transparent 60%)",
            "radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.22), transparent 65%)",
          ]
        : [
            "radial-gradient(circle at 20% 20%, rgba(12, 74, 110, 0.18), transparent 60%)",
            "radial-gradient(circle at 70% 40%, rgba(190, 148, 94, 0.24), transparent 60%)",
            "radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.16), transparent 65%)",
          ],
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
            backgroundImage: gradients[index % gradients.length],
          }}
          initial={{
            opacity: 0,
            x: "-50%",
            y: "-50%",
            rotate: 0,
          }}
          animate={{
            opacity: shape.opacity,
            rotate: 360,
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
