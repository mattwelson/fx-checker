const amountFormatter = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 4,
})
const editableAmountFormatter = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 15,
  useGrouping: false,
})
export const rateFormatter = new Intl.NumberFormat("en-US", {
  minimumSignificantDigits: 4,
  maximumSignificantDigits: 4,
})
export function formatAmount(value: number) {
  if (!Number.isFinite(value) || value === 0) return ""
  return amountFormatter.format(value)
}
export function formatEditableAmount(value: number) {
  if (!Number.isFinite(value) || value === 0) return ""
  return editableAmountFormatter.format(value)
}
function getDecimalSeparator(value: string) {
  const trimmedValue = value.trim()
  const lastDotIndex = trimmedValue.lastIndexOf(".")
  const lastCommaIndex = trimmedValue.lastIndexOf(",")

  if (lastDotIndex === -1 && lastCommaIndex === -1) return null

  if (lastDotIndex !== -1 && lastCommaIndex !== -1) {
    return lastDotIndex > lastCommaIndex ? "." : ","
  }

  if (/^\d{1,3}(,\d{3})+$/.test(trimmedValue)) return null

  return lastCommaIndex !== -1 ? "," : "."
}
function isDigit(character: string) {
  return character >= "0" && character <= "9"
}
export function sanitizeAmountInput(value: string) {
  const decimalSeparator = getDecimalSeparator(value)
  let sanitizedValue = ""
  let hasDecimalSeparator = false

  for (const character of value) {
    if (isDigit(character)) {
      sanitizedValue += character
    } else if (
      decimalSeparator &&
      character === decimalSeparator &&
      !hasDecimalSeparator
    ) {
      sanitizedValue += "."
      hasDecimalSeparator = true
    }
  }

  return sanitizedValue
}
export function parseAmountInput(value: string) {
  if (value === "" || value === ".") return 0

  const numberValue = Number(value)
  return Number.isFinite(numberValue) ? numberValue : 0
}
