import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();

  return (
    <div className="dot-grid">
      <Nav />
      <Hero />
      <section
        aria-label="Projects"
        className="flex flex-col items-center gap-8 px-6 py-16"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
