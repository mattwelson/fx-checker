import type { Meta, StoryObj } from "@storybook/tanstack-react"

import { ResponsiveTabs } from "./responsive-tabs"
import { TabsContent } from "../ui/tabs"

const meta = {
  component: ResponsiveTabs,
  tags: ["ai-generated", "needs-work"],
} satisfies Meta<typeof ResponsiveTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    favoritesCount: 8,
    logCount: 2,
    children: (
      <>
        <TabsContent value="history">
          Convert between active currencies.
        </TabsContent>
        <TabsContent value="compare">Compare currencies at once.</TabsContent>
        <TabsContent value="favorites">Review rate history.</TabsContent>
        <TabsContent value="log">
          See previously logged conversions.
        </TabsContent>
      </>
    ),
  },
}
