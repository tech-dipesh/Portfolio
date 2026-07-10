import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-all duration-300 ease-out",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardInteractive = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-border-strong hover:shadow-glow",
        className,
      )}
      {...props}
    />
  ),
);
CardInteractive.displayName = "CardInteractive";

export { Card, CardInteractive };
