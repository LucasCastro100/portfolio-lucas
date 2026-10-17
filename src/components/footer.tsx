import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-center text-xs text-muted sm:text-left">
          © {year} {profile.name} · Feito com Next.js e Tailwind CSS
        </p>
        <div className="flex items-center gap-1">
          <FooterLink href={profile.github} label="GitHub">
            <GithubIcon className="size-4" />
          </FooterLink>
          <FooterLink href={profile.linkedin} label="LinkedIn">
            <LinkedinIcon className="size-4" />
          </FooterLink>
          <FooterLink href={`mailto:${profile.email}`} label="E-mail" external={false}>
            <MailIcon className="size-4" />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-card hover:text-foreground"
    >
      {children}
    </a>
  );
}
