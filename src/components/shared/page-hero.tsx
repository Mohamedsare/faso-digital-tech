import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
}

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-ink-900 px-6 py-14 text-white shadow-halo sm:px-10 sm:py-20">
      <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-[0.16]" aria-hidden />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 0%, rgba(34, 211, 238, 0.12), transparent 50%), radial-gradient(circle at 0% 100%, rgba(208, 183, 142, 0.2), transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <Badge variant="muted">{eyebrow}</Badge>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-3 rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur">
          {highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-300" />
              <span className="text-sm leading-7 text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

