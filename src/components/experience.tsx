import { experiences } from "@/data/profile";
import { Section, SectionHeading } from "./section";
import { StaggerItem } from "./ui/reveal";

export function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeading
        eyebrow="Experiência"
        title="Trajetória profissional"
      />

      <ol className="relative border-l border-line">
        {experiences.map((exp, index) => (
          <li key={`${exp.company}-${exp.period}`} className="ml-6 pb-10 last:pb-0">
            <span
              className={`absolute -left-[7px] mt-1.5 size-3 rounded-full border-2 border-background ${
                exp.current ? "bg-emerald-400" : "bg-muted/50"
              }`}
            />
            <StaggerItem index={index}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.role} · <span className="text-accent">{exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted/70">{exp.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{exp.description}</p>
              {exp.highlights?.length ? (
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </StaggerItem>
          </li>
        ))}
      </ol>
    </Section>
  );
}
