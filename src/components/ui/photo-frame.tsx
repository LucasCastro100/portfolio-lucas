import Image from "next/image";

/**
 * Foto com anel de luz azul que gira ao redor da moldura.
 */
export function PhotoFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[17rem]">
      <div className="absolute -inset-4 rounded-[2.25rem] bg-accent/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] p-px">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-beam-spin"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(59,130,246,0) 0deg, rgba(59,130,246,0.85) 80deg, rgba(96,165,250,1) 130deg, rgba(59,130,246,0) 210deg, rgba(59,130,246,0) 360deg)",
          }}
        />
        <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-card">
          <Image
            src="/lucas-oliveira.jpg"
            alt="Foto de Lucas Henrique de Castro Oliveira"
            width={480}
            height={480}
            priority
            className="aspect-square size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>

      <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-background/90 px-3 py-1.5 text-[11px] font-medium text-muted backdrop-blur">
        <span className="size-1.5 rounded-full bg-emerald-400" />
        Full-Stack Developer
      </span>
    </div>
  );
}
