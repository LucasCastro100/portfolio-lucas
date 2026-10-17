import type { SimpleIcon } from "simple-icons";

type TechLogoProps = {
  icon: SimpleIcon;
  className?: string;
  /** Usa a cor oficial da marca em vez de herdar a cor do texto. */
  colored?: boolean;
};

export function TechLogo({ icon, className, colored = false }: TechLogoProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill={colored ? `#${icon.hex}` : "currentColor"}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}
