import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { Converter } from "./converter"
import { fn } from "storybook/test"

const meta = {
  component: Converter,
  tags: ["autodocs"],
} satisfies Meta<typeof Converter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fromCurrencyCode: "USD",
    toCurrencyCode: "EUR",
    rate: 0.853,
    favorited: false,
    onFavorite: fn(),
    onSwapCurrency: fn(),
  },
}

export const Favorited: Story = {
  args: {
    fromCurrencyCode: "USD",
    toCurrencyCode: "EUR",
    rate: 0.853,
    favorited: true,
    onFavorite: fn(),
    onSwapCurrency: fn(),
  },
}
