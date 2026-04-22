export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="h-screen overflow-hidden flex items-center justify-center px-6 relative"
    >
      <div className="flex flex-col items-center gap-6 max-w-[1144px] w-full">
        <p className="text-[24px] leading-[32px] text-center">
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 600,
              color: "#1A211B",
            }}
          >
            {"Hi, I'm "}
          </span>
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 600,
              color: "#6B6B6B",
            }}
          >
            {"Luca "}
          </span>
          <span
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              color: "#6B6B6B",
            }}
          >
            👋🏼
          </span>
        </p>

        <h1
          className="text-[72px] leading-[86px] text-center w-full"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 800,
            color: "#1A211B",
          }}
        >
          I design systems people actually use
        </h1>

        <p
          className="text-[17px] leading-[28px] text-center max-w-[600px]"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            color: "#6B6B6B",
          }}
        >
          I design and research digital products — currently helping define how
          Switzerland identifies itself online. I care deeply about
          accessibility, about building things that last, and about the gap
          between design and code.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B6B6B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
