"use client";

import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { Section, SectionHeading } from "./section";
import { ChevronIcon, ExternalIcon, GithubIcon, LockIcon } from "./icons";
import { SpotlightCard } from "./ui/spotlight-card";
import { Reveal, StaggerItem } from "./ui/reveal";

type Filter = ProjectCategory | "Todos";

const filters: Filter[] = ["Todos", ...projectCategories];

export function Projects() {
  const [active, setActive] = useState<Filter>("Todos");

  const visible = useMemo(
    () => (active === "Todos" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["Todos", projects.length]]);
    for (const category of projectCategories) {
      map.set(category, projects.filter((p) => p.category === category).length);
    }
    return map;
  }, []);

  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos em Destaque"
        description="Uma seleção das principais soluções desenvolvidas e as tecnologias aplicadas. Alguns repositórios são mantidos privados por acordos de confidencialidade (NDA), questões contratuais/proprietárias ou uso corporativo."
      />

      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-transparent bg-foreground text-background"
                    : "border-line bg-card text-muted hover:text-foreground"
                }`}
              >
                {filter}
                <span
                  className={`font-mono text-xs ${
                    isActive ? "text-background/60" : "text-muted/60"
                  }`}
                >
                  {counts.get(filter)}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

function ExpandableSystems({
  systems,
}: {
  systems: { icon: string; name: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 rounded-xl border border-line bg-background/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <span className="grid size-5 place-items-center rounded-md bg-accent-soft text-[10px] font-bold text-accent">
            {systems.length}
          </span>
          sistemas dentro da plataforma
        </span>
        <ChevronIcon
          className={`size-4 shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0">
          <li className="flex flex-wrap gap-1.5 px-4 pb-4">
            {systems.map((system) => (
              <span
                key={system.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-2 py-1 text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <span aria-hidden>{system.icon}</span>
                {system.name}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <StaggerItem index={index} className="h-full">
      <SpotlightCard
        beam={Boolean(project.highlight)}
        className={`h-full p-6 ${project.highlight ? "ring-1 ring-accent/20" : ""}`}
      >
        <article className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                {project.highlight ? (
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                    Destaque
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-muted">{project.tagline}</p>
            </div>
            {project.period ? (
              <span className="shrink-0 whitespace-nowrap font-mono text-[11px] text-muted/70">
                {project.period}
              </span>
            ) : null}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

          {project.systems?.length ? (
            <ExpandableSystems systems={project.systems} />
          ) : null}

          <ul className="mt-5 mb-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-line pt-4">
            {project.private ? (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <LockIcon className="size-3.5" />
                Repositório privado
              </span>
            ) : null}

            {project.links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                {link.url.includes("github.com") ? (
                  <GithubIcon className="size-4" />
                ) : (
                  <ExternalIcon className="size-4" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </SpotlightCard>
    </StaggerItem>
  );
}
