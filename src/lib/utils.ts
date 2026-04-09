import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBudget(value: string) {
  const labels: Record<string, string> = {
    starter: "< 10k EUR",
    growth: "10k - 50k EUR",
    scale: "50k - 100k EUR",
    enterprise: "> 100k EUR",
  };

  return labels[value] ?? value;
}

