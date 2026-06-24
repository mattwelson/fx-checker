import { Button } from "@/components/ui/button"
import ChevronDownIcon from "@/assets/images/icon-chevron-down.svg?react"
import SearchIcon from "@/assets/images/icon-search.svg?react"
import {
  otherCurrencies,
  popularCurrencies,
  supportedCurrencies,
  type SupportedCurrencyCode,
} from "@/data/supported-currencies"
import { InputGroup, InputGroupAddon } from "@/components/ui/input-group"
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"

const ITEMS = [
  {
    label: "Popular",
    items: popularCurrencies,
  },
  {
    label: "Other currencies",
    items: otherCurrencies,
  },
]

export function CurrencyControl({
  currencyCode,
  onChange,
}: {
  currencyCode: SupportedCurrencyCode
  onChange: (currencyCode: SupportedCurrencyCode) => void
}) {
  const currency = supportedCurrencies.find(
    (c) => c.currencyCode === currencyCode
  )

  if (!currency) return null

  return (
    <Combobox items={ITEMS}>
      <ComboboxTrigger
        render={
          <Button className="flex items-center gap-2 bg-neutral-500 text-preset-4">
            <img src={currency.flag} className="size-5 rounded-full" />
            {currency.currencyCode}
            <ChevronDownIcon />
          </Button>
        }
      />
      <ComboboxContent className="w-full max-w-sm" align="end">
        <div className="flex flex-col gap-2.5">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon aria-hidden="true" />
            </InputGroupAddon>
            <ComboboxInput
              className="text-preset-5"
              aria-label="Search currencies"
              placeholder="Search currencies..."
              type="search"
            />
          </InputGroup>
          <ComboboxEmpty>No currency found.</ComboboxEmpty>
          <div className="flex flex-col gap-1">
            <ComboboxList>
              {(group: (typeof ITEMS)[number]) => (
                <ComboboxGroup key={group.label} items={group.items}>
                  <ComboboxLabel className="flex justify-between border-b border-neutral-500">
                    <span>{group.label}</span>
                    <span>{group.items.length}</span>
                  </ComboboxLabel>
                  <ComboboxCollection>
                    {(item: (typeof ITEMS)[number]["items"][number]) => (
                      <ComboboxItem
                        key={item.currencyCode}
                        value={item.displayName}
                        className="flex gap-3"
                      >
                        <img src={item.flag} className="size-5 rounded-full" />
                        <span className="text-preset-4">
                          {item.currencyCode}
                        </span>
                        <span className="text-preset-5 text-muted-foreground">
                          {item.displayName}
                        </span>
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                </ComboboxGroup>
              )}
            </ComboboxList>
          </div>
        </div>
      </ComboboxContent>
    </Combobox>
  )
}
