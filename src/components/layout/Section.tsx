import type { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  "aria-label"?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({
  id,
  "aria-label": ariaLabel,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={className}>
      {children}
    </section>
  );
}
