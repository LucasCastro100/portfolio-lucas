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
import { ProfileCard3D } from "./ui/profile-card-3d";
import { Reveal } from "./ui/reveal";
import { BlurFade } from "./ui/blur-fade";
import { NumberTicker } from "./ui/number-ticker";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <Reveal>
              <span className="chip">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                Disponível para novos projetos
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
                {profile.role}
              </p>
            </Reveal>

            <BlurFade delay={0.1}>
              <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="mt-6 max-w-2xl text-xl font-medium leading-snug text-foreground sm:text-2xl">
                {profile.headline}
              </p>
            </BlurFade>

            <Reveal delay={0.25}>
              <div className="mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-muted">
                {profile.githubBio.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {profile.githubBio.stackLabel}
                </p>
                <dl className="mt-3 space-y-1.5 text-sm">
                  {profile.githubBio.stack.map((group) => (
                    <div key={group.label} className="flex flex-wrap gap-x-1.5">
                      <dt className="font-medium text-foreground">{group.label}:</dt>
                      <dd className="text-muted">{group.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                {profile.githubBio.closing}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic
                  href="#projetos"
                  className="shine group gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_-12px_var(--accent)]"
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

            <Reveal delay={0.35}>
              <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="bg-background/60 px-5 py-4 backdrop-blur">
                    <dt className="text-2xl font-bold tracking-tight text-foreground">
                      <NumberTicker value={stat.value} />
                    </dt>
                    <dd className="mt-1 text-xs leading-tight text-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <BlurFade delay={0.25}>
            <ProfileCard3D />
          </BlurFade>
        </div>
      </div>
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
