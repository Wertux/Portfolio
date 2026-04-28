"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function UnlockForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("for") ?? "";

  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/case-study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, slug }),
      });

      if (res.ok) {
        router.push(`/projects/${slug}`);
      } else {
        const data = await res.json();
        setError(data.error ?? "Incorrect code. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="code"
          className="text-[11px] uppercase tracking-wide text-[#9E9E9E]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Access code
        </label>
        <input
          id="code"
          type="text"
          required
          autoFocus
          autoComplete="off"
          spellCheck={false}
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="XXXXXX"
          className="w-full rounded-lg border border-[#E8E8E8] bg-white px-4 py-3 text-[15px] font-medium text-[#1A211B] tracking-widest placeholder:text-[#C4C4C4] placeholder:tracking-widest focus:border-[#1A211B] focus:outline-none transition-colors"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>

      {error && (
        <p
          className="text-[13px] text-red-500"
          style={{ fontFamily: "var(--font-inter)" }}
          role="alert"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || code.length === 0}
        className="rounded-lg bg-[#1A211B] px-4 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-80 disabled:opacity-40"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {loading ? "Verifying…" : "Unlock case study"}
      </button>

      <p
        className="text-center text-[13px] text-[#9E9E9E]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Don&apos;t have a code?{" "}
        <a
          href="/#contact"
          className="text-[#1A211B] underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </p>
    </form>
  );
}

export default function UnlockPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 dot-grid"
    >
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="mb-6">
            <h1
              className="text-[22px] font-bold text-[#1A211B] leading-snug"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Protected case study
            </h1>
            <p
              className="mt-1.5 text-[14px] text-[#6B6B6B] leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              This case study requires an access code. Enter yours below.
            </p>
          </div>

          <Suspense fallback={null}>
            <UnlockForm />
          </Suspense>
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-[13px] text-[#9E9E9E] hover:text-[#1A211B] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
