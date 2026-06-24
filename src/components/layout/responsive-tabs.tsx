import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { createAtom, useAtom } from "@xstate/store-react"

const tabAtom = createAtom("history")

export function ResponsiveTabs({
  children,
  favoritesCount,
  logCount,
}: {
  children: React.ReactNode
  favoritesCount: number
  logCount: number
}) {
  const tabValue = useAtom(tabAtom)
  return (
    <Tabs value={tabValue} onValueChange={tabAtom.set}>
      <Select value={tabValue} onValueChange={tabAtom.set}>
        <SelectTrigger className="w-full text-preset-3 sm:hidden">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="text-preset-3">
          <SelectItem value="history">HISTORY</SelectItem>
          <SelectItem value="compare">COMPARE</SelectItem>
          <SelectItem value="favorites">
            FAVORITES
            <span className="flex size-5 items-center justify-center rounded-full bg-lime-800 text-preset-6 text-lime-500">
              {favoritesCount}
            </span>
          </SelectItem>
          <SelectItem value="log">
            LOG
            <span className="flex size-5 items-center justify-center rounded-full bg-lime-800 text-preset-6 text-lime-500">
              {logCount}
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
      <TabsList className="hidden text-preset-3 sm:inline-flex">
        <TabsTrigger className="text-preset-3" value="history">
          HISTORY
        </TabsTrigger>
        <TabsTrigger className="text-preset-3" value="compare">
          COMPARE
        </TabsTrigger>
        <TabsTrigger className="text-preset-3" value="favorites">
          FAVORITES
          <span className="flex size-5 items-center justify-center rounded-full bg-lime-800 text-preset-6 text-lime-500">
            {favoritesCount}
          </span>
        </TabsTrigger>
        <TabsTrigger className="text-preset-3" value="log">
          LOG
          <span className="flex size-5 items-center justify-center rounded-full bg-lime-800 text-preset-6 text-lime-500">
            {logCount}
          </span>
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}
