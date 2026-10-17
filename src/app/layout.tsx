import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { profile } from "@/data/profile";
import { GridBackground } from "@/components/ui/grid-background";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s · ${profile.shortName}`,
  },
  description: `${profile.role} com mais de 8 anos de experiência em Next.js, Node.js, Laravel e Python — com DevOps (Docker, CI/CD) e automação (n8n, Selenium). Portfólio de projetos, stacks e contato.`,
  keywords: [
    "Lucas Oliveira",
    "Desenvolvedor Full-Stack",
    "DevOps",
    "Automação",
    "Next.js",
    "Node.js",
    "Laravel",
    "Python",
    "TypeScript",
    "Docker",
    "n8n",
    "Portfólio",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description: profile.tagline,
    siteName: profile.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <GridBackground />
        <ScrollProgress />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
