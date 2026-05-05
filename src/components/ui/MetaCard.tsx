import Image from "next/image";

export type MetaCardVariant = "blick" | "swiyu" | "default";

const swiyuIcons: Record<string, string> = {
  Role: "/icons/swiyu/role.svg",
  Timeframe: "/icons/swiyu/timeframe.svg",
  Team: "/icons/swiyu/team.svg",
  Focus: "/icons/swiyu/focus.svg",
};

interface MetaCardProps {
  label: string;
  value: string;
  variant?: MetaCardVariant;
}

export function MetaCard({ label, value, variant = "default" }: MetaCardProps) {
  if (variant === "blick") {
    return (
      <div className="bg-white rounded-xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
        <span
          className="inline-block bg-[#E3000B] text-white uppercase tracking-wide px-2 py-1 mb-3"
          style={{ fontFamily: "var(--font-inter)", fontSize: "var(--fluid-xs)", fontWeight: 700 }}
        >
          {label}
        </span>
        <p
          className="font-bold text-[#1A211B]"
          style={{ fontFamily: "var(--font-inter)", fontSize: "var(--fluid-base)", lineHeight: 1.3 }}
        >
          {value}
        </p>
      </div>
    );
  }

  if (variant === "swiyu") {
    const icon = swiyuIcons[label];
    return (
      <div className="bg-white rounded-xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
        {icon ? (
          <Image src={icon} alt="" width={40} height={40} className="mb-3" />
        ) : (
          <div className="w-10 h-10 rounded-md bg-[#E8E8E8] mb-3" />
        )}
        <p
          className="text-[#6B6B6B]"
          style={{ fontFamily: "var(--font-inter)", fontSize: "var(--fluid-sm)", fontWeight: 500 }}
        >
          {label}
        </p>
        <p
          className="text-[#1A211B] mt-1"
          style={{ fontFamily: "var(--font-inter)", fontSize: "var(--fluid-sm)", fontWeight: 400 }}
        >
          {value}
        </p>
      </div>
    );
  }

  // default
  return (
    <div className="bg-white rounded-xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <div className="w-8 h-8 rounded-md bg-[#E8E8E8] mb-3" />
      <p
        className="text-[#9E9E9E] uppercase tracking-wide"
        style={{ fontFamily: "var(--font-inter)", fontSize: "var(--fluid-xs)" }}
      >
        {label}
      </p>
      <p
        className="font-medium text-[#1A211B] mt-1"
        style={{ fontFamily: "var(--font-inter)", fontSize: "var(--fluid-sm)" }}
      >
        {value}
      </p>
    </div>
  );
}
