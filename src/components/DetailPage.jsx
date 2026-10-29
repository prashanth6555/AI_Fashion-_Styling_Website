import { categories, getOutfit, labelOf, relatedOutfits, seasons } from "../data/catalog"
import OutfitCard from "./OutfitCard"
import { Button, Cover, SectionLabel } from "./ui"

export default function DetailPage({ go, outfitId }) {
  const outfit = getOutfit(outfitId)

  if (!outfit) {
    return (
      <div className="w-full px-4 py-24 sm:px-8">
        <h1 className="font-display text-5xl">This look is not in the atelier.</h1>
        <button type="button" onClick={() => go("lookbook")} className="mt-6 cursor-pointer uppercase tracking-[0.2em] text-[11px]">
          Browse the edit →
        </button>
      </div>
    )
  }

  const related = relatedOutfits(outfit)
  const category = labelOf(categories, outfit.category)
  const season = labelOf(seasons, outfit.season)

  const styleAnother = () => {
    go("stylist", {
      preset: {
        occasion: outfit.occasions[0],
        style: outfit.styles[0],
        color: outfit.colors[0],
        clothing: outfit.clothing,
      },
    })
  }

  return (
    <div className="w-full">
      <div className="grid w-full lg:grid-cols-2">
        <div className="bg-sand lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
          <Cover
            src={outfit.image}
            alt={outfit.title}
            priority
            className="h-[72vh] w-full object-cover lg:h-full"
          />
        </div>

        <article className="w-full px-4 py-8 sm:px-6 md:px-10 lg:px-12 lg:py-12 wide:px-16">
          <button
            type="button"
            onClick={() => go("category", { id: outfit.category })}
            className="cursor-pointer text-[11px] uppercase tracking-[0.22em] text-gold hover:text-ink"
          >
            ← {category}
          </button>
          <h1 className="mt-4 font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[0.9]">{outfit.title}</h1>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-stone">
            {category} · {season}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">{outfit.description}</p>

          <div className="mt-8 border border-line bg-ivory p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Styling note</p>
            <p className="mt-3 font-display text-3xl leading-snug">{outfit.tip}</p>
          </div>

          <section className="mt-12">
            <SectionLabel>Clothing</SectionLabel>
            <ol className="mt-4">
              {outfit.items.map((item, index) => (
                <li key={item.name} className="grid grid-cols-[3rem_1fr] gap-3 border-t border-line py-4">
                  <span className="font-display text-2xl text-gold">0{index + 1}</span>
                  <span>
                    <span className="block text-lg">{item.name}</span>
                    <span className="mt-1 block text-sm text-stone">{item.note}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <SectionLabel>Accessories</SectionLabel>
            <ul className="mt-4 grid gap-px bg-line sm:grid-cols-3">
              {outfit.accessories.map((item) => (
                <li key={item} className="bg-paper px-4 py-5 text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <SectionLabel>Matching colors</SectionLabel>
            <ul className="mt-4 flex flex-wrap gap-5">
              {outfit.palette.map((swatch) => (
                <li key={swatch.name} className="flex items-center gap-3">
                  <span
                    className="h-12 w-12 rounded-full border border-line"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <span>
                    <span className="block text-sm">{swatch.name}</span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-stone">{swatch.hex}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <SectionLabel>How to wear it</SectionLabel>
            <ol className="mt-4 space-y-4">
              {outfit.suggestions.map((suggestion, index) => (
                <li key={suggestion} className="border-l-2 border-gold pl-4">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-gold">0{index + 1}</span>
                  <p className="mt-1 text-sm leading-relaxed sm:text-base">{suggestion}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button onClick={styleAnother} arrow>
              Style something close
            </Button>
            <Button variant="ghost" onClick={() => go("stylist")}>
              New brief
            </Button>
          </div>
        </article>
      </div>

      {related.length ? (
        <section className="w-full border-t border-line">
          <div className="px-4 py-10 sm:px-6 md:px-8 wide:px-10">
            <SectionLabel>Continue</SectionLabel>
            <h2 className="mt-3 font-display text-5xl leading-none">Nearby in the atelier</h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <OutfitCard key={item.id} outfit={item} variant="quiet" onOpen={(id) => go("detail", { id })} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
