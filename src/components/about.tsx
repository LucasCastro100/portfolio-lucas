import { education, profile } from "@/data/profile";
import { Section, SectionHeading } from "./section";
import { MailIcon, SparkIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./ui/reveal";

export function About() {
  const { githubBio } = profile;

  return (
    <Section id="sobre">
      <SectionHeading
        eyebrow="Sobre"
        title="Do frontend animado ao backend escalável"
        description="Um pouco sobre como eu trabalho e o que já construí — direto do meu perfil no GitHub."
      />

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <div className="card p-6 sm:p-8">
              <p className="text-lg font-semibold text-foreground">
                {githubBio.greeting} 👋
              </p>
              <p className="mt-1 text-sm text-accent">{githubBio.role}</p>

              <div className="mt-5 space-y-3">
                {githubBio.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 grid gap-3 border-t border-line pt-6">
                {githubBio.pillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm leading-relaxed text-muted">
                      <span className="font-semibold text-foreground">{pillar.title}: </span>
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <aside className="card h-fit p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <SparkIcon className="size-4 text-accent" />
              Informações
            </div>
            <dl className="mt-5 space-y-4 text-sm">
              <InfoRow label="Localização" value={profile.location} />
              <InfoRow label="Formação" value={`${education.course} · ${education.school}`} />
              <InfoRow label="Cursos" value={education.extra} />
              <InfoRow label="Idiomas" value="Português (nativo) · Inglês (leitura técnica)" />
            </dl>

            <div className="mt-6 space-y-2 border-t border-line pt-5">
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
          </aside>
        </Reveal>
      </div>
    </Section>
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
