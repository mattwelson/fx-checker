import { Input } from "@/components/ui/input"
import { CurrencyControl } from "./currency-control"
import { Button } from "@/components/ui/button"
import ExchangeIcon from "@/assets/images/icon-exchange.svg?react"
import ExchangeVerticalIcon from "@/assets/images/icon-exchange-vertical.svg?react"
import StarIcon from "@/assets/images/icon-star.svg?react"
import StarFilledIcon from "@/assets/images/icon-star-filled.svg?react"
import { useSelector } from "@xstate/store-react"
import { converterStore } from "./converterStore"
import { useEffect, useState } from "react"
import {
  formatAmount,
  sanitizeAmountInput,
  parseAmountInput,
  formatEditableAmount,
  rateFormatter,
} from "./utils"

type ConverterInput = "send" | "recieve"

export function Converter() {
  const {
    sendCurrencyCode,
    recieveCurrencyCode,
    rate,
    sendValue,
    recieveValue,
  } = useSelector(converterStore, (state) => state.context)

  const [activeInput, setActiveInput] = useState<ConverterInput | null>(null)
  const [sendDraft, setSendDraft] = useState(() => formatAmount(sendValue))
  const [recieveDraft, setRecieveDraft] = useState(() =>
    formatAmount(recieveValue)
  )

  useEffect(() => {
    if (activeInput !== "send") {
      setSendDraft(formatAmount(sendValue))
    }
  }, [activeInput, sendValue])

  useEffect(() => {
    if (activeInput !== "recieve") {
      setRecieveDraft(formatAmount(recieveValue))
    }
  }, [activeInput, recieveValue])

  function updateSendDraft(value: string) {
    const nextDraft = sanitizeAmountInput(value)
    setSendDraft(nextDraft)
    converterStore.trigger.updateSendValue({
      value: parseAmountInput(nextDraft),
    })
  }

  function updateRecieveDraft(value: string) {
    const nextDraft = sanitizeAmountInput(value)
    setRecieveDraft(nextDraft)
    converterStore.trigger.updateRecieveValue({
      value: parseAmountInput(nextDraft),
    })
  }

  function handleSendFocus() {
    setActiveInput("send")
    setSendDraft(formatEditableAmount(sendValue))
  }

  function handleRecieveFocus() {
    setActiveInput("recieve")
    setRecieveDraft(formatEditableAmount(recieveValue))
  }

  function handleSendBlur() {
    setActiveInput(null)
    setSendDraft(formatAmount(parseAmountInput(sendDraft)))
  }

  function handleRecieveBlur() {
    setActiveInput(null)
    setRecieveDraft(formatAmount(parseAmountInput(recieveDraft)))
  }

  // TODO: create a store for the favorited pairs, and then check for this pair
  const favorited = sendCurrencyCode === "USD" && recieveCurrencyCode === "EUR"
  return (
    <div className="rounded-20 bg-neutral-700">
      <div className="flex flex-col items-center gap-6 border-b border-dashed border-border p-5 md:flex-row">
        <div className="flex flex-col gap-5 rounded-2xl bg-neutral-600 p-5">
          <div className="text-preset-4 text-neutral-100">SEND</div>
          <div className="flex justify-between">
            <Input
              variant="underline"
              placeholder="0"
              type="text"
              inputMode="decimal"
              value={sendDraft}
              onFocus={handleSendFocus}
              onBlur={handleSendBlur}
              onChange={(e) => updateSendDraft(e.target.value)}
            />
            <CurrencyControl
              currencyCode={sendCurrencyCode}
              onChange={(currencyCode) =>
                converterStore.trigger.updateSendCurrencyCode({ currencyCode })
              }
            />
          </div>
        </div>
        <Button onClick={() => converterStore.trigger.swap()}>
          <ExchangeIcon className="hidden md:block" />
          <ExchangeVerticalIcon className="md:hidden" />
        </Button>
        <div className="flex flex-col gap-5 rounded-2xl bg-neutral-600 p-5">
          <div className="text-preset-4 text-neutral-100">RECIEVE</div>
          <div className="flex justify-between">
            <Input
              variant="underline"
              placeholder="0"
              type="text"
              inputMode="decimal"
              value={recieveDraft}
              className="text-primary"
              onFocus={handleRecieveFocus}
              onBlur={handleRecieveBlur}
              onChange={(e) => updateRecieveDraft(e.target.value)}
            />
            <CurrencyControl
              currencyCode={recieveCurrencyCode}
              onChange={(currencyCode) =>
                converterStore.trigger.updateRecieveCurrencyCode({
                  currencyCode,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 px-5 py-4 md:flex-row md:justify-between">
        <div className="text-preset-5">
          1 {sendCurrencyCode} = {rateFormatter.format(rate)}{" "}
          {recieveCurrencyCode}
        </div>
        <div className="flex gap-3">
          <Button variant={!favorited ? "outline" : "primary"}>
            {!favorited ? <StarIcon /> : <StarFilledIcon />}
            FAVORITE
          </Button>
          <Button variant="outline">LOG CONVERSION</Button>
        </div>
      </div>
    </div>
  )
}
