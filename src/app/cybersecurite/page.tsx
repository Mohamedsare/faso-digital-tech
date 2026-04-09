import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { offerPages } from "@/content/site";

const services = [
  "Audit de securite",
  "Pentesting",
  "SOC monitoring",
  "Securite cloud",
  "Securite applicative",
];

export default function CybersecurityPage() {
  const page = offerPages.cyber;

  return (
    <div className="space-y-8 pb-12">
      <PageHero {...page} />

      <section className="section-space">
        <SectionHeading
          eyebrow="Cyber"
          title="Faire baisser le risque avant qu'il ne devienne un incident."
          description="Nous priorisons la visibilite, les controles utiles et la capacite de reaction plutot qu'un theatre de conformite."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <Card key={item}>
              <CardTitle>{item}</CardTitle>
              <CardDescription className="mt-3">
                Evaluation, remediation, automatisation et rituals de securite pour
                les environnements applicatifs et cloud.
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-[36px] bg-ink-900 p-8 text-white shadow-halo sm:p-10">
        <SectionHeading
          eyebrow="Operating model"
          title="Des controles adaptes aux equipes qui livrent vite."
          description="Secure SDLC, revue d'architecture, durcissement, secrets, monitoring et runbooks incident."
          invert
        />
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">Structurer votre posture cyber</Link>
        </Button>
      </section>
    </div>
  );
}

