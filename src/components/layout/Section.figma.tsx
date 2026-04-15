import figma from "@figma/code-connect";
import { Section } from "./Section";

figma.connect(Section, "PLACEHOLDER_FIGMA_URL", {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => (
    <Section aria-label={label}>{/* content */}</Section>
  ),
});
