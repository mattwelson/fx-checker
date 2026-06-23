import { definePreview } from "@storybook/tanstack-react"
import { initialize, mswLoader } from "msw-storybook-addon"

import "../src/styles.css"
import { mswHandlers } from "./msw-handlers"

initialize({ onUnhandledRequest: "bypass" })

export default definePreview({
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
