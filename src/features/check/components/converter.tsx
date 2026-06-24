import { Input } from "@/components/ui/input"
import type { SupportedCurrencyCode } from "@/data/supported-currencies"
import { CurrencyControl } from "./currency-control"
import { Button } from "@/components/ui/button"
import ExchangeIcon from "@/assets/images/icon-exchange.svg?react"
import ExchangeVerticalIcon from "@/assets/images/icon-exchange-vertical.svg?react"
import StarIcon from "@/assets/images/icon-star.svg?react"
import StarFilledIcon from "@/assets/images/icon-star-filled.svg?react"

export function Converter({
  fromCurrencyCode,
  toCurrencyCode,
  rate,
  favorited,
}: {
  fromCurrencyCode: SupportedCurrencyCode
  toCurrencyCode: SupportedCurrencyCode
  rate: number
  favorited: boolean
  onSwapCurrency: () => void
  onFavorite: () => void
}) {
  return (
    <div className="rounded-20 bg-neutral-700">
      <div className="flex flex-col items-center gap-6 border-b border-dashed border-border p-5 md:flex-row">
        <div className="flex flex-col gap-5 rounded-2xl bg-neutral-600 p-5">
          <div className="text-preset-4 text-neutral-100">SEND</div>
          <div className="flex justify-between">
            <Input variant="underline" placeholder="0" type="tel" />
            <CurrencyControl
              currencyCode={fromCurrencyCode}
              onChange={() => {}}
            />
          </div>
        </div>
        <Button>
          <ExchangeIcon className="hidden md:block" />
          <ExchangeVerticalIcon className="md:hidden" />
        </Button>
        <div className="flex flex-col gap-5 rounded-2xl bg-neutral-600 p-5">
          <div className="text-preset-4 text-neutral-100">SEND</div>
          <div className="flex justify-between">
            <Input
              variant="underline"
              placeholder="0"
              type="tel"
              className="text-primary"
            />
            <CurrencyControl
              currencyCode={toCurrencyCode}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 px-5 py-4 md:flex-row md:justify-between">
        <div className="text-preset-5">
          1 {fromCurrencyCode} = {rate} {toCurrencyCode}
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
