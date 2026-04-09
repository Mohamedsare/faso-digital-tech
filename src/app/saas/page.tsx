import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { offerPages } from "@/content/site";

const featureCards = [
  "Solutions SaaS personnalisees",
  "Architecture multi-tenant",
  "Cloud native delivery",
  "API-first et integrabilite",
  "Analytics et reporting temps reel",
];

export default function SaasPage() {
  const page = offerPages.saas;

  return (
    <div className="space-y-8 pb-12">
      <PageHero {...page} />

      <section className="section-space">
        <SectionHeading
          eyebrow="Offre SaaS"
          title="Des plateformes concues pour scaler sans replatforming douloureux."
          description="Nous construisons la couche produit, les workflows internes et l'architecture d'operations en visant un vrai passage a l'echelle."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((item) => (
            <Card key={item}>
              <CardTitle>{item}</CardTitle>
              <CardDescription className="mt-3">
                Discovery produit, architecture, experience front, services backend
                et mise en production sur un socle maintenable.
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-[36px] bg-white p-8 shadow-panel sm:p-10">
        <SectionHeading
          eyebrow="Architecture type"
          title="Un stack moderne, lisible et deployable rapidement."
          description="Next.js, server actions, Supabase, composants robustes, instrumentation minimale et Vercel pour accelerer la delivery."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {["Experience web", "API et actions serveur", "Logique metier", "Data layer", "Deploy et observabilite"].map((layer) => (
            <div key={layer} className="rounded-[28px] border border-black/5 bg-background px-5 py-6 text-sm font-medium text-ink-600">
              {layer}
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">Parler de votre produit SaaS</Link>
        </Button>
      </section>
    </div>
  );
}

