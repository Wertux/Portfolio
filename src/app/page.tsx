import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="dot-grid">
      <Hero
        headline="Senior UX Designer"
        subline="Crafting digital products that are clear, useful, and human."
        tagLabel="Zurich"
      />
      <Section id="work" aria-label="Work">
        {/* Work grid — coming once Figma is ready */}
      </Section>
      <Section id="about" aria-label="About">
        {/* About — coming once Figma is ready */}
      </Section>
      <Section id="contact" aria-label="Contact">
        {/* Contact — coming once Figma is ready */}
      </Section>
    </div>
  );
}
