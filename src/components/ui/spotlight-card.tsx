"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Cor do spotlight em rgba(...) */
  glow?: string;
  /** Feixe de luz que percorre a borda superior do card. */
  beam?: boolean;
  /** Inclina o conteúdo em 3D seguindo o cursor. */
  tilt?: boolean;
};

/**
 * Card com brilho radial que segue o cursor, feixe de luz opcional na borda
 * e efeito 3D suave no conteúdo.
 */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(59, 130, 246, 0.20)",
  beam = false,
  tilt = false,
}: SpotlightCardProps) {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useSpring(tiltX, { stiffness: 240, damping: 22, mass: 0.6 });
  const rotateY = useSpring(tiltY, { stiffness: 240, damping: 22, mass: 0.6 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    if (tilt && !reduce) {
      tiltY.set((x / rect.width - 0.5) * 9);
      tiltX.set((0.5 - y / rect.height) * 9);
    }
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 78%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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

      <motion.div
        className="relative z-10 flex h-full flex-col"
        style={
          tilt && !reduce
            ? {
                rotateX,
                rotateY,
                transformPerspective: 900,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
