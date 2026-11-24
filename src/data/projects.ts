export type ProjectCategory =
  | "Full-Stack"
  | "Frontend"
  | "Automação"
  | "DevOps"
  | "Conteúdo";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  links?: ProjectLink[];
  /** URL do site em produção — habilita o preview na página de detalhes. */
  site?: string;
  /** Estudos/referências: ficam na marcação compacta, fora da lista principal. */
  study?: boolean;
  private?: boolean;
  highlight?: boolean;
  period?: string;
  /** Módulos/sistemas internos de uma plataforma multi-sistema. */
  systems?: { icon: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "ideias-dev",
    name: "Ideias.dev.br",
    tagline: "Plataforma multi-sistema com 20 módulos de gestão",
    description:
      "Plataforma que hospeda 20 sistemas de gestão independentes dentro de um único codebase Laravel 12 + Livewire 3. Cada módulo tem rotas, models, migrations e telas próprias, isolados por usuário via system_id + middleware de acesso — sem virar um monolito ingovernável. Tem ainda uma vitrine pública (/projetos) que apresenta e vende os sistemas, e um painel de super admin que enxerga todos.",
    category: "Full-Stack",
    stack: [
      "Laravel 12",
      "Livewire 3",
      "Jetstream",
      "Tailwind CSS",
      "Chart.js",
      "DomPDF",
      "SQLite",
    ],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/ideias_dev" }],
    site: "https://ideias.dev.br",
    highlight: true,
    period: "jul/2025 – atual",
    systems: [
      { icon: "🎯", name: "TBR — Eventos" },
      { icon: "💰", name: "Financeiro" },
      { icon: "👥", name: "Clientes & Planos" },
      { icon: "💼", name: "Vagas de Emprego" },
      { icon: "🎓", name: "Gestão Escolar / EAD" },
      { icon: "🧾", name: "Ordem de Serviço" },
      { icon: "🌐", name: "Marketing Multinível" },
      { icon: "⚖️", name: "Advocacia" },
      { icon: "🚗", name: "Corridas / Mobilidade" },
      { icon: "💬", name: "Rede Social" },
      { icon: "☁️", name: "Armazenamento em Nuvem" },
      { icon: "🛒", name: "Vendas / PDV" },
      { icon: "🍽️", name: "Restaurante / Mesas" },
      { icon: "🍕", name: "Pizzaria Delivery" },
      { icon: "🎫", name: "Central de Suporte" },
      { icon: "📄", name: "Site Institucional / CMS" },
      { icon: "🏥", name: "Clínicas" },
      { icon: "🏭", name: "Controle Empresarial (RH + NFe)" },
      { icon: "🔨", name: "Marketplace / Leilões" },
      { icon: "🏬", name: "Loja Virtual" },
    ],
  },
  {
    slug: "clubset",
    name: "Clubset",
    tagline: "Permutas e troca de serviços para videomakers",
    description:
      "Marketplace para videomakers: anúncios de equipamento com moderação, serviços de produção, matches para troca direta/venda/permuta por créditos, livro-razão de créditos, disputas e assinaturas trial/pro/max via Stripe com bloqueio automático por inadimplência. Segurança forte com 2FA (TOTP) e login por Passkey (WebAuthn).",
    category: "Full-Stack",
    stack: [
      "Laravel 13",
      "React 19",
      "Inertia.js",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Stripe",
      "Fortify (2FA + Passkeys)",
    ],
    private: true,
    highlight: true,
    period: "em andamento",
  },
  {
    slug: "control-school-front",
    name: "Control School — Frontend",
    tagline: "Gestão escolar com automação de cadastro e web scraping",
    description:
      "Painel de gestão das unidades escolares atendidas pela empresa: escolas, turmas, salas, alunos, horários, itens (tapetes/tecnologias), times TBR e múltiplos anos letivos. Faz proxy para a API Laravel, exporta Excel e usa animações/3D com GSAP e React Three Fiber. Também importa planilhas .xlsx, insere alunos no MundoZ via Playwright e gera cards de acesso em PDF.",
    category: "Full-Stack",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Three Fiber",
      "Playwright",
    ],
    private: true,
    highlight: true,
    period: "jun/2026 – atual",
  },
  {
    slug: "control-school-back",
    name: "Control School — API",
    tagline: "Backend Laravel 13 + Sanctum do painel escolar",
    description:
      "API do Control School com autenticação por token, papéis por perfil e endpoints para escolas, turmas, alunos, horários e rotinas de importação de dados.",
    category: "Full-Stack",
    stack: ["Laravel 13", "Sanctum", "PHP"],
    private: true,
    period: "jun/2026 – atual",
  },
  {
    slug: "control-school",
    name: "Control School (primeira versão)",
    tagline: "Versão inicial do sistema multi-escolar",
    description:
      "Primeira versão do gerenciador de escolas: cadastro de escolas, turmas, salas, alunos, horários e itens pedagógicos, com persistência local via localStorage.",
    category: "Frontend",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/LucasCastro100/control-school",
      },
    ],
    period: "2026",
  },
  {
    slug: "odontopro",
    name: "OdontoPro",
    tagline: "SaaS para clínicas odontológicas",
    description:
      "Plataforma SaaS para clínicas odontológicas: cadastro de profissionais e serviços, agenda e painel administrativo, com autenticação via Auth.js e persistência em PostgreSQL através do Prisma.",
    category: "Full-Stack",
    stack: [
      "Next.js 16",
      "React 19",
      "Prisma 7",
      "PostgreSQL",
      "Auth.js (next-auth 5)",
      "TypeScript",
      "pnpm",
    ],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/odontopro" }],
    highlight: true,
    period: "em desenvolvimento",
  },
  {
    slug: "neurocomunicacao",
    name: "Neuro Comunicação Brasil",
    tagline: "Plataforma de cursos EAD de PNL com certificados",
    description:
      "Plataforma EAD focada em PNL (Programação Neurolinguística), com cursos, módulos e aulas, matrículas, materiais, comentários e dúvidas, avaliações com notas, certificados em PDF e checkout por Stripe. Painéis separados para administrador, professor e aluno, além de um Teste Representacional público com resultado compartilhável.",
    category: "Full-Stack",
    stack: [
      "Laravel 11",
      "Blade",
      "Alpine.js",
      "Tailwind CSS 3",
      "DomPDF",
      "Intervention Image",
      "Stripe",
      "Vite",
    ],
    private: true,
    period: "em andamento",
  },
  {
    slug: "calendario-unificado",
    name: "Calendário Unificado",
    tagline: "Agendas externas unificadas em uma só visão",
    description:
      "Aplicação que unifica agendas de terceiros numa visão única. O backend Laravel expõe a API e faz a integração por OAuth (Socialite); o frontend Next.js renderiza dia, semana, mês e lista com FullCalendar e atualização de dados via TanStack Query.",
    category: "Full-Stack",
    stack: [
      "Laravel 12",
      "Sanctum",
      "Socialite (OAuth)",
      "Next.js 16",
      "FullCalendar",
      "TanStack Query",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/LucasCastro100/calendario-unificado",
      },
    ],
    period: "em andamento",
  },
  {
    slug: "register-students",
    name: "register-students",
    tagline: "Automação de cadastro em paralelo com Selenium",
    description:
      "Automação que lê uma planilha Excel, abre vários navegadores Chrome em paralelo (ThreadPoolExecutor), preenche o formulário de cadastro e gera um cartão de login em PDF por aluno — protegida por lock para evitar conflito de escrita no Excel.",
    category: "Automação",
    stack: [
      "Python 3",
      "Selenium",
      "pandas",
      "python-dotenv",
      "ThreadPoolExecutor",
      "Chrome",
      "PDF",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/LucasCastro100/register-students",
      },
    ],
    period: "em andamento",
  },
  {
    slug: "datafi",
    name: "DataFi",
    tagline: "App de gestão de marketing",
    description:
      "App de gestão de marketing para agências: dashboards com métricas de campanhas (Meta e Google), relatórios por cliente com editor, integração com WhatsApp, alertas e exportação de overview, além de autenticação (incluindo login social) e assinatura via checkout.",
    category: "Frontend",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Auth.js",
      "Recharts",
    ],
    private: true,
  },
  {
    slug: "style-hub",
    name: "Style Hub",
    tagline: "Hub de bibliotecas UI com sandbox de componentes",
    description:
      "Diretório de bibliotecas e ferramentas de UI com sandbox e previews interativos — reúne e documenta componentes reutilizáveis para acelerar a escolha em novos projetos.",
    category: "Frontend",
    stack: ["Next.js 16", "React", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/style-hub" }],
    period: "set/2026",
  },
  {
    slug: "app-financas",
    name: "App Finanças",
    tagline: "Gestão financeira pessoal com gráficos",
    description:
      "Sistema de gerenciamento financeiro pessoal: lançamentos de receitas e despesas, categorias e gráficos de evolução, com formulários validados por Zod.",
    category: "Frontend",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Radix UI",
      "Recharts",
      "React Hook Form",
      "Zod",
    ],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/app-financas" }],
    period: "ago/2026",
  },
  {
    slug: "base-nextjs",
    name: "Base Next.js",
    tagline: "Template base para novos projetos Next.js",
    description:
      "Ponto de partida padrão dos meus projetos frontend: Next.js (App Router) com shadcn/ui, Tailwind, validação com Zod, gráficos Recharts e tema claro/escuro já configurados.",
    category: "Frontend",
    stack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Zod",
      "Recharts",
    ],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/base-nextjs" }],
    study: true,
    period: "ago/2026",
  },
  {
    slug: "cola-componente",
    name: "Cola Componente",
    tagline: "Referência de componentes para copiar e colar",
    description:
      "Coleção de guias em Markdown cobrindo botões, cards, modais/CRUD, formulários, listas, avatares, dropdowns e providers — implementações prontas usadas como referência no dia a dia.",
    category: "Frontend",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Markdown"],
    links: [
      { label: "GitHub", url: "https://github.com/LucasCastro100/cola-componente" },
    ],
    study: true,
    period: "set/2026",
  },
  {
    slug: "pyton",
    name: "pyton",
    tagline: "Fundamentos de Python organizados por tópico",
    description:
      "Repositório didático de Python: introdução, POO, coleções, manipulação de arquivos (CSV), banco de dados (MySQL e MongoDB), decorators, módulos e PIP, automações e análise de dados.",
    category: "Automação",
    stack: [
      "Python 3",
      "Tkinter",
      "MySQL",
      "MongoDB (PyMongo)",
      "Matplotlib",
      "Requests",
    ],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/pyton" }],
    study: true,
    period: "jan/2025 – atual",
  },
  {
    slug: "rcstudio",
    name: "RC Studio",
    tagline: "Site institucional de estúdio de produção musical",
    description:
      "Site institucional da RC Studio (rcstudio.com.br). Páginas montadas no Elementor, com cache LiteSpeed, otimização de imagens, snippets e log de atividade.",
    category: "Frontend",
    stack: ["WordPress", "Elementor", "PHP", "MySQL", "LiteSpeed Cache"],
    site: "https://rcstudio.com.br",
    private: true,
  },
  {
    slug: "linkedin-toolkit",
    name: "LinkedIn Toolkit",
    tagline: "Guias e checklists de otimização de perfil",
    description:
      "Pacote de guias, checklists e textos prontos para montar um perfil forte no LinkedIn: título, “Sobre”, experiência, habilidades, destaques e métricas reais extraídas do código.",
    category: "Conteúdo",
    stack: ["Markdown"],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/linkedin" }],
    period: "out/2026",
  },
  {
    slug: "prospectar",
    name: "Prospectar",
    tagline: "Prospecção local de clientes no Google Maps",
    description:
      "Busca negócios por nicho e cidade no Google Maps, separa quem não tem site, quem só tem redes sociais e quem está fora do ar. Pontua as oportunidades, organiza leads num quadro e abre o WhatsApp com uma mensagem pronta. Roda local com Docker, sem chave de API.",
    category: "Full-Stack",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma 7",
      "SQLite",
      "Docker",
      "Playwright",
    ],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/prospectar" }],
    period: "nov/2026",
  },
  {
    slug: "icm",
    name: "ICM — Painel e Automações",
    tagline: "Gestão de membros, presença e mensagens",
    description:
      "Painel para gestão de membros, presença, aniversariantes e envio diário de mensagens pelo WhatsApp via Evolution API. A API em FastAPI/SQLModel alimenta o frontend Next.js e cuida das rotinas agendadas.",
    category: "Automação",
    stack: [
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Next.js 15",
      "Tailwind CSS",
      "Evolution API",
    ],
    private: true,
    period: "nov/2026",
  },
  {
    slug: "hospital-blog",
    name: "Hospital Blog",
    tagline: "Portal hospitalar com editor de blocos",
    description:
      "Portal de conteúdo para hospital com carrossel de exibição, editor de blocos arrastáveis, painel administrativo e autenticação em três níveis. Backend em NestJS/Prisma e frontend em Next.js.",
    category: "Full-Stack",
    stack: [
      "NestJS 11",
      "Prisma 6",
      "PostgreSQL",
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "dnd-kit",
    ],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/hospital-blog" }],
    period: "nov/2026",
  },
  {
    slug: "b7cicd-example",
    name: "CI/CD Example",
    tagline: "API REST usada como base do curso de CI/CD",
    description:
      "Projeto de estudo com Express + TypeScript usado para praticar pipeline de CI/CD: build, testes, versionamento por tags e publicação automatizada.",
    category: "DevOps",
    stack: ["Express", "TypeScript", "pnpm", "GitHub Actions", "CI/CD"],
    links: [
      { label: "GitHub", url: "https://github.com/LucasCastro100/b7cicd-example" },
    ],
    study: true,
    period: "out/2026",
  },
  {
    slug: "portfolio-lucas",
    name: "Portfólio",
    tagline: "Este site — projetos, stacks e animações",
    description:
      "Portfólio pessoal que lista projetos, stacks e experiência, com animações de entrada e cards com efeito 3D que reagem ao cursor, além de páginas de detalhe preparadas para mostrar o site de cada projeto.",
    category: "Frontend",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/LucasCastro100/portfolio-lucas" },
    ],
    period: "2026",
  },
  {
    slug: "perfil-github",
    name: "Perfil GitHub",
    tagline: "README do perfil com biografia e links",
    description:
      "README do perfil do GitHub com biografia, stacks, destaques e links para LinkedIn, site e repositórios — a vitrine que apresenta o trabalho antes do portfólio.",
    category: "Conteúdo",
    stack: ["Markdown", "GitHub"],
    links: [
      { label: "GitHub", url: "https://github.com/LucasCastro100/LucasCastro100" },
    ],
  },
  {
    slug: "all-agend",
    name: "All Agend",
    tagline: "Projeto de agendamento",
    description:
      "Aplicação de agendamento desenvolvida como projeto de estudo, com foco em fluxos de reserva e interface web.",
    category: "Frontend",
    stack: ["TypeScript", "React", "Next.js"],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/all-agend" }],
    period: "2026",
  },
  {
    slug: "estudos-javascript",
    name: "Estudos JavaScript",
    tagline: "Anotações e exemplos de bibliotecas frontend",
    description:
      "Repositório de estudos com Swiper para sliders, Zod para validação de formulários, ECharts para gráficos e Jest + Testing Library para testes automatizados.",
    category: "Frontend",
    stack: ["JavaScript", "Swiper", "Zod", "ECharts", "Jest", "Testing Library"],
    links: [{ label: "GitHub", url: "https://github.com/LucasCastro100/java_script" }],
    study: true,
    period: "2026",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Full-Stack",
  "Frontend",
  "Automação",
  "Conteúdo",
];
