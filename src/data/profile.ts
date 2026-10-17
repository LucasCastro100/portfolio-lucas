export const profile = {
  name: "Lucas Henrique de Castro Oliveira",
  shortName: "Lucas Oliveira",
  role: "Desenvolvedor Full-Stack",
  headline: "Construo plataformas web de ponta a ponta.",
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
    greeting: "Oi, eu sou o Lucas Oliveira",
    role: "Full-Stack Developer · Automação · Tecnologia Educacional",
    paragraphs: [
      "Há mais de 8 anos desenvolvendo para a web: evoluí da criação de landing pages em HTML, CSS e PHP para a construção de arquiteturas modernas e escaláveis.",
      "No caminho já são 18 repositórios no GitHub (15 públicos), ~213 mil linhas de código próprias e mais de 2.100 arquivos de projeto.",
      "Hoje me divido entre o desenvolvimento de software e a tecnologia educacional.",
    ],
    pillars: [
      {
        title: "Full-Stack Engineering",
        text: "No dia a dia construo aplicações end-to-end com Next.js, TypeScript e Node.js. Em ecossistemas mais robustos, atuo com Laravel no backend e uso Python para automações e raspagem de dados.",
      },
      {
        title: "Tecnologia Educacional",
        text: "Oriento professores no ensino de pensamento computacional para crianças e jovens (3 a 16 anos). Essa vivência refinou minha capacidade de desmistificar conceitos complexos e criar código limpo e intuitivo.",
      },
      {
        title: "Freelancer",
        text: "Disponível para projetos web, integrações de APIs e automações sob medida.",
      },
    ],
  },
  about: [
    "Desenvolvedor Full-Stack com mais de 8 anos de experiência criando aplicações web escaláveis. Trabalho com Next.js, Node.js, Laravel e Python — do design da interface à modelagem do banco e ao deploy.",
    "Já são ~213 mil linhas de código próprias em 18 repositórios: de uma plataforma que hospeda 20 sistemas de gestão em um único codebase Laravel/Livewire a SaaS em Next.js + Prisma, marketplaces com Stripe e automações em Python/Selenium.",
    "Gosto de produto bem-acabado: interfaces cuidadas, código organizado e automação onde ela realmente economiza tempo.",
  ],
  stats: [
    { value: "8+", label: "anos de experiência" },
    { value: "18", label: "repositórios" },
    { value: "~213k", label: "linhas de código" },
    { value: "20", label: "sistemas em 1 plataforma" },
  ],
} as const;

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "React Three Fiber",
      "Recharts",
      "FullCalendar",
    ],
  },
  {
    title: "Backend & Banco",
    icon: "server",
    skills: [
      "Node.js",
      "Laravel",
      "PHP",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "REST APIs",
      "Sanctum / Auth.js",
    ],
  },
  {
    title: "Automação & Dados",
    icon: "bot",
    skills: [
      "Python",
      "Selenium",
      "pandas",
      "Streamlit",
      "Matplotlib",
      "ThreadPoolExecutor",
      "Web Scraping",
      "Excel / CSV",
    ],
  },
  {
    title: "DevOps & Ferramentas",
    icon: "wrench",
    skills: [
      "Git & GitHub",
      "Docker",
      "Vite",
      "pnpm",
      "Playwright",
      "Vitest",
      "Biome",
      "Stripe",
    ],
  },
];

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
  extra: "Curso complementar: Python Básico",
} as const;
