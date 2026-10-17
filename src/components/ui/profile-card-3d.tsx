"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { education, profile } from "@/data/profile";
import { MailIcon, WhatsappIcon } from "../icons";

const MAX_TILT = 9;

/**
 * Card 3D com a foto + as informações pessoais.
 * Inclina seguindo o cursor (tilt) e usa profundidade (translateZ) para dar parallax.
 */
export function ProfileCard3D() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT, -MAX_TILT]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT, MAX_TILT]), {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className="relative mx-auto w-full max-w-sm [perspective:1200px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl"
      />

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[1.75rem] border border-line bg-card/80 p-5 shadow-2xl shadow-black/50 backdrop-blur"
      >
        <div style={{ transform: "translateZ(45px)" }} className="relative mx-auto w-full max-w-[16rem]">
          <div className="relative overflow-hidden rounded-[1.35rem] p-px">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-beam-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(59,130,246,0) 0deg, rgba(59,130,246,0.85) 80deg, rgba(96,165,250,1) 130deg, rgba(59,130,246,0) 210deg, rgba(59,130,246,0) 360deg)",
              }}
            />
            <div className="relative overflow-hidden rounded-[calc(1.35rem-1px)] bg-card">
              <Image
                src="/lucas-oliveira.jpg"
                alt={`Foto de ${profile.name}`}
                width={480}
                height={480}
                priority
                className="aspect-square size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div style={{ transform: "translateZ(28px)" }} className="mt-5">
          <p className="text-sm font-semibold text-foreground">Informações</p>

          <dl className="mt-4 space-y-3 text-sm">
            <InfoRow label="Localização" value={profile.location} />
            <InfoRow label="Formação" value={`${education.course} · ${education.school}`} />
            <InfoRow label="Aprendizado" value="Sempre buscando novos conhecimentos" />
          </dl>

          <div className="mt-5 space-y-2 border-t border-line pt-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4 shrink-0 text-accent" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <WhatsappIcon className="size-4 shrink-0 text-accent" />
              {profile.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted/70">{label}</dt>
      <dd className="mt-0.5 text-foreground">{value}</dd>
    </div>
  );
}
