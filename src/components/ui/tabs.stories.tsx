import type { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { expect } from "storybook/test"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

type TabsStoryProps = ComponentProps<typeof Tabs> & {
  listVariant?: ComponentProps<typeof TabsList>["variant"]
}

const meta = {
  component: Tabs,
  tags: ["ai-generated", "needs-work"],
} satisfies Meta<TabsStoryProps>

export default meta
type Story = StoryObj<typeof meta>

function CurrencyTabs({ listVariant, ...props }: TabsStoryProps) {
  return (
    <Tabs defaultValue="converter" {...props}>
      <TabsList variant={listVariant}>
        <TabsTrigger value="converter">CONVERTER</TabsTrigger>
        <TabsTrigger value="compare">COMPARE</TabsTrigger>
        <TabsTrigger value="history">
          HISTORY
          <span className="flex size-5 items-center justify-center rounded-full bg-lime-800 text-preset-6 text-lime-500">
            4
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="converter">
        Convert between active currencies.
      </TabsContent>
      <TabsContent value="compare">Compare currencies at once.</TabsContent>
      <TabsContent value="history">Review rate history.</TabsContent>
    </Tabs>
  )
}

export const Default: Story = {
  render: (args) => <CurrencyTabs {...args} />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("tab", { name: /compare/i }))

    await expect(canvas.getByText(/compare currencies at once/i)).toBeVisible()
  },
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => <CurrencyTabs {...args} />,
}
