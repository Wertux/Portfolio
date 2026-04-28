import type { ReactNode } from "react";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "#F8F7F4" }}>
      {children}
    </div>
  );
}
