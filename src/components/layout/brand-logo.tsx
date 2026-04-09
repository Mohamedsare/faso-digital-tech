import Link from "next/link";
import type { ReactNode } from "react";

type BrandLogoProps = {
  /** Si défini, le logo est enveloppé dans un lien vers la home */
  asLink?: boolean;
  onNavigate?: () => void;
  className?: string;
  /** Contenu optionnel sous le bloc marque (ex. texte du footer) */
  children?: ReactNode;
};

/**
 * Bloc marque identique dans le header et le footer.
 */
export function BrandLogo({ asLink = true, onNavigate, className, children }: BrandLogoProps) {
  const inner = (
    <>
      <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ink-900">
        FASODIGITAL
      </p>
      <p className="text-xs text-ink-500">Technologie</p>
      {children}
    </>
  );

  const wrapClassName = `flex flex-col gap-0.5 ${className ?? ""}`.trim();

  if (asLink) {
    return (
      <Link href="/" className={wrapClassName} onClick={onNavigate}>
        {inner}
      </Link>
    );
  }

  return <div className={wrapClassName}>{inner}</div>;
}
