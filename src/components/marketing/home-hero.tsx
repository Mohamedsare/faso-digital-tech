import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homeStats } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-ink-900 px-6 py-12 text-white shadow-halo sm:px-10 sm:py-16">
      {/* Grille + halos : profondeur type produit */}
      <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-[0.18]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.14), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-tech-500/10 blur-3xl" aria-hidden />
      <div className="absolute left-6 right-6 top-0 h-px overflow-hidden rounded-full sm:left-10 sm:right-10">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-tech-400/45 to-transparent" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal className="space-y-7">
          <Badge variant="muted" className="border-white/15 bg-white/[0.07] text-white/90">
            Ingénierie digitale · SaaS · Cybersécurité · IA
          </Badge>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Un socle technique à la hauteur de vos produits, de votre sécurité et de vos
              opérations.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-8">
              FASODIGITAL conçoit, livre et fiabilise des plateformes SaaS, des parcours IA et des
              environnements cloud pour les organisations qui exigent vitesse, résilience et
              clarté.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Lancer un projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10">
              <Link href="/projets">Voir nos projets</Link>
            </Button>
          </div>
          <div className="grid gap-4 pt-3 sm:grid-cols-3">
            {homeStats.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.08}
                className="rounded-[24px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md transition hover:border-white/15 hover:bg-white/[0.09]"
              >
                <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-brand-200">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
                Stack produit
              </p>
              <div className="mt-4 grid gap-2.5">
                {["Next.js · Vercel", "Supabase · Edge", "Tailwind · shadcn/ui"].map((row) => (
                  <div
                    key={row}
                    className="rounded-xl border border-white/5 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white/85"
                  >
                    {row}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-tech-500/15 bg-tech-500/[0.07] p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-tech-400/95">
                Livraison
              </p>
              <div className="mt-6 space-y-3.5">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-tech-400 to-brand-200" />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-brand-300 to-brand-400" />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[91%] rounded-full bg-white/90" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Cadence agile, architecture propre et exigence sécurité sur tout le cycle produit.
              </p>
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-ink-800/60 p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
              Boucle d’exécution
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["Découverte", "Build", "Run"].map((step) => (
                <div
                  key={step}
                  className="rounded-xl border border-white/5 bg-white/[0.04] px-3 py-3 text-center text-sm text-white/80"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
