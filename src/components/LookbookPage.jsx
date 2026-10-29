import { useMemo, useState } from "react"
import { categories, outfits } from "../data/catalog"
import OutfitCard from "./OutfitCard"
import { SectionLabel } from "./ui"

const filters = [{ id: "all", name: "All" }, ...categories]

export default function LookbookPage({ go }) {
  const [filter, setFilter] = useState("all")

  const visible = useMemo(() => {
    if (filter === "all") return outfits
    if (filter === "seasonal") return outfits.filter((outfit) => outfit.category === "seasonal")
    return outfits.filter((outfit) => outfit.category === filter)
  }, [filter])

  return (
    <div className="w-full">
      <header className="w-full border-b border-line px-4 py-12 sm:px-6 md:px-8 lg:py-16 wide:px-10">
        <SectionLabel>Lookbook</SectionLabel>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.9]">The edit.</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
          Every look currently in the Aurelle library. Open one for the clothing, accessories, palette, and how to wear it.
        </p>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter looks">
          {filters.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.id)}
                className={`min-h-11 shrink-0 cursor-pointer rounded-full border px-4 text-sm transition ${
                  active ? "border-ink bg-ink text-ivory" : "border-line bg-paper hover:border-ink"
                }`}
              >
                {item.name}
              </button>
            )
          })}
        </div>
      </header>

      <div key={filter} className="grid w-full grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 wide:grid-cols-4">
        {visible.map((outfit, index) => (
          <div key={outfit.id} className="card-in" style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}>
            <OutfitCard
              outfit={outfit}
              variant={index === 0 && filter === "all" ? "edit" : "quiet"}
              onOpen={(id) => go("detail", { id })}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
