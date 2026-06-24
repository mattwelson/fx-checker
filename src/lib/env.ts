import { createEnv } from "@t3-oss/env-core"
import z from "zod"

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_FRANKFURTER_API_URL: z.url(),
  },
  runtimeEnv: process.env,
})
