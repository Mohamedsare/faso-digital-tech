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
    default: "FASODIGITAL TECHNOLOGIES",
    template: "%s | FASODIGITAL TECHNOLOGIES",
  },
  description:
    "Next-generation digital systems, SaaS platforms, cybersecurity and AI delivery for Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable}`}>
        <div className="min-h-screen">
          <SiteHeader />
          <main className="container py-8 sm:py-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
