import figma from "@figma/code-connect";
import { Footer } from "./Footer";

figma.connect(Footer, "PLACEHOLDER_FIGMA_URL", {
  example: () => <Footer />,
});
