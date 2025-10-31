"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BackgroundSlideshowProps {
  images: string[];
  delayMs?: number;
  transitionMs?: number;
}

export default function BackgroundSlideshow({
  images,
  delayMs = 5000,
  transitionMs = 800,
}: BackgroundSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, delayMs + transitionMs);
    return () => clearInterval(id);
  }, [images, delayMs, transitionMs]);

  const current = images[index];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionMs / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={current}
            alt="background"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover will-change-[opacity]"
          />
        </motion.div>
      </AnimatePresence>
      {/* subtle gradient to improve text contrast on smaller screens */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,12,18,0.3)] to-[rgba(8,12,18,0.6)]" aria-hidden />
    </div>
  );
}
