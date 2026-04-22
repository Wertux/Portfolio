import figma from "@figma/code-connect";
import { Hero } from "./Hero";

figma.connect(Hero, "PLACEHOLDER_FIGMA_URL", {
  example: () => <Hero />,
});
