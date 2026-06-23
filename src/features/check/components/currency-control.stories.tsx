import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { CurrencyControl } from "./currency-control"
import { fn } from "storybook/test"

const meta = {
  component: CurrencyControl,
  tags: ["autodocs"],
} satisfies Meta<typeof CurrencyControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onChange: fn(),
    currencyCode: "USD",
  },
}
