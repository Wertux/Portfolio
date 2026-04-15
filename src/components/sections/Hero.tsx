import { Tag } from "@/components/ui/Tag";

export interface HeroProps {
  headline: string;
  subline: string;
  tagLabel: string;
}

export function Hero({ headline, subline, tagLabel }: HeroProps) {
  return (
    <section aria-label="Introduction">
      <Tag>{tagLabel}</Tag>
      <h1>{headline}</h1>
      <p>{subline}</p>
    </section>
  );
}
