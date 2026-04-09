import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClientsTrustSection } from "@/components/marketing/clients-trust-section";
import { HomeHero } from "@/components/marketing/home-hero";
import { ParallaxRevealSection } from "@/components/marketing/parallax-reveal-section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  approachSteps,
  expertiseCards,
  featuredProjects,
  parallaxRevealBlocks,
} from "@/content/site";

export default function HomePage() {
  return (
    <div className="space-y-8 pb-12 sm:space-y-10">
      <HomeHero />

      <ParallaxRevealSection block={parallaxRevealBlocks[0]} />

      <section className="section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Expertises"
            title="Une equipe capable de relier produit, delivery et securite."
            description="Nous evitons les stacks fragiles et les roadmaps decoratives. Chaque brique doit servir la croissance, la fiabilite et la vitesse d'execution."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {expertiseCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <Card className="h-full">
                <Badge>{`0${index + 1}`}</Badge>
                <CardTitle className="mt-6">{card.title}</CardTitle>
                <CardDescription className="mt-3">{card.description}</CardDescription>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal className="rounded-[36px] bg-brand-100 p-8 sm:p-10">
          <Badge>Parlez a un expert</Badge>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink-900">
            Vous avez un projet digital, une question securite ou un besoin de
            cadrage produit ?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-ink-600">
            Nous aidons les PME, scale-ups et grands comptes a prioriser le bon
            socle technique avant d'accumuler de la dette.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Parler a un expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.12} className="rounded-[36px] bg-ink-900 p-8 text-white sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <ShieldCheck className="h-5 w-5 text-brand-200" />
            </div>
            <div>
              <p className="font-display text-xl font-semibold">Equipe FASODIGITAL</p>
              <p className="text-sm text-white/65">Architecture, cybersecurite et IA appliquee</p>
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            {["SaaS cloud-native", "Security by design", "AI workflows utiles"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Approche"
            title="Une methode claire pour aller du besoin au run."
            description="Le projet ne s'arrete pas au design ni au dev. Nous pensons exploitation, mesure et vitesse de release."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {approachSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.05}>
              <Card className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                  {item.step}
                </p>
                <CardTitle className="mt-5">{item.title}</CardTitle>
                <CardDescription className="mt-3">{item.detail}</CardDescription>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <ParallaxRevealSection block={parallaxRevealBlocks[1]} />

      <section className="relative overflow-hidden rounded-[40px] border border-black/[0.05] bg-white/95 px-6 py-12 shadow-panel sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Proof"
            title="Des references qui rassurent les organisations exigeantes."
            description="Nous operons a l'intersection du produit, de l'infrastructure et des sujets sensibles."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <Card className="h-full bg-background/80">
                <div className="mb-4 flex items-center justify-between">
                  <Badge>{project.tags[0]}</Badge>
                  <Sparkles className="h-5 w-5 text-brand-500" />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-3">{project.description}</CardDescription>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <ClientsTrustSection />

      <section className="section-space">
        <Reveal className="rounded-[40px] bg-ink-900 px-6 py-12 text-white shadow-halo sm:px-10">
          <SectionHeading
            eyebrow="Call to action"
            title="Construisons un socle digital plus net, plus fiable et plus ambitieux."
            description="Refonte, lancement produit, acceleration SaaS, securisation cloud ou cas d'usage IA : nous pouvons cadrer le prochain sprint avec vous."
            invert
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Demander une consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/clients">Voir les cas clients</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

