"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Contador animado ao entrar na viewport (padrão "Number Ticker" da Magic UI).
 * Aceita valores como "8+", "18", "~213k" e anima só a parte numérica.
 * Renderiza o valor final no servidor e antes de entrar na tela (bom pra SEO
 * e para quem está sem JavaScript); conta de 0 até o alvo ao aparecer.
 */
export function NumberTicker({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  const match = /^(\D*)([\d.,]+)(.*)$/.exec(value);
  const prefix = match ? match[1] : "";
  const digitStr = match ? match[2] : "";
  const suffix = match ? match[3] : "";
  const hasDigits = Boolean(match);
  const target = digitStr ? Number(digitStr.replace(/[.,]/g, "")) : 0;

  useEffect(() => {
    if (!hasDigits || !inView || target <= 0) return;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [hasDigits, inView, target]);

  if (!hasDigits) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {inView ? display : target}
      {suffix}
    </span>
  );
}
