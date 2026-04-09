import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "FASODIGITAL",
    template: "%s | FASODIGITAL",
  },
  description:
    "Systèmes numériques, plateformes SaaS, cybersécurité et projets d’intelligence artificielle.",
};

export const viewport = {
  width: "device-width" as const,
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable}`}>
        {/* Header en dehors du wrapper : le menu mobile (portail) peut passer sous la barre avec z-index */}
        <SiteHeader />
        <div className="min-h-screen">
          <main className="container relative py-10 sm:py-12">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
