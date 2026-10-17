export type ProjectCategory =
  | "Full-Stack"
  | "Frontend"
  | "Automação"
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
  private?: boolean;
  highlight?: boolean;
  period?: string;
  metrics?: { value: string; label: string }[];
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
    highlight: true,
    period: "jul/2025 – atual",
    metrics: [
      { value: "20", label: "sistemas" },
      { value: "75", label: "tabelas" },
      { value: "90", label: "rotas" },
      { value: "87", label: "componentes Livewire" },
      { value: "66", label: "models" },
      { value: "~36k", label: "linhas" },
    ],
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
    tagline: "Marketplace de permuta para o mercado audiovisual",
    description:
      "Anúncios de equipamento com moderação, serviços de produção, matches para troca direta/venda/permuta por créditos, livro-razão de créditos, disputas e assinaturas trial/pro/max via Stripe com bloqueio automático por inadimplência. Segurança forte com 2FA (TOTP) e login por Passkey (WebAuthn).",
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
    metrics: [
      { value: "68", label: "rotas" },
      { value: "35", label: "tabelas" },
      { value: "48", label: "migrations" },
      { value: "38", label: "páginas React" },
      { value: "78", label: "componentes" },
      { value: "~74,7k", label: "linhas" },
    ],
  },
  {
    slug: "control-school",
    name: "Control School",
    tagline: "Gestão escolar full-stack: API Laravel + front Next.js",
    description:
      "Sistema de gestão escolar com alunos, turmas, professores e financeiro. A API em Laravel usa autenticação por token (Sanctum) com roles por perfil; o frontend em Next.js faz proxy para o backend, exportação para Excel e animações/3D com GSAP e React Three Fiber.",
    category: "Full-Stack",
    stack: [
      "Laravel 13",
      "Sanctum",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Three Fiber",
      "Playwright",
    ],
    links: [
      {
        label: "API",
        url: "https://github.com/LucasCastro100/control-school-back",
      },
      {
        label: "Frontend",
        url: "https://github.com/LucasCastro100/control-school-front",
      },
    ],
    highlight: true,
    period: "jun/2026 – atual",
    metrics: [
      { value: "19", label: "endpoints" },
      { value: "15", label: "models" },
      { value: "23", label: "tabelas" },
      { value: "119", label: "arquivos TS/TSX" },
      { value: "~20,6k", label: "linhas" },
    ],
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
    period: "set/2026 – atual",
    metrics: [
      { value: "9", label: "models Prisma" },
      { value: "7", label: "páginas" },
      { value: "~20,5k", label: "linhas" },
    ],
  },
  {
    slug: "neurocomunicacao",
    name: "Neuro Comunicação Brasil",
    tagline: "Plataforma EAD/LMS com certificados e pagamentos",
    description:
      "Plataforma EAD com cursos, módulos e aulas, matrículas, materiais, comentários e dúvidas, avaliações com notas, certificados em PDF e checkout por Stripe. Painéis separados para administrador, professor e aluno, além de um Teste Representacional público com resultado compartilhável.",
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
    metrics: [
      { value: "113", label: "rotas" },
      { value: "3", label: "painéis" },
      { value: "26", label: "tabelas" },
      { value: "28", label: "migrations" },
      { value: "~22k", label: "linhas" },
    ],
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
    metrics: [
      { value: "15", label: "rotas de API" },
      { value: "11", label: "tabelas" },
      { value: "~12,2k", label: "linhas" },
    ],
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
    tagline: "Dashboard de dados e integrações para gestão",
    description:
      "Frontend de um produto de dados: painéis com gráficos, autenticação (incluindo login social) e integrações com WhatsApp, Meta e Google, além de exportação de relatórios.",
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
    metrics: [{ value: "14", label: "componentes documentados" }],
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
    metrics: [
      { value: "42", label: "componentes" },
      { value: "~4,7k", label: "linhas" },
    ],
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
    period: "ago/2026",
    metrics: [{ value: "~4,2k", label: "linhas" }],
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
    period: "set/2026",
    metrics: [{ value: "10+", label: "guias" }],
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
    period: "jan/2025 – atual",
    metrics: [
      { value: "96", label: "scripts .py" },
      { value: "7", label: "subprojetos" },
    ],
  },
  {
    slug: "rcstudio",
    name: "RC Studio",
    tagline: "Site institucional de estúdio de produção musical",
    description:
      "Site institucional da RC Studio (rcstudio.com.br). Páginas montadas no Elementor, com cache LiteSpeed, otimização de imagens, snippets e log de atividade.",
    category: "Frontend",
    stack: ["WordPress", "Elementor", "PHP", "MySQL", "LiteSpeed Cache"],
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
];

export type OtherRepo = {
  name: string;
  description: string;
  stack: string;
  url?: string;
};

export const otherRepos: OtherRepo[] = [
  {
    name: "control-school",
    description: "Repositório agregador original do Control School, hoje dividido em back e front.",
    stack: "TypeScript",
    url: "https://github.com/LucasCastro100/control-school",
  },
  {
    name: "all-agend",
    description: "Projeto pessoal focado em agendamento.",
    stack: "TypeScript",
    url: "https://github.com/LucasCastro100/all-agend",
  },
  {
    name: "java_script",
    description: "Exercícios e estudos de JavaScript.",
    stack: "JavaScript / TypeScript",
    url: "https://github.com/LucasCastro100/java_script",
  },
  {
    name: "LucasCastro100",
    description: "Repositório de perfil do GitHub exibido na página inicial.",
    stack: "Markdown",
    url: "https://github.com/LucasCastro100/LucasCastro100",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Full-Stack",
  "Frontend",
  "Automação",
  "Conteúdo",
];
