import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered,
  invert,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", centered && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? <Badge variant={invert ? "muted" : "default"}>{eyebrow}</Badge> : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          invert ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-8 sm:text-lg",
            invert ? "text-white/72" : "text-ink-500",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

