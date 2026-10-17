"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Cor do spotlight em rgba(...) */
  glow?: string;
};

/**
 * Card com brilho radial que segue o cursor — inspirado no style-hub.
 */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(124, 139, 255, 0.22)",
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
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
