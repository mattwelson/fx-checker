import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { HistoryItem } from "./history-item"
import { fn } from "storybook/test"

const meta = {
  component: HistoryItem,
} satisfies Meta<typeof HistoryItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fromCode: "USD",
    toCode: "EUR",
    rate: 0.853,
    change: 0.16,
    favorited: false,
    onFavoriteClicked: fn(),
  },
}

export const ChangeNegative: Story = {
  args: {
    ...Default.args,
    change: -0.13,
  },
}
