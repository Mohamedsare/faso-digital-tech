import { ContactForm } from "@/components/marketing/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { contactDetails } from "@/content/site";

export default function ContactPage() {
  return (
    <div className="space-y-8 pb-12">
      <section className="rounded-[40px] bg-ink-900 px-6 py-12 text-white shadow-halo sm:px-10 sm:py-16">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre prochain produit, de votre refonte ou de votre socle technique."
          description="Donnez-nous le contexte, le niveau d'urgence et les enjeux. Le formulaire alimente directement Supabase."
          invert
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="h-fit bg-white">
          <Badge>Informations</Badge>
          <CardTitle className="mt-6">Un premier echange utile, pas un formulaire de decoration.</CardTitle>
          <CardDescription className="mt-4">
            Nous revenons vers vous avec un retour cadre, pas juste un accuse de reception.
          </CardDescription>
          <div className="mt-8 grid gap-4">
            <div className="rounded-2xl bg-background px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-400">Email</p>
              <p className="mt-2 text-sm font-medium text-ink-700">{contactDetails.email}</p>
            </div>
            <div className="rounded-2xl bg-background px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-400">Téléphone</p>
              <div className="mt-2 space-y-1">
                {contactDetails.phones.map((num) => (
                  <p key={num} className="text-sm font-medium text-ink-700">
                    {num}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-background px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-400">Base</p>
              <p className="mt-2 text-sm font-medium text-ink-700">{contactDetails.address}</p>
            </div>
            <div className="rounded-2xl bg-background px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-400">Delai</p>
              <p className="mt-2 text-sm font-medium text-ink-700">{contactDetails.responseTime}</p>
            </div>
          </div>
        </Card>

        <ContactForm />
      </section>
    </div>
  );
}

