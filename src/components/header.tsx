import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#stacks", label: "Stacks" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-white">
            LO
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {profile.shortName}
            <span className="ml-2 hidden font-mono text-xs font-normal text-muted sm:inline">
              / full-stack
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <LinkedinIcon className="size-[18px]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="E-mail"
            className="hidden size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-white/10 hover:text-foreground sm:grid"
          >
            <MailIcon className="size-[18px]" />
          </a>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-line/60 px-4 py-2 md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap rounded-full border border-line px-3 py-1 text-xs text-muted"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
