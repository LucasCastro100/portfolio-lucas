"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfiniteMarqueeProps = {
  children: ReactNode;
  className?: string;
  /** Segundos para completar um ciclo */
  duration?: number;
  reverse?: boolean;
};

/**
 * Faixa infinita com loops suaves — inspirada no style-hub.
 */
export function InfiniteMarquee({
  children,
  className,
  duration = 32,
  reverse = false,
}: InfiniteMarqueeProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("group flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-3 pr-3",
          !reduce && "animate-marquee",
          reverse && "[animation-direction:reverse]",
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex w-max shrink-0 items-center gap-3 pr-3",
          !reduce && "animate-marquee",
          reverse && "[animation-direction:reverse]",
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
    </div>
  );
}
