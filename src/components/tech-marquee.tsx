"use client";

import { marqueeTechs } from "@/data/tech";
import { InfiniteMarquee } from "./ui/infinite-marquee";
import { TechLogo } from "./ui/tech-logo";

export function TechMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <InfiniteMarquee duration={reverse ? 96 : 80} reverse={reverse}>
        {marqueeTechs.map((tech) => (
          <span
            key={tech.slug}
            style={{ ["--brand" as string]: `#${tech.hex}` }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2 transition-colors hover:border-[var(--brand)]/50"
          >
            <TechLogo
              icon={tech}
              className="size-4 shrink-0 text-muted transition-colors group-hover:text-[var(--brand)]"
            />
            <span className="whitespace-nowrap text-xs font-medium text-muted transition-colors group-hover:text-foreground">
              {tech.title}
            </span>
          </span>
        ))}
      </InfiniteMarquee>
    </div>
  );
}
