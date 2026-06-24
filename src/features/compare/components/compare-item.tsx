import StarIcon from "@/assets/images/icon-star.svg?react"
import { Button } from "@/components/ui/button"
import type { SupportedCurrency } from "@/data/supported-currencies"

// TODO: convert to a composition item style, if possible
export function CompareItem({
  currency,
  value,
  rate,
  favorited,
  onFavoriteClicked,
}: {
  currency: SupportedCurrency
  value: number
  rate: number
  favorited: boolean
  onFavoriteClicked: (favorited: boolean) => void
}) {
  // TODO: really I should probably just pass the currencyCode (title) and use that to resolve the other values from query cache (once implemented)
  return (
    <div className="flex items-center gap-5 rounded-10 border-border bg-neutral-600 px-4 py-3">
      <img src={currency.flag} alt="" className="size-6 rounded-full" />
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="text-preset-4">{currency.currencyCode}</div>
        <div className="text-preset-5 text-muted-foreground">
          {currency.displayName}
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <div className="text-preset-3">{value}</div>
        <div className="text-preset-6 text-muted-foreground">@ {rate}</div>
      </div>
      {/* TODO: control variant or classNames based on if this is styled or not */}
      <Button onClick={() => onFavoriteClicked(!favorited)}>
        <StarIcon />
      </Button>
    </div>
  )
}
