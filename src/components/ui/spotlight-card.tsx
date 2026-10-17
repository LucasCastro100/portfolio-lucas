"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Cor do spotlight em rgba(...) */
  glow?: string;
  /** Feixe de luz que percorre a borda superior do card. */
  beam?: boolean;
};

/**
 * Card com brilho radial que segue o cursor + feixe de luz opcional na borda.
 */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(59, 130, 246, 0.20)",
  beam = false,
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 78%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-2xl border border-line bg-card backdrop-blur-sm transition-colors duration-300 hover:border-accent/45",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{ background }}
      />

      {beam ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px overflow-hidden"
        >
          <span className="absolute inset-y-0 left-0 w-1/3 animate-beam-x bg-gradient-to-r from-transparent via-accent to-transparent" />
        </span>
      ) : null}

      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
