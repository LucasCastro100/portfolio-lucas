import { education, profile } from "@/data/profile";
import { MailIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./ui/reveal";

/**
 * Bloco "Sobre" — fica logo abaixo do hero, dentro da mesma seção,
 * para que a foto e o texto sobre mim apareçam juntos.
 */
export function AboutBlock() {
  const { githubBio } = profile;

  return (
    <div id="sobre" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-16 sm:pt-14 sm:pb-24">
        <Reveal>
          <div className="mb-8 max-w-2xl border-t border-line pt-10">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Sobre
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Full-stack de verdade: do banco de dados à interface
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="card h-full p-6 sm:p-8">
              <div className="grid gap-6">
                {githubBio.pillars.map((pillar) => (
                  <div key={pillar.title}>
                    <p className="font-semibold text-foreground">{pillar.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="card h-fit p-6">
              <p className="text-sm font-semibold">Informações</p>
              <dl className="mt-5 space-y-4 text-sm">
                <InfoRow label="Localização" value={profile.location} />
                <InfoRow label="Formação" value={`${education.course} · ${education.school}`} />
                <InfoRow label="Aprendizado" value="Sempre buscando novos conhecimentos" />
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
