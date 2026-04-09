import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { offerPages } from "@/content/site";

const capabilities = [
  "Machine learning applique",
  "Automatisation intelligente",
  "NLP et assistants IA",
  "Data analytics",
  "Vision AI",
];

export default function AiPage() {
  const page = offerPages.ai;

  return (
    <div className="space-y-8 pb-12">
      <PageHero {...page} />

      <section className="section-space">
        <SectionHeading
          eyebrow="IA"
          title="Des use cases concrets plutot qu'une simple couche marketing."
          description="Nous cadrons les flux, la data et les interfaces de sorte que l'IA ameliore reellement l'operationnel."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <Card key={item}>
              <CardTitle>{item}</CardTitle>
              <CardDescription className="mt-3">
                Conception du cas d'usage, integration dans le produit et mesure
                des gains operationnels.
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-[36px] bg-white p-8 shadow-panel sm:p-10">
        <SectionHeading
          eyebrow="Execution"
          title="Du prototype utile vers une experience fiable."
          description="Prompts, evaluation, orchestration, garde-fous et interfaces produit pour des systemes intelligents maintenables."
        />
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">Cadrer un projet IA</Link>
        </Button>
      </section>
    </div>
  );
}

