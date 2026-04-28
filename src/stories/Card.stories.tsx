import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/ui/Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "e-ID",
    tags: ["UX Design", "Government"],
  },
};

export const WithLink: Story = {
  args: {
    title: "Sedex",
    tags: ["UX Design", "SaaS"],
    href: "/projects/sedex",
  },
};

export const WithThumbnail: Story = {
  args: {
    title: "Blick.ch",
    thumbnail: "/images/placeholder.jpg",
    tags: ["UX Design", "Media"],
    href: "/projects/blick",
  },
};
