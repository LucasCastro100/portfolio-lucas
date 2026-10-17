/**
 * Fundo sóbrio: grade técnica sutil + um único brilho azul no topo + grão.
 * Substitui os antigos blobs coloridos (efeito "aurora").
 */
export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 0%, transparent 78%)",
        }}
      />
      <div className="absolute -top-72 left-1/2 size-[48rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "url(/noise.svg)", backgroundSize: "180px 180px" }}
      />
    </div>
  );
}
