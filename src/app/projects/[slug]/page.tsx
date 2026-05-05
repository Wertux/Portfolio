import type { Metadata } from "next";
import { ProjectNav } from "@/components/layout/ProjectNav";
import { getProjects } from "@/lib/projects";
import { MetaCard, type MetaCardVariant } from "@/components/ui/MetaCard";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects().find((p) => p.slug === slug);
  return { title: project?.title ?? slug };
}

export default async function ProjectPage({ params }: PageParams) {
  const { slug } = await params;
  const project = getProjects().find((p) => p.slug === slug);
  const { default: ProjectContent } = await import(
    `@/content/projects/${slug}.mdx`
  );

  const metadataCards = [
    { label: "Role", value: project?.role },
    { label: "Timeframe", value: project?.timeframe },
    { label: "Team", value: project?.team },
    { label: "Focus", value: project?.focus },
  ].filter((card) => Boolean(card.value));

  return (
    <>
      <ProjectNav />

      <div className="max-w-[760px] mx-auto px-6">
        {/* Page header */}
        <header className="pt-12 pb-10">
          <h1
            className="font-bold text-[#1A211B] line-clamp-2"
            style={{
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontSize: "var(--fluid-2xl)",
              lineHeight: 1.15,
            }}
          >
            {project?.title ?? slug}
          </h1>
          {project?.subtitle && (
            <p
              className="mt-3 text-[#6B6B6B]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "var(--fluid-base)",
                lineHeight: 1.6,
                maxWidth: "55%",
              }}
            >
              {project.subtitle}
            </p>
          )}
        </header>

        {/* Metadata strip */}
        {metadataCards.length > 0 && (
          <div className="grid grid-cols-4 gap-4 mb-20">
            {metadataCards.map(({ label, value }) => (
              <MetaCard
                key={label}
                label={label}
                value={value ?? "—"}
                variant={slug as MetaCardVariant}
              />
            ))}
          </div>
        )}

        {/* MDX content */}
        <div className="project-content pb-24">
          <ProjectContent />
        </div>
      </div>
    </>
  );
}
