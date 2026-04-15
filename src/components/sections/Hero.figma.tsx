import figma from "@figma/code-connect";
import { Hero } from "./Hero";

figma.connect(Hero, "PLACEHOLDER_FIGMA_URL", {
  props: {
    headline: figma.string("Headline"),
    subline: figma.string("Subline"),
    tagLabel: figma.string("Tag"),
  },
  example: ({ headline, subline, tagLabel }) => (
    <Hero headline={headline} subline={subline} tagLabel={tagLabel} />
  ),
});
