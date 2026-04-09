"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/** Empilement : contenu page < voile < panneau < barre (logo + burger toujours utilisables) */
const Z_HEADER = 200;
const Z_OVERLAY_BACKDROP = 150;
const Z_OVERLAY_PANEL = 160;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const mobileMenu =
    mounted && typeof document !== "undefined" ? (
      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              key="nav-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-ink-900/45 backdrop-blur-[3px] lg:hidden"
              style={{ zIndex: Z_OVERLAY_BACKDROP }}
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="nav-panel"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 340 }}
              className="fixed bottom-0 right-0 flex w-[min(100vw,20rem)] flex-col overflow-hidden border-l border-black/10 bg-[#f7f5f0] shadow-[-12px_0_48px_rgba(10,18,28,0.14)] lg:hidden"
              style={{
                zIndex: Z_OVERLAY_PANEL,
                top: "calc(env(safe-area-inset-top, 0px) + 5rem)",
                height: "calc(100dvh - env(safe-area-inset-top, 0px) - 5rem)",
                maxHeight: "calc(100dvh - env(safe-area-inset-top, 0px) - 5rem)",
              }}
            >
              <div className="shrink-0 border-b border-black/5 px-5 pb-4 pt-5">
                <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-ink-400">
                  Menu
                </p>
              </div>
              <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-4">
                {navigation.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + index * 0.045, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex min-h-[3rem] items-center rounded-2xl px-4 font-display text-base font-medium text-ink-700 transition",
                          active
                            ? "bg-white text-ink-900 shadow-panel ring-1 ring-black/[0.06]"
                            : "hover:bg-white/80 hover:text-ink-900",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="shrink-0 border-t border-black/5 p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Demander une consultation
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    ) : null;

  return (
    <>
      <header
        className="sticky top-0 border-b border-black/[0.06] bg-[rgba(245,244,239,0.88)] pt-[env(safe-area-inset-top,0px)] shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset] backdrop-blur-xl backdrop-saturate-150"
        style={{ zIndex: Z_HEADER }}
      >
        <div className="container flex h-20 items-center justify-between gap-6">
          <BrandLogo onNavigate={() => setOpen(false)} />

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-ink-500 transition hover:text-ink-900",
                    active && "text-ink-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Demander une consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink-900 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mounted && mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
