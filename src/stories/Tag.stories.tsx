import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/components/ui/Tag";

const meta: Meta<typeof Tag> = {
  title: "UI/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: "UX Design" },
};

export const LongLabel: Story = {
  args: { children: "Design Systems" },
};
