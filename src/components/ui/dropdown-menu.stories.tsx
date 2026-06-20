import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { expect, waitFor, within } from "storybook/test"

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"

const meta = {
  component: DropdownMenu,
  tags: ["ai-generated"],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const PairActions: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Pair actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>USD to EUR</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Load pair</DropdownMenuItem>
        <DropdownMenuItem>Add favorite</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /pair actions/i }))

    const body = within(canvasElement.ownerDocument.body)
    const menu = await body.findByRole("menu")

    await waitFor(() => expect(menu).toHaveAttribute("data-state", "open"))
    await expect(body.getByRole("menuitem", { name: /load pair/i })).toHaveTextContent(
      "Load pair"
    )
  },
}

export const WithCheckboxes: Story = {
  render: () => (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Ticker settings</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked>
          Show 24-hour change
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Compact rows</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithRadioGroup: Story = {
  render: () => (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Chart range</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value="1m">
          <DropdownMenuRadioItem value="1d">1D</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1w">1W</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1m">1M</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
