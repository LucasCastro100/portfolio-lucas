import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowIcon,
  ExternalIcon,
  GithubIcon,
  LockIcon,
  SparkIcon,
} from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Projeto não encontrado" };

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} · Lucas Oliveira`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const domain = project.site
    ? new URL(project.site).hostname.replace(/^www\./, "")
    : null;

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-5 pt-10 pb-24 sm:pt-14">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowIcon className="size-4 rotate-180" />
          Voltar aos projetos
        </Link>

        <Reveal>
          <header className="mt-10 border-b border-line pb-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <span>{project.category}</span>
              {project.period ? (
                <span className="text-muted/70">· {project.period}</span>
              ) : null}
              {project.highlight ? (
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] tracking-wide text-accent">
                  Destaque
                </span>
              ) : null}
              {project.private ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 text-[10px] tracking-wide text-muted">
                  <LockIcon className="size-3" />
                  Privado
                </span>
              ) : null}
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
              {project.tagline}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.05}>
          <section aria-label="Prévia do site" className="mt-10">
            {project.site ? (
              <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-2xl shadow-black/40">
                <div className="flex items-center gap-3 border-b border-line bg-background/70 px-4 py-3">
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="size-2.5 rounded-full bg-red-400/70" />
                    <span className="size-2.5 rounded-full bg-amber-400/70" />
                    <span className="size-2.5 rounded-full bg-emerald-400/70" />
                  </span>
                  <span className="truncate rounded-md border border-line px-3 py-1 font-mono text-xs text-muted">
                    {domain}
                  </span>
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-accent hover:text-foreground"
                  >
                    Abrir site
                    <ExternalIcon className="size-3.5" />
                  </a>
                </div>
                <iframe
                  src={project.site}
                  title={`Prévia de ${project.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  className="h-[320px] w-full bg-white sm:h-[520px]"
                />
                <p className="border-t border-line px-4 py-2 text-xs text-muted/70">
                  Alguns sites bloqueiam a exibição dentro de um iframe. Use “Abrir
                  site” para ver a versão completa.
                </p>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-line bg-card px-6 py-14 text-center">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <span className="mx-auto grid size-12 place-items-center rounded-xl border border-line bg-background/60 text-accent">
                  <ExternalIcon className="size-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  Site em breve
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
                  O link de produção deste projeto será adicionado aqui, com uma
                  prévia e o resumo do que ele faz.
                </p>
              </div>
            )}
          </section>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Visão geral
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {project.description}
              </p>

              {project.systems?.length ? (
                <>
                  <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                    O que ele faz
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {project.systems.map((system) => (
                      <li
                        key={system.name}
                        className="flex items-center gap-2.5 rounded-xl border border-line bg-card px-3 py-2.5 text-sm text-muted"
                      >
                        <span aria-hidden>{system.icon}</span>
                        {system.name}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  Stack
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  Links
                </h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.site ? (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground"
                    >
                      <ExternalIcon className="size-4" />
                      Site
                    </a>
                  ) : null}
                  {project.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground"
                    >
                      {link.url.includes("github.com") ? (
                        <GithubIcon className="size-4" />
                      ) : (
                        <ExternalIcon className="size-4" />
                      )}
                      {link.label}
                    </a>
                  ))}
                  {!project.site && !project.links?.length ? (
                    <p className="flex items-center gap-2 text-sm text-muted">
                      <SparkIcon className="size-4 text-accent" />
                      Repositório privado
                    </p>
                  ) : null}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
