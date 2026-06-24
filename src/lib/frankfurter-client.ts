import type { paths } from "@/data/frankfurter-types"
import createClient from "openapi-fetch"
import { env } from "./env"

export const frankfurter = createClient<paths>({
  baseUrl: env.VITE_FRANKFURTER_API_URL,
})
