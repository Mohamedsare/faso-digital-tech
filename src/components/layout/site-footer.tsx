import Link from "next/link";

import { footerLinks, contactDetails } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white/70">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="font-display text-2xl font-semibold text-ink-900">
            FASODIGITAL TECHNOLOGIES
          </p>
          <p className="max-w-xl text-sm leading-7 text-ink-500">
            Engineering intelligent digital systems for Africa with a product, security
            and AI mindset.
          </p>
          <p className="text-sm text-ink-500">
            {contactDetails.email} · {contactDetails.phone}
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
              Services
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
