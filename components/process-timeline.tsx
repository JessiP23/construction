"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/reveal";

export interface ProcessStage {
  title: string;
  description: string;
  highlights: string[];
}

interface ProcessTimelineProps {
  stages: ProcessStage[];
}

export function ProcessTimeline({ stages }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [180, 0]);

  return (
    <div ref={containerRef} className="relative" data-cursor="focus">
      <motion.span
        className="absolute left-3 top-4 hidden h-[calc(100%-2rem)] w-[2px] bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-transparent dark:from-slate-200/30 dark:via-slate-200/60 md:block"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />
      <motion.svg
        className="absolute left-[11px] top-12 hidden h-[calc(100%-6rem)] w-8 md:block"
        viewBox="0 0 8 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="4"
          x2="4"
          y1="0"
          y2="400"
          stroke="url(#timeline-gradient)"
          strokeWidth="2"
          strokeDasharray="180"
          style={{ strokeDashoffset: dashOffset }}
        />
        <defs>
          <linearGradient id="timeline-gradient" gradientUnits="userSpaceOnUse" x1="4" y1="0" x2="4" y2="400">
            <stop offset="0%" stopColor="rgba(15,23,42,0.0)" />
            <stop offset="20%" stopColor="rgba(15,23,42,0.45)" />
            <stop offset="80%" stopColor="rgba(15,23,42,0.85)" />
            <stop offset="100%" stopColor="rgba(15,23,42,0.0)" />
          </linearGradient>
        </defs>
      </motion.svg>
      <div className="grid gap-10 md:gap-16">
        {stages.map((stage, index) => (
          <Reveal key={stage.title} delay={index * 0.1}>
            <div className="group grid gap-6 rounded-3xl border border-slate-900/10 bg-white/60 px-6 py-6 shadow-lg backdrop-blur-lg transition hover:border-slate-900/30 hover:shadow-2xl dark:border-slate-700/40 dark:bg-slate-900/60 dark:hover:border-slate-500/50 md:grid-cols-[auto,1fr] md:gap-12 md:px-12 md:py-10">
              <div className="relative flex items-start gap-3 md:flex-col md:items-center md:gap-6">
                <span className="hidden text-xs font-medium uppercase tracking-[0.4em] text-slate-400 md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-900/10 bg-white shadow group-hover:scale-[1.02] dark:border-slate-700/40 dark:bg-slate-800">
                  <div className="absolute inset-1 rounded-[18px] bg-gradient-to-br from-slate-900/70 to-slate-900/20 opacity-20 group-hover:opacity-40 dark:from-slate-200/80 dark:to-slate-200/30" />
                  <span className="relative font-display text-sm uppercase tracking-[0.4em] text-slate-700 dark:text-slate-200">
                    {stage.title.slice(0, 2)}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl text-slate-900 dark:text-slate-50">
                    {stage.title}
                  </h3>
                  <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {stage.description}
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-3">
                  {stage.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-3 text-sm text-slate-700 transition group-hover:border-slate-900/20 dark:border-slate-700/40 dark:bg-slate-900/60 dark:text-slate-200"
                    >
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-slate-900 dark:bg-slate-200" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
