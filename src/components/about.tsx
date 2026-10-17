import { profile } from "@/data/profile";
import { Reveal } from "./ui/reveal";

/**
 * Bloco "Sobre" — fica logo abaixo do hero, dentro da mesma seção,
 * para que o texto sobre mim e a foto/informações apareçam juntos.
 */
export function AboutBlock() {
  const { githubBio } = profile;

  return (
    <div id="sobre" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="grid gap-5 border-t border-line pt-10 sm:grid-cols-2">
          {githubBio.pillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <div className="card h-full p-6">
                <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
