"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, duration = 0.8, y = 32 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={clsx("will-change-transform", className)}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay, duration, ease: [0.23, 0.82, 0.26, 0.99] }}
    >
      {children}
    </motion.div>
  );
}
