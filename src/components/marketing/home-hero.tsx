import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homeStats } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-ink-900 px-6 py-12 text-white shadow-halo sm:px-10 sm:py-16">
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-25" />
      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal className="space-y-7">
          <Badge variant="muted">Engineering intelligent digital systems for Africa</Badge>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Un nouveau socle digital pour vos produits, votre securite et vos
              operations.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              FASODIGITAL imagine, construit et fiabilise des plateformes SaaS,
              des experiences IA et des environnements cloud robustes pour les
              entreprises africaines ambitieuses.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Lancer un projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projets">Voir nos projets</Link>
            </Button>
          </div>
          <div className="grid gap-4 pt-3 sm:grid-cols-3">
            {homeStats.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.08}
                className="rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="font-display text-3xl font-semibold text-brand-200">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">Product stack</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">Next.js + Vercel</div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">Supabase + server actions</div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">Tailwind + shadcn/ui</div>
              </div>
            </div>
            <div className="rounded-[28px] bg-brand-200/15 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-100/90">Operating model</p>
              <div className="mt-6 space-y-4">
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[82%] rounded-full bg-brand-200" />
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[68%] rounded-full bg-brand-300" />
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[91%] rounded-full bg-white" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/72">
                Delivery rapide, architecture propre et rigueur securite sur
                l'ensemble du cycle produit.
              </p>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-ink-800/70 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Execution loop</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 px-4 py-4 text-sm text-white/75">Discovery</div>
              <div className="rounded-2xl bg-white/5 px-4 py-4 text-sm text-white/75">Build</div>
              <div className="rounded-2xl bg-white/5 px-4 py-4 text-sm text-white/75">Operate</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

