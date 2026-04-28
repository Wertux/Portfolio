import fs from "node:fs";
import path from "node:path";

export interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  years: string;
  thumbnail: string;
  slug: string;
  role?: string;
  timeframe?: string;
  team?: string;
  focus?: string;
  protected?: boolean;
  hidden?: boolean;
}

function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const result: Record<string, unknown> = {};

  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();

    if (value.startsWith("[")) {
      try {
        result[key] = JSON.parse(value);
      } catch {
        result[key] = [];
      }
    } else {
      result[key] = value.replace(/^["']|["']$/g, "");
    }
  }

  return result;
}

export function getProjects(): Project[] {
  const dir = path.join(process.cwd(), "src/content/projects");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      return parseFrontmatter(raw) as unknown as Project;
    })
    .filter((p): p is Project => Boolean(p.slug && p.title) && !p.hidden)
    .sort((a, b) => endYear(b.years) - endYear(a.years));
}

function endYear(years: string): number {
  const match = years.match(/(\d{4})\s*$/) ;
  return match ? Number(match[1]) : 0;
}
