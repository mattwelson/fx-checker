import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { CompareItem } from "./compare-item"
import { fn } from "storybook/test"

const meta = {
  component: CompareItem,
  tags: ["autodocs"],
} satisfies Meta<typeof CompareItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "GBP",
    description: "British Pound",
    flagCode: "gb",
    value: 736.65,
    rate: 0.7366,
    favorited: false,
    onFavoriteClicked: fn(),
  },
}
