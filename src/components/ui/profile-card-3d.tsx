"use client";

import Image from "next/image";
import { education, profile } from "@/data/profile";
import { mainTechs } from "@/data/tech";
import { MailIcon, WhatsappIcon } from "../icons";
import { TechLogo } from "./tech-logo";

/**
 * Card 3D que "vira": a frente mostra as informações (localização, formação,
 * stacks e contato) e, ao passar o mouse (ou tocar, no celular), o card gira
 * em 180° e revela a foto. O card é quadrado para a foto (também quadrada)
 * se ajustar sem cortes.
 */
export function ProfileCard3D() {
  return (
    <div className="group relative mx-auto w-full max-w-sm [perspective:1400px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl"
      />

      <div className="relative aspect-square rounded-[1.75rem] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)] motion-reduce:transition-none">
        {/* FRENTE — Informações */}
        <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-line bg-card/80 p-5 shadow-2xl shadow-black/50 backdrop-blur [backface-visibility:hidden]">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-foreground">Informações</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted/70">
                <FlipIcon className="size-3.5" />
                Passe o mouse
              </span>
            </div>

            <dl className="space-y-3 text-sm">
              <InfoRow label="Localização" value={profile.location} />
              <InfoRow label="Formação" value={`${education.course} · ${education.school}`} />
            </dl>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted/70">
                Stacks principais
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {mainTechs.map((tech) => (
                  <li key={tech.slug}>
                    <span
                      title={tech.title}
                      style={{ ["--brand" as string]: `#${tech.hex}` }}
                      className="group/tech inline-flex items-center gap-1.5 rounded-full border border-line bg-background/50 px-2.5 py-1 text-[11px] font-medium text-muted transition-colors hover:border-[var(--brand)]/50 hover:text-foreground"
                    >
                      <TechLogo
                        icon={tech}
                        className="size-3.5 shrink-0 transition-colors group-hover/tech:text-[var(--brand)]"
                      />
                      {tech.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 space-y-2 border-t border-line pt-4">
            <p className="text-xs uppercase tracking-wide text-muted/70">Contato</p>
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

        {/* VERSO — Foto */}
        <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-line bg-card shadow-2xl shadow-black/50 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src="/lucas-oliveira.jpg"
            alt={`Foto de ${profile.name}`}
            width={560}
            height={560}
            priority
            className="size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-sm font-semibold text-foreground">{profile.name}</p>
            <p className="mt-0.5 text-xs text-muted">Volte o mouse para as informações</p>
          </div>
        </div>
      </div>
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

function FlipIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M12 3v18" strokeDasharray="2 3" />
      <path d="M8 7 4.5 10.5 8 14" />
      <path d="m16 10 3.5 3.5L16 17" />
    </svg>
  );
}
