import figma from "@figma/code-connect";
import { Nav } from "./Nav";

figma.connect(Nav, "PLACEHOLDER_FIGMA_URL", {
  example: () => <Nav />,
});
