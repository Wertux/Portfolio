import figma from "@figma/code-connect";
import { Tag } from "./Tag";

figma.connect(Tag, "PLACEHOLDER_FIGMA_URL", {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <Tag>{label}</Tag>,
});
