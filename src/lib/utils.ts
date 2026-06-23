import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

function isTextPreset(value: string) {
  return value.startsWith("preset-")
}

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [isTextPreset],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
