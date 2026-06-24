import type { SupportedCurrencyCode } from "@/data/supported-currencies"
import { createStore } from "@xstate/store-react"

export const converterStore = createStore({
  context: {
    sendCurrencyCode: "USD" as SupportedCurrencyCode,
    recieveCurrencyCode: "EUR" as SupportedCurrencyCode,
    sendValue: 0 as number,
    recieveValue: 0 as number,
    // TODO: workout how to set this rate!
    rate: 0.856,
  },
  on: {
    swap: (context) => ({
      ...context,
      rate: 1 / context.rate,
      recieveValue: context.sendValue / context.rate,
      sendCurrencyCode: context.recieveCurrencyCode,
      recieveCurrencyCode: context.sendCurrencyCode,
    }),
    updateSendValue: (context, event: { value: number }) => ({
      ...context,
      sendValue: event.value,
      recieveValue: event.value * context.rate,
    }),
    updateSendCurrencyCode: (
      context,
      event: { currencyCode: SupportedCurrencyCode }
    ) => ({
      ...context,
      sendCurrencyCode: event.currencyCode,
    }),
    updateRecieveValue: (context, event: { value: number }) => ({
      ...context,
      recieveValue: event.value,
      sendValue: event.value / context.rate,
    }),
    updateRecieveCurrencyCode: (
      context,
      event: { currencyCode: SupportedCurrencyCode }
    ) => ({
      ...context,
      recieveCurrencyCode: event.currencyCode,
    }),
  },
})
