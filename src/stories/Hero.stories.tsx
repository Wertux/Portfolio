import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@/components/sections/Hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    headline: "Senior UX Designer",
    subline: "Crafting digital products that are clear, useful, and human.",
    tagLabel: "Zurich · Open to work",
  },
};
