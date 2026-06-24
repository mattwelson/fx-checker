import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { Converter } from "./converter"

const meta = {
  component: Converter,
  tags: ["autodocs"],
} satisfies Meta<typeof Converter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
