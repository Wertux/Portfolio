import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(Button, "PLACEHOLDER_FIGMA_URL", {
  props: {
    variant: figma.enum("Variant", {
      primary: "primary",
      secondary: "secondary",
      ghost: "ghost",
    }),
    label: figma.string("Label"),
  },
  example: ({ variant, label }) => <Button variant={variant}>{label}</Button>,
});
