import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { expect } from "storybook/test"

import { Input } from "./input"

const meta = {
  component: Input,
  tags: ["ai-generated"],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  args: {
    "aria-label": "Search currencies",
    placeholder: "Search currencies",
    type: "search",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("searchbox", { name: /search currencies/i })
    ).toHaveAttribute("type", "search")
  },
}

export const Amount: Story = {
  args: {
    "aria-label": "Amount to send",
    inputMode: "numeric",
    placeholder: "0",
    variant: "underline",
    className: "max-w-24",
  },
}

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    "aria-label": "Amount to send",
    defaultValue: "abc",
  },
}

export const Disabled: Story = {
  args: {
    "aria-label": "Converted amount",
    disabled: true,
    value: "853.00",
  },
}
