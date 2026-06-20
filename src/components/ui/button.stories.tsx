import type { Meta, StoryObj } from "@storybook/tanstack-react"
import StarFilledIcon from "@/assets/images/icon-star-filled.svg?react"
import StarIcon from "@/assets/images/icon-star.svg?react"
import { expect } from "storybook/test"

import { Button } from "./button"

const meta = {
  component: Button,
  tags: ["ai-generated"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Convert",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("button", { name: /convert/i })
    ).toHaveAttribute("data-variant", "default")
  },
}

export const Primary: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Button {...args}>
      <StarFilledIcon className="fill-foreground" />
      FAVORITED
    </Button>
  ),
}

export const Outline: Story = {
  args: {
    children: "LOG CONVERSION",
    variant: "outline",
  },
}

export const MutedSmall: Story = {
  args: {
    children: "Pinned",
    size: "sm",
    variant: "muted",
  },
}

export const IconStart: Story = {
  render: (args) => (
    <Button {...args}>
      <StarIcon />
      FAVORITE
    </Button>
  ),
}

export const AsLink: Story = {
  render: (args) => (
    <Button {...args} asChild variant="link">
      <a href="/rates">View rates</a>
    </Button>
  ),
}

export const CssCheck: Story = {
  args: {
    children: "Submit",
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: /submit/i })

    await expect(getComputedStyle(button).borderTopLeftRadius).toBe("8px")
  },
}
