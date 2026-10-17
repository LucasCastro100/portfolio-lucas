import { profile } from "@/data/profile";
import { Section, SectionHeading } from "./section";
import { Reveal, StaggerItem } from "./ui/reveal";
import {
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "./icons";

export function Contact() {
  return (
    <Section id="contato">
      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <SectionHeading
              eyebrow="Contato"
              title="Vamos conversar"
              description="Aberto a oportunidades, freelances e parcerias. Me chama em qualquer um dos canais abaixo."
            />

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                <MailIcon className="size-4" />
                Enviar e-mail
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10"
              >
                <WhatsappIcon className="size-4 text-emerald-400" />
                Chamar no WhatsApp
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent-soft"
              >
                <DownloadIcon className="size-4" />
                Baixar currículo
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StaggerItem index={0}>
                <ContactCard
                  icon={<GithubIcon className="size-4" />}
                  label="GitHub"
                  value={`@${profile.githubUser}`}
                  href={profile.github}
                />
              </StaggerItem>
              <StaggerItem index={1}>
                <ContactCard
                  icon={<LinkedinIcon className="size-4" />}
                  label="LinkedIn"
                  value="lucas-oliveira"
                  href={profile.linkedin}
                />
              </StaggerItem>
              <StaggerItem index={2}>
                <ContactCard
                  icon={<MailIcon className="size-4" />}
                  label="E-mail"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
              </StaggerItem>
              <StaggerItem index={3}>
                <ContactCard
                  icon={<WhatsappIcon className="size-4" />}
                  label="WhatsApp"
                  value={profile.phone}
                  href={profile.whatsapp}
                />
              </StaggerItem>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex h-full items-center gap-3 rounded-xl border border-line bg-background/50 px-4 py-3 transition-colors hover:border-accent/50"
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted/70">{label}</span>
        <span className="block truncate text-sm text-foreground">{value}</span>
      </span>
    </a>
  );
}
