import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { SearchIcon } from "lucide-react"
import { expect } from "storybook/test"

import { Button } from "./button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group"

const meta = {
  component: InputGroup,
  tags: ["ai-generated"],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const AmountWithCurrency: Story = {
  render: () => (
    <InputGroup aria-label="Send amount">
      <InputGroupAddon>
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Amount to send"
        defaultValue="1000"
        inputMode="numeric"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>EUR</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("USD"))

    await expect(canvas.getByLabelText(/amount to send/i)).toHaveFocus()
  },
}

export const SearchWithAction: Story = {
  render: () => (
    <InputGroup aria-label="Currency search">
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" />
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Search currencies"
        placeholder="Search currencies"
        type="search"
      />
      <InputGroupAddon align="inline-end">
        <Button size="xs" variant="outline">
          Clear
        </Button>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const BlockStartAddon: Story = {
  render: () => (
    <InputGroup aria-label="Reference rate">
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText>Reference rate</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Current reference rate"
        defaultValue="1 USD = 0.8530 EUR"
        readOnly
      />
    </InputGroup>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <InputGroup aria-label="Conversion note">
      <InputGroupTextarea
        aria-label="Conversion note"
        defaultValue="Invoice payment converted at today's reference rate."
      />
      <InputGroupAddon align="block-end" className="border-t">
        <InputGroupText>Saved with conversion log</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Invalid: Story = {
  render: () => (
    <InputGroup aria-label="Invalid amount">
      <InputGroupAddon>
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        aria-invalid="true"
        aria-label="Amount to send"
        defaultValue="abc"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Invalid</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}
