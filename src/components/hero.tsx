import { profile } from "@/data/profile";
import {
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "./icons";
import { Magnetic } from "./ui/magnetic";
import { PhotoFrame } from "./ui/photo-frame";
import { Reveal } from "./ui/reveal";
import { TechMarquee } from "./tech-marquee";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <span className="chip">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                Disponível para novos projetos
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                <span className="text-gradient">{profile.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
                <span className="font-semibold text-foreground">{profile.role}</span>{" "}
                — {profile.headline}.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic
                  href="#projetos"
                  className="group gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background"
                >
                  Ver projetos
                  <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Magnetic>
                <Magnetic
                  href={profile.resume}
                  target="_blank"
                  className="gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:bg-accent-soft"
                >
                  <DownloadIcon className="size-4" />
                  Currículo
                </Magnetic>

                <div className="flex items-center gap-1 pl-1">
                  <IconButton href={profile.github} label="GitHub">
                    <GithubIcon className="size-[18px]" />
                  </IconButton>
                  <IconButton href={profile.linkedin} label="LinkedIn">
                    <LinkedinIcon className="size-[18px]" />
                  </IconButton>
                  <IconButton href={`mailto:${profile.email}`} label="E-mail">
                    <MailIcon className="size-[18px]" />
                  </IconButton>
                  <IconButton href={profile.whatsapp} label="WhatsApp">
                    <WhatsappIcon className="size-[18px]" />
                  </IconButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="bg-background/60 px-5 py-4 backdrop-blur">
                    <dt className="text-2xl font-bold tracking-tight text-foreground">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-tight text-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <PhotoFrame />
          </Reveal>
        </div>
      </div>

      <Reveal>
        <TechMarquee />
      </Reveal>
    </section>
  );
}

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-full border border-line bg-card text-muted transition-colors hover:border-accent/60 hover:text-foreground"
    >
      {children}
    </a>
  );
}
