import { Button } from "@/components/ui/button"
import ChevronDownIcon from "@/assets/images/icon-chevron-down.svg?react"
import SearchIcon from "@/assets/images/icon-search.svg?react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  otherCurrencies,
  popularCurrencies,
  supportedCurrencies,
  type SupportedCurrencyCode,
} from "@/data/supported-currencies"
import { createAtomConfig, useAtomState } from "@xstate/store-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

const queryAtomConfig = createAtomConfig(
  (input: { initialQuery: string }) => input.initialQuery
)

const SEARCH_RESULT_LIMIT = 4

export function CurrencyControl({
  currencyCode,
  onChange,
}: {
  currencyCode: SupportedCurrencyCode
  onChange: (currencyCode: SupportedCurrencyCode) => void
}) {
  const [query, queryAtom] = useAtomState(queryAtomConfig, { initialQuery: "" })
  const currency = supportedCurrencies.find(
    (c) => c.currencyCode === currencyCode
  )
  const searchResults = query
    ? getFuzzyCurrencyMatches(query).slice(0, SEARCH_RESULT_LIMIT)
    : []

  function handleCurrencyChange(nextCurrencyCode: string) {
    onChange(nextCurrencyCode as SupportedCurrencyCode)
  }

  if (!currency) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2 text-preset-4">
          <img src={currency.flag} className="size-5 rounded-full" />
          {currency.currencyCode}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full max-w-sm" align="end">
        <div className="flex flex-col gap-2.5">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon aria-hidden="true" />
            </InputGroupAddon>
            <InputGroupInput
              className="text-preset-5"
              aria-label="Search currencies"
              placeholder="Search currencies..."
              type="search"
              value={query}
              onKeyDown={(e) => {
                if (
                  e.key.length === 1 ||
                  e.key === "Tab" ||
                  e.key === "Backspace" ||
                  e.key === "Delete" ||
                  e.key === "ArrowLeft" ||
                  e.key === "ArrowRight" ||
                  e.key === "Home" ||
                  e.key === "End"
                ) {
                  e.stopPropagation()
                }
              }}
              onChange={(e) => queryAtom.set(e.target.value)}
            />
          </InputGroup>
          <div className="flex flex-col gap-1">
            {query && (
              <DropdownMenuGroup>
                <DropdownMenuRadioGroup
                  value={currencyCode}
                  onValueChange={handleCurrencyChange}
                >
                  {searchResults.length > 0 ? (
                    searchResults.map((cur) => (
                      <DropdownMenuRadioItem
                        key={cur.flagCode}
                        value={cur.currencyCode}
                      >
                        <img src={cur.flag} className="size-5 rounded-full" />
                        <span className="text-preset-4">
                          {cur.currencyCode}
                        </span>
                        <span className="text-preset-5 text-muted-foreground">
                          {cur.displayName}
                        </span>
                      </DropdownMenuRadioItem>
                    ))
                  ) : (
                    <p className="px-2 py-3 text-preset-5 text-muted-foreground">
                      No currencies found.
                    </p>
                  )}
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            )}
            {!query && (
              <>
                <DropdownMenuGroup className="flex flex-col gap-1">
                  <DropdownMenuLabel className="flex justify-between uppercase">
                    <span>Popular</span>
                    <span>{popularCurrencies.length}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={currencyCode}
                    onValueChange={handleCurrencyChange}
                  >
                    {popularCurrencies.slice(0, 4).map((cur) => (
                      <DropdownMenuRadioItem
                        key={cur.flagCode}
                        value={cur.currencyCode}
                      >
                        <img src={cur.flag} className="size-5 rounded-full" />
                        <span className="text-preset-4">
                          {cur.currencyCode}
                        </span>
                        <span className="text-preset-5 text-muted-foreground">
                          {cur.displayName}
                        </span>
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="flex justify-between uppercase">
                    <span>Other currencies</span>
                    <span>{otherCurrencies.length}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={currencyCode}
                    onValueChange={handleCurrencyChange}
                  >
                    {otherCurrencies.slice(0, 4).map((cur) => (
                      <DropdownMenuRadioItem
                        key={cur.flagCode}
                        value={cur.currencyCode}
                      >
                        <img src={cur.flag} className="size-5 rounded-full" />
                        <span className="text-preset-4">
                          {cur.currencyCode}
                        </span>
                        <span className="text-preset-5 text-muted-foreground">
                          {cur.displayName}
                        </span>
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </>
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function getFuzzyCurrencyMatches(query: string) {
  const normalizedQuery = normalizeSearchValue(query)

  if (!normalizedQuery) return []

  return supportedCurrencies
    .map((currency) => {
      const code = normalizeSearchValue(currency.currencyCode)
      const name = normalizeSearchValue(currency.displayName)
      const compactName = name.replaceAll(" ", "")
      const score = Math.max(
        getFuzzyScore(normalizedQuery, code),
        getFuzzyScore(normalizedQuery, name),
        getFuzzyScore(normalizedQuery, compactName)
      )

      return { currency, score }
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return a.currency.currencyCode.localeCompare(b.currency.currencyCode)
    })
    .map((result) => result.currency)
}

function normalizeSearchValue(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
}

function getFuzzyScore(query: string, candidate: string) {
  if (candidate === query) return 100
  if (candidate.startsWith(query)) return 90 - (candidate.length - query.length)
  if (candidate.includes(query)) return 70 - candidate.indexOf(query)

  let queryIndex = 0
  let score = 0
  let previousMatchIndex = -1

  for (
    let candidateIndex = 0;
    candidateIndex < candidate.length;
    candidateIndex++
  ) {
    if (candidate[candidateIndex] !== query[queryIndex]) continue

    score += previousMatchIndex === candidateIndex - 1 ? 8 : 3
    previousMatchIndex = candidateIndex
    queryIndex++

    if (queryIndex === query.length) {
      return score - candidateIndex
    }
  }

  return 0
}
