export const profile = {
  name: "Lucas Henrique de Castro Oliveira",
  shortName: "Lucas Oliveira",
  role: "Engenheiro de Software",
  headline: "Desenvolvedor Full Stack | +8 anos de experiência",
  tagline:
    "Há mais de 8 anos transformando problemas de negócio em SaaS, sistemas de gestão, marketplaces e automações que rodam em produção.",
  location: "Uberaba, MG · Brasil",
  email: "lucascastro121295@gmail.com",
  phone: "+55 (34) 99153-5839",
  whatsapp: "https://wa.me/5534991535839",
  whatsappLabel: "WhatsApp",
  github: "https://github.com/LucasCastro100",
  githubUser: "LucasCastro100",
  linkedin: "https://www.linkedin.com/in/lucas-oliveira-38993a202/",
  resume: "/curriculo-lucas-oliveira.pdf",
  githubBio: {
    intro:
      "Há mais de 8 anos transformando problemas reais em soluções tecnológicas — de prototipagem física e robótica ao desenvolvimento de software completo em escala.",
    trajectory:
      "Minha trajetória une o raciocínio prático da cultura maker (Arduino, automação, prototipagem) à engenharia de software moderna. Atuei na formação tecnológica e na criação de aplicações web de ponta a ponta: do modelo de dados e arquitetura de APIs ao frontend reativo, infraestrutura e deploy.",
    stack: [
      { label: "Frontend", value: "React, Next.js, TypeScript, Tailwind CSS" },
      { label: "Backend & APIs", value: "Node.js, NestJS, Laravel, Python, REST APIs" },
      { label: "DevOps & Infra", value: "Docker, Nginx, CI/CD, Automações (n8n)" },
    ],
    closing:
      "Foco em conectar código limpo, automação inteligente e usabilidade para entregar impacto direto ao negócio.",
  },
  stats: [
    { value: "8+", label: "anos de experiência" },
    { value: "~213k", label: "linhas de código" },
    { value: "20", label: "sistemas em 1 plataforma" },
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Frella",
    role: "Desenvolvedor Full-Stack",
    period: "mar/2020 – atual",
    current: true,
    description:
      "Desenvolvimento de sistemas, sites e landing pages para clientes, atuando de ponta a ponta.",
    highlights: [
      "Arquitetura do SaaS IdeasDev: 20 sistemas de gestão isolados, 75 tabelas e ~36 mil linhas num único codebase Laravel/Livewire.",
      "DataFi — app de gestão de marketing, com dashboards de métricas de campanhas (Meta e Google), relatórios por cliente e integração com WhatsApp.",
      "Clubset — plataforma para videomakers com permutas e troca de serviços, créditos e assinaturas via Stripe (2FA e Passkeys).",
      "Neuro Comunicação — plataforma de cursos EAD focada em PNL, com certificados em PDF e checkout via Stripe.",
      "Control School — painel das escolas atendidas pela empresa, com automação de cadastro e inserção de dados via web scraping (Playwright).",
      "Automações com n8n — fluxos que integram APIs e sistemas internos e eliminam tarefas manuais repetitivas.",
    ],
  },
  {
    company: "Zoom Education For Life",
    role: "Orientador Tecnológico",
    period: "fev/2021 – atual",
    current: true,
    description:
      "Orientação de professores em programação com Lego, Matata, Arduino e Tinkercad durante visitas a escolas.",
    highlights: [
      "Captação de juízes e feedback no evento Torneio Brasil de Robótica.",
      "Apoio na construção e programação de robôs nas escolas parceiras.",
    ],
  },
  {
    company: "Candido Sistemas",
    role: "Desenvolvedor Full-Stack (Adonis | Angular)",
    period: "out/2019 – mar/2020",
    description:
      "Desenvolvimento de um SaaS para gestão e controle de empresas utilizando Adonis e Angular.",
  },
  {
    company: "Companhia da Mídia",
    role: "Desenvolvedor Full-Stack PHP",
    period: "out/2018 – out/2019",
    description:
      "Desenvolvimento de sites com PHP e JavaScript, inserção de conteúdo e campanhas de marketing com Google Ads.",
  },
];

export const education = {
  school: "UNIUBE — Universidade de Uberaba",
  course: "Sistema de Informação",
} as const;
