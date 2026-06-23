import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn", () => {
  it("keeps text preset typography classes alongside text color classes", () => {
    expect(cn("text-preset-6 text-green-500")).toBe(
      "text-preset-6 text-green-500"
    )
  })

  it("still resolves conflicts within text preset and text color groups", () => {
    expect(cn("text-preset-6 text-preset-5 text-green-500 text-red-500")).toBe(
      "text-preset-5 text-red-500"
    )
  })
})
