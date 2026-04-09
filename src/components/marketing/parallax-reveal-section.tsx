"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

import type { ParallaxRevealBlock } from "@/content/site";

type ParallaxRevealSectionProps = {
  block: ParallaxRevealBlock;
  className?: string;
};

/**
 * Bandeau plein écran : parallaxe renforcée (sticky + forte translation / zoom + 2e plan plus lent).
 */
export function ParallaxRevealSection({ block, className }: ParallaxRevealSectionProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Image : forte translation + zoom (effet très visible) */
  const imgY = useTransform(scrollYProgress, [0, 1], ["-26%", "26%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.28, 1.02, 1.18]);

  /* Grille : autre vitesse = profondeur */
  const gridY = useTransform(scrollYProgress, [0, 1], ["14%", "-20%"]);

  /* Voile : s’éclaircit au milieu du passage → l’image « se révèle » nettement */
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.32, 0.52, 1],
    [0.82, 0.4, 0.36, 0.78],
  );

  /* Carte : léger contre-mouvement (relief) */
  const cardY = useTransform(scrollYProgress, [0, 1], [56, -40]);

  return (
    <section ref={ref} className={cn("relative isolate", className)}>
      {/* Zone de scroll longue = effet plus long à l’écran */}
      <div className="relative min-h-[220vh] w-full">
        <div className="sticky top-0 flex h-[100dvh] min-h-[600px] w-full items-center justify-center overflow-hidden">
          {/* Voile */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 z-[1] bg-gradient-to-b from-ink-950/90 via-ink-900/45 to-ink-950/90"
            aria-hidden
          />

          {/* Image : grande marge négative + zoom pour éviter les bords lors du scale */}
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-[-18%] z-0 will-change-transform"
          >
            <Image
              src={block.imageUrl}
              alt={block.imageAlt}
              fill
              priority={false}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: block.imagePosition ?? "center" }}
            />
          </motion.div>

          {/* Grille : 2e plan, mouvement différent (parallaxe de profondeur) */}
          <motion.div
            style={{ y: gridY }}
            className="pointer-events-none absolute inset-0 z-[2] opacity-[0.22]"
            aria-hidden
          >
            <div
              className="absolute inset-[-20%] h-[140%] w-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
              }}
            />
          </motion.div>

          <div className="container relative z-[3] py-16">
            <motion.div style={{ y: cardY }}>
              <Reveal>
                <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/20 bg-white/12 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">
                    {block.eyebrow}
                  </p>
                  <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {block.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                    {block.description}
                  </p>
                </div>
              </Reveal>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
