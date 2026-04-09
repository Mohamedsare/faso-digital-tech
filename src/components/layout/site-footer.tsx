import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { footerLinks, contactDetails } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-white/[0.78] backdrop-blur-xl">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <BrandLogo />
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-500">
            Nous concevons des systèmes numériques intelligents avec une culture produit,
            cybersécurité et intelligence artificielle.
          </p>
          <p className="text-sm text-ink-500">
            {contactDetails.email} · {contactDetails.phones.join(" · ")}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">
              Entreprise
            </p>
            <div className="space-y-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-ink-500 transition hover:text-ink-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">
              Nos services
            </p>
            <div className="space-y-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-ink-500 transition hover:text-ink-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
