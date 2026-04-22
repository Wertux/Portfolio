import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/personal", label: "Personal" },
  { href: "/#contact", label: "Contact" },
] as const;

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Nav() {
  return (
    <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-10 py-3 pl-8 pr-3 rounded-[64px] backdrop-blur-[50px]"
        style={{ background: "rgba(237, 235, 233, 0.6)" }}
      >
        <Link href="/" aria-label="Home">
          <div
            className="w-10 h-10 rounded-full bg-[#1A211B]"
            aria-hidden="true"
          />
        </Link>

        <ul role="list" className="flex items-center gap-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-4 py-3 rounded-3xl text-base text-[#1A211B] transition-colors hover:bg-black/6"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 600 }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://www.linkedin.com/in/lucafiloni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#1A211B] text-white transition-opacity hover:opacity-80"
        >
          <LinkedInIcon />
        </a>
      </nav>
    </header>
  );
}
