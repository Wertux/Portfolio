import figma from "@figma/code-connect";
import { Card } from "./Card";

figma.connect(Card, "PLACEHOLDER_FIGMA_URL", {
  props: {
    title: figma.string("Title"),
    thumbnail: figma.string("Thumbnail"),
  },
  example: ({ title, thumbnail }) => (
    <Card title={title} thumbnail={thumbnail} />
  ),
});
