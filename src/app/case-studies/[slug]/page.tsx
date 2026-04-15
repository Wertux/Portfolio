import type { Metadata } from "next";

interface PageParams {
  params: Promise<{ slug: string }>;
}

const slugs = ["e-id", "sedex", "blick"] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

export default async function CaseStudyPage({ params }: PageParams) {
  const { slug } = await params;
  const { default: CaseStudy } = await import(
    `@/content/case-studies/${slug}.mdx`
  );
  return <CaseStudy />;
}
