import ArrowRightIcon from "@/assets/images/icon-arrow-right.svg?react"
import StarIcon from "@/assets/images/icon-star.svg?react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// TODO: convert to a composition item style, if possible
export function HistoryItem({
  fromCode,
  toCode,
  rate,
  change,
  favorited,
  onFavoriteClicked,
}: {
  fromCode: string
  toCode: string
  rate: number
  change: number
  favorited: boolean
  onFavoriteClicked: (favorited: boolean) => void
}) {
  // TODO: really I should probably just pass the currencyCode (title) and use that to resolve the other values from query cache (once implemented)
  return (
    <div className="flex items-center gap-5 rounded-10 border-border bg-neutral-600 px-4 py-3 text-preset-4">
      <div className="flex flex-1 items-center gap-2">
        <span>{fromCode}</span>
        <ArrowRightIcon className="fill-foreground-muted" />
        <span>{toCode}</span>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <div className="text-preset-3">{rate}</div>
        {/* TODO: triangle up, triangle down, colour for change */}
        <div
          className={cn("text-preset-6 text-green-500", {
            "text-red-500": change < 0,
          })}
        >
          {change}%
        </div>
      </div>
      {/* TODO: control variant or classNames based on if this is styled or not */}
      <Button onClick={() => onFavoriteClicked(!favorited)}>
        <StarIcon />
      </Button>
    </div>
  )
}
