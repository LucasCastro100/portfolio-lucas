"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function PhotoFrame() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-52 sm:w-60 lg:w-64"
    >
      {/* halo */}
      <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-accent via-cyan-400 to-fuchsia-500 opacity-30 blur-2xl" />

      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="rounded-[2rem] bg-gradient-to-tr from-accent via-cyan-400 to-fuchsia-500 p-[2px] shadow-2xl shadow-black/40">
          <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-card">
            <Image
              src="/lucas-oliveira.jpg"
              alt="Foto de Lucas Henrique de Castro Oliveira"
              width={400}
              height={400}
              priority
              className="aspect-square size-full object-cover"
            />
          </div>
        </div>

        <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-background/90 px-3 py-1.5 text-[11px] font-medium text-muted backdrop-blur">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Full-Stack Developer
        </span>
      </motion.div>
    </motion.div>
  );
}
