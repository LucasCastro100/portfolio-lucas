"use client";

import { motion } from "framer-motion";
import { useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  /** Força do efeito magnético (0–1) */
  strength?: number;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

/**
 * Botão/link com feedback magnético que segue o cursor — inspirado no style-hub.
 */
export function Magnetic({
  children,
  href,
  className,
  strength = 0.35,
  target,
  rel = "noopener noreferrer",
  "aria-label": ariaLabel,
}: MagneticProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (left + width / 2)) * strength,
      y: (e.clientY - (top + height / 2)) * strength,
    });
  }

  const common = {
    "aria-label": ariaLabel,
    onMouseMove: handleMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
    animate: { x: offset.x, y: offset.y },
    transition: { type: "spring" as const, stiffness: 240, damping: 16, mass: 0.4 },
    whileTap: { scale: 0.96 },
    className: cn("inline-flex cursor-pointer items-center", className),
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={target ? rel : undefined} {...common}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...common}>
      {children}
    </motion.button>
  );
}
