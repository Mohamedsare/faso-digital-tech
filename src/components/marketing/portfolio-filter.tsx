"use client";

import { useState } from "react";

import { portfolioProjects } from "@/content/site";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const filters = ["Tous", "SaaS", "Cybersecurite", "IA", "Mobile"];

export function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const projects =
    activeFilter === "Tous"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              activeFilter === filter
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-black/10 bg-white text-ink-500 hover:border-brand-300 hover:text-ink-900",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={`${project.category}-${project.title}`} className="h-full bg-white">
            <div className="mb-5 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {project.category}
            </div>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="mt-3">{project.description}</CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}

