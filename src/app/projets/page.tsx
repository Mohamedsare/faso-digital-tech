import { PortfolioFilter } from "@/components/marketing/portfolio-filter";
import { SectionHeading } from "@/components/shared/section-heading";

export default function ProjectsPage() {
  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[40px] bg-white px-6 py-12 shadow-panel sm:px-10 sm:py-16">
        <SectionHeading
          eyebrow="Projets"
          title="Un portfolio de plateformes, interfaces et chantiers techniques."
          description="Des sujets livres dans des contextes ou le produit, la securite et la vitesse de mise sur le marche doivent coexister."
        />
      </section>

      <section className="section-space">
        <PortfolioFilter />
      </section>
    </div>
  );
}

