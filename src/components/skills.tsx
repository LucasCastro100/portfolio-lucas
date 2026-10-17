import { techGroups } from "@/data/tech";
import { Section, SectionHeading } from "./section";
import { TechMarquee } from "./tech-marquee";
import { TechLogo } from "./ui/tech-logo";
import { Reveal } from "./ui/reveal";

export function Skills() {
  return (
    <Section id="stacks">
      <SectionHeading
        eyebrow="Stacks"
        title="Tecnologias que uso no dia a dia"
        description="Desenvolvimento full-stack, automação de processos e infraestrutura ágil em ambientes de produção."
      />

      <Reveal className="mb-10">
        <TechMarquee />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {techGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <div className="card h-full p-6 transition-colors hover:border-accent/40">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                <span className="font-mono text-[11px] text-muted/60">
                  {group.techs.length} techs
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted">{group.description}</p>

              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5 sm:grid-cols-3">
                {group.techs.map((tech) => (
                  <li
                    key={tech.slug}
                    style={{ ["--brand" as string]: `#${tech.hex}` }}
                    className="group flex items-center gap-2"
                  >
                    <TechLogo
                      icon={tech}
                      className="size-[18px] shrink-0 text-muted transition-colors group-hover:text-[var(--brand)]"
                    />
                    <span className="truncate text-xs text-muted transition-colors group-hover:text-foreground">
                      {tech.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
