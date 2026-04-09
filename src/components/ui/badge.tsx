import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em]",
  {
    variants: {
      variant: {
        default: "border-brand-300/70 bg-brand-100/70 text-brand-700",
        muted: "border-white/10 bg-white/5 text-white/80",
        success: "border-success/30 bg-success/10 text-success",
        tech: "border-tech-500/25 bg-tech-500/[0.06] text-ink-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

