import type { ComponentType } from "react";
import { BotIcon, LayoutIcon, ServerIcon } from "./icons";
import { Section, SectionHeading } from "./section";
import { Reveal } from "./ui/reveal";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  items: string[];
};

const services: Service[] = [
  {
    icon: LayoutIcon,
    title: "Desenvolvimento Full-Stack",
    description:
      "Sistemas de gestão, marketplaces e SaaS sob medida — do banco de dados à interface.",
    items: [
      "Aplicações end-to-end (Next.js, Node.js, Laravel)",
      "APIs, autenticação (2FA/Passkeys) e pagamentos",
      "Dashboards, relatórios e integrações",
    ],
  },
  {
    icon: ServerIcon,
    title: "DevOps & Infra",
    description: "Coloco no ar, mantenho e escalo: containerização, CI/CD e operação.",
    items: [
      "Docker e ambientes reproduzíveis",
      "CI/CD com GitHub Actions",
      "Linux, Nginx/Traefik e Portainer",
    ],
  },
  {
    icon: BotIcon,
    title: "Automações & Integrações",
    description: "Elimino trabalho manual com robôs, scraping e fluxos automatizados.",
    items: [
      "Web scraping (Python, Selenium, Playwright)",
      "Fluxos e integrações com n8n",
      "Sincronização de dados e relatórios",
    ],
  },
];

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="Serviços"
        title="Desenvolvimento Full-Stack & Automação"
        description="Atuo em todas as etapas do ciclo de software: da concepção do produto e arquitetura da aplicação ao deploy em produção e automação de processos estratégicos."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.05}>
              <div className="card h-full p-6 transition-colors hover:border-accent/40">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
