import type { Metadata } from "next";
import { ProjectNav } from "@/components/layout/ProjectNav";
import { getProjects } from "@/lib/projects";

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
            className="text-[48px] leading-tight font-bold text-[#1A211B] line-clamp-2"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            {project?.title ?? slug}
          </h1>
          {project?.subtitle && (
            <p
              className="mt-3 text-[16px] leading-relaxed text-[#6B6B6B]"
              style={{
                fontFamily: "var(--font-inter)",
                maxWidth: "55%",
              }}
            >
              {project.subtitle}
            </p>
          )}
        </header>

        {/* Metadata strip */}
        {metadataCards.length > 0 && <div className="grid grid-cols-4 gap-4 mb-20">
          {metadataCards.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <div className="w-8 h-8 rounded-md bg-[#E8E8E8] mb-3" />
              <p
                className="text-[11px] text-[#9E9E9E] uppercase tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {label}
              </p>
              <p
                className="text-[14px] font-medium text-[#1A211B] mt-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {value ?? "—"}
              </p>
            </div>
          ))}
        </div>}

        {/* MDX content */}
        <div className="project-content pb-24">
          <ProjectContent />
        </div>
      </div>
    </>
  );
}
