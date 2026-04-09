import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-xl rounded-[40px] bg-white p-10 text-center shadow-panel">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink-900">
          Cette page n'existe pas.
        </h1>
        <p className="mt-4 text-base leading-8 text-ink-500">
          Revenez a l'accueil pour continuer la navigation sur la nouvelle application Next.js.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Retour a l'accueil</Link>
        </Button>
      </div>
    </div>
  );
}
