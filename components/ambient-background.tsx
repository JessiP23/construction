"use client";

import { motion } from "framer-motion";

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

const TONES = [
  "rgba(32, 44, 66, 1)",
  "rgba(132, 146, 168, 0.12)",
  "rgba(185, 153, 102, 0.14)",
];

export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {SHAPES.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2 aspect-square rounded-full blur-3xl"
          style={{
            width: shape.size,
            backgroundColor: TONES[index % TONES.length],
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
