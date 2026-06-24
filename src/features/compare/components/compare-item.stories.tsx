import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { CompareItem } from "./compare-item"
import { fn } from "storybook/test"
import { popularCurrencies } from "@/data/supported-currencies"

const meta = {
  component: CompareItem,
  tags: ["autodocs"],
} satisfies Meta<typeof CompareItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currency: popularCurrencies.at(0)!,
    value: 736.65,
    rate: 0.7366,
    favorited: false,
    onFavoriteClicked: fn(),
  },
}
