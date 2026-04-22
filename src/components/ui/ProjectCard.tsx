import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { title, subtitle, tags, years, slug } = project;

  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group flex w-full max-w-[800px] h-[200px] rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-shadow"
      aria-label={title}
    >
      {/* Left: image placeholder */}
      <div className="w-[40%] shrink-0 bg-[#E8E8E8] flex items-center justify-center">
        <span
          className="text-[13px] text-[#9E9E9E]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          screenshot
        </span>
      </div>

      {/* Right: content */}
      <div className="flex flex-col p-6 min-w-0 flex-1">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] px-3 py-1.5 rounded-[999px] border border-[#1A211B] text-[#1A211B] leading-none whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + description */}
        <div className="flex-1 min-h-0 mt-3">
          <h3
            className="text-[18px] font-bold leading-snug text-[#1A211B] line-clamp-2"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            {title}
          </h3>
          <p
            className="text-[14px] leading-snug text-[#6B6B6B] line-clamp-2 mt-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <span
            className="text-[13px] text-[#1A211B] font-medium group-hover:underline"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View Case Study →
          </span>
          <span
            className="text-[13px] text-[#6B6B6B]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {years}
          </span>
        </div>
      </div>
    </Link>
  );
}
