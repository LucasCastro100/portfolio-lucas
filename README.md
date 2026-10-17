# Portfólio — Lucas Henrique de Castro Oliveira

Portfólio pessoal em **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, com
animações em **Framer Motion** e logos oficiais das tecnologias (**Simple Icons**).
Lista projetos, stacks, experiência e canais de contato (GitHub, LinkedIn, WhatsApp e currículo em PDF).

## Rodando localmente

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Outros scripts:

```bash
pnpm build      # build de produção
pnpm start      # serve o build
pnpm lint       # ESLint
pnpm typecheck  # checagem de tipos (tsc --noEmit)
```

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx      # metadata, fontes (Geist), fundo animado e barra de progresso
│  ├─ page.tsx        # monta as seções
│  └─ globals.css     # tema escuro + utilitários (card, chip, text-gradient) + keyframes
├─ components/
│  ├─ header, hero, about, skills, projects, experience, contact, footer
│  ├─ tech-marquee.tsx        # faixa infinita de tecnologias
│  └─ ui/
│     ├─ animated-background.tsx  # blobs de gradiente (aurora)
│     ├─ infinite-marquee.tsx     # faixa infinita com loop suave
│     ├─ magnetic.tsx             # botões com efeito magnético
│     ├─ photo-frame.tsx          # foto com moldura em gradiente
│     ├─ reveal.tsx               # animação de entrada ao rolar
│     ├─ scroll-progress.tsx      # barra de progresso no topo
│     ├─ spotlight-card.tsx       # card com brilho que segue o cursor
│     └─ tech-logo.tsx            # renderiza um logo (Simple Icons)
└─ data/
   ├─ profile.ts      # dados pessoais, bio do GitHub, skills, experiência e formação
   ├─ projects.ts     # projetos (stack, métricas, links e sistemas internos)
   └─ tech.ts         # tecnologias com logos, agrupadas por categoria
public/
├─ curriculo-lucas-oliveira.pdf
└─ lucas-oliveira.jpg
```

## Editando o conteúdo

Todo o conteúdo é orientado a dados — não precisa mexer nos componentes:

- **Perfil, contato, bio, experiência e formação:** `src/data/profile.ts`
  - `githubBio` alimenta a seção "Sobre" (texto no estilo do perfil do GitHub).
  - `whatsapp` é o link do WhatsApp (formato `https://wa.me/<DDI><número>`).
- **Projetos:** `src/data/projects.ts`
  - `private: true` → mostra o selo "Repositório privado" e omite o link;
  - `highlight: true` → destaca o card;
  - `metrics` → grade de números reais extraídos do código;
  - `systems` → lista expansível de módulos (usada no Ideias.dev.br, com 20 sistemas).
- **Tecnologias:** `src/data/tech.ts` — cada item é um ícone do pacote `simple-icons`,
  agrupado em Frontend, Backend, Banco de dados, Automação & Dados, DevOps & Infra e Ferramentas.

## CI (GitHub Actions)

O workflow em `.github/workflows/ci.yml` roda em cada push/PR na `main`:

- **Lint** (`pnpm lint`)
- **Type check** (`pnpm typecheck`)
- **Build** (`pnpm build`) — com upload do artefato `.next`

## Deploy

Pronto para deploy na [Vercel](https://vercel.com/new) (ou qualquer host Node.js).
Basta importar o repositório e fazer o build com `pnpm build`.

> O PDF do currículo fica em `public/curriculo-lucas-oliveira.pdf` e é servido em
> `/curriculo-lucas-oliveira.pdf`. Para atualizá-lo, substitua o arquivo.
> A foto fica em `public/lucas-oliveira.jpg`.
