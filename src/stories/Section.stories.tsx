import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "@/components/layout/Section";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    "aria-label": "Example section",
    children: "Section content goes here.",
  },
};

export const WithId: Story = {
  args: {
    id: "work",
    "aria-label": "Work",
    children: "Work section content.",
  },
};
