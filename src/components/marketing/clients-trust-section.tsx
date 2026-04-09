import { Building2 } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { trustPartners } from "@/content/site";

export function ClientsTrustSection() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-black/[0.06] bg-gradient-to-br from-white via-brand-50/35 to-white px-5 py-14 shadow-panel sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-200/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-ink-900/[0.04] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
            Confiance
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
            Des entreprises et institutions de premier plan nous confient leurs enjeux produit,
            sécurité et transformation numérique — avec la même exigence sur la fiabilité et la
            confidentialité.
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trustPartners.map((partner, index) => (
          <Reveal key={partner.id} delay={index * 0.06}>
            <article className="group flex h-full flex-col rounded-2xl border border-black/[0.06] bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-300/40 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200/80 font-display text-sm font-bold tracking-tight text-ink-800 ring-1 ring-black/[0.04] transition group-hover:from-brand-200 group-hover:to-brand-300/70">
                  {partner.initials}
                </div>
                <Building2 className="h-4 w-4 text-ink-400 opacity-0 transition group-hover:opacity-100" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-ink-900">
                {partner.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-500">{partner.segment}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="relative z-10 mt-10 text-center text-xs text-ink-500">
        Logotypes et noms détaillés disponibles sur demande, dans le respect des accords de
        confidentialité.
      </p>
    </section>
  );
}
