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
    <div
      className={cn(
        "space-y-5",
        centered && "mx-auto max-w-3xl text-center",
        !centered && !invert && "accent-edge max-w-3xl",
      )}
    >
      {eyebrow ? (
        <Badge variant={invert ? "muted" : "tech"} className={cn(centered && "mx-auto")}>
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-[-0.02em] sm:text-[2.125rem] sm:leading-[1.15]",
          invert ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-8",
            invert ? "text-white/75" : "text-ink-500",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
