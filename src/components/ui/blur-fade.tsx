"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Entrada com desfoque + fade + subida suave (padrão "Blur Fade" da Magic UI).
 */
export function BlurFade({
  children,
  className,
  delay = 0,
  y = 10,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(10px)" }}
      animate={
        inView
          ? reduce
            ? { opacity: 1 }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
          : undefined
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
