"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Blobs de gradiente animados ao fundo (efeito aurora).
 */
export function AnimatedBackground() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-40 -top-40 size-[36rem] rounded-full bg-accent/20 blur-[120px]"
        animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-10 size-[30rem] rounded-full bg-cyan-400/15 blur-[120px]"
        animate={{ x: [0, -50, 20, 0], y: [0, 30, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 size-[28rem] rounded-full bg-fuchsia-500/12 blur-[130px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
