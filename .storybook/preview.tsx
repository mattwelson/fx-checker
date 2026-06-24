import { definePreview } from "@storybook/tanstack-react"
import { QueryClientProvider } from "@tanstack/react-query"
import { initialize, mswLoader } from "msw-storybook-addon"
import { useState, type ReactNode } from "react"

import "@/styles.css"
import { createQueryClient } from "../src/lib/query-client"
import { mswHandlers } from "./msw-handlers"

initialize({ onUnhandledRequest: "bypass" })

function StorybookQueryClientProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => createQueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default definePreview({
  decorators: [
    (Story) => (
      <StorybookQueryClientProvider>
        <Story />
      </StorybookQueryClientProvider>
    ),
  ],
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    msw: {
      handlers: mswHandlers,
    },
  },
})
