import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { caseStudies } from "@/content/site";

export default function ClientsPage() {
  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[40px] bg-white px-6 py-12 shadow-panel sm:px-10 sm:py-16">
        <SectionHeading
          eyebrow="Clients"
          title="Des interventions qui combinent impact metier et discipline technique."
          description="Quelques exemples de sujets traites autour du SaaS, de la cybersecurite et de l'IA appliquee."
        />
      </section>

      <section className="section-space">
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <Card key={study.title} className="grid gap-6 bg-white p-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription className="mt-4">{study.context}</CardDescription>
                <p className="mt-5 text-sm font-medium leading-7 text-ink-700">{study.result}</p>
              </div>
              <div className="grid gap-4 rounded-[28px] bg-background p-5">
                {study.metrics.map((metric) => (
                  <div key={metric} className="rounded-2xl border border-black/5 bg-white px-4 py-4 text-sm font-medium text-ink-600">
                    {metric}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

