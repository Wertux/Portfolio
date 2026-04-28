import Link from "next/link";

export function ProjectNav() {
  return (
    <nav
      aria-label="Project navigation"
      className="sticky top-0 z-40 flex items-center px-6"
      style={{ background: "#F8F7F4", height: "40px" }}
    >
      <Link
        href="/"
        className="flex items-center h-full px-4 text-[13px] font-medium text-[#1A211B] border border-[#1A211B] rounded-[999px] hover:bg-black/5 transition-colors"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        ← Back to Home
      </Link>
    </nav>
  );
}
