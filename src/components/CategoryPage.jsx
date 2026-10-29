import {
  categories,
  getCategory,
  getSeason,
  outfitsByCategory,
  outfitsBySeason,
  seasons,
} from "../data/catalog"
import OutfitCard from "./OutfitCard"
import Reveal from "./Reveal"
import { Cover, SectionLabel } from "./ui"

export default function CategoryPage({ go, categoryId, seasonId }) {
  if (seasonId) {
    const season = getSeason(seasonId)
    if (!season) return <Missing go={go} />
    return (
      <Collection
        go={go}
        kicker="Seasonal collection"
        title={season.name}
        line={season.line}
        image={season.image}
        outfits={outfitsBySeason(seasonId)}
      />
    )
  }

  const category = getCategory(categoryId)
  if (!category) return <Missing go={go} />

  if (category.id === "seasonal") {
    return (
      <div className="w-full">
        <PageHero
          image={category.image}
          kicker="Wardrobe"
          title="Seasonal"
          line="Four collections. One way of paying attention to the weather."
        />
        {seasons.map((season) => {
          const items = outfitsBySeason(season.id)
          return (
            <section key={season.id} className="w-full">
              <div className="flex w-full flex-col gap-3 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6 md:px-8 wide:px-10">
                <div>
                  <SectionLabel>{season.name}</SectionLabel>
                  <h2 className="mt-2 font-display text-5xl leading-none">{season.line}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => go("season", { id: season.id })}
                  className="cursor-pointer text-[11px] uppercase tracking-[0.2em] hover:text-gold"
                >
                  Open collection →
                </button>
              </div>
              <OutfitGrid outfits={items} go={go} />
            </section>
          )
        })}
      </div>
    )
  }

  return (
    <Collection
      go={go}
      kicker="Wardrobe"
      title={category.name}
      line={category.line}
      image={category.image}
      outfits={outfitsByCategory(category.id)}
    />
  )
}

function Collection({ go, kicker, title, line, image, outfits }) {
  return (
    <div className="w-full">
      <PageHero image={image} kicker={kicker} title={title} line={line} />
      <div className="flex w-full items-center justify-between px-4 py-6 sm:px-6 md:px-8 wide:px-10">
        <p className="text-sm text-stone">
          {outfits.length} {outfits.length === 1 ? "look" : "looks"}
        </p>
        <button
          type="button"
          onClick={() => go("stylist")}
          className="cursor-pointer text-[11px] uppercase tracking-[0.2em] hover:text-gold"
        >
          Compose in this mood →
        </button>
      </div>
      <OutfitGrid outfits={outfits} go={go} />
    </div>
  )
}

function PageHero({ image, kicker, title, line }) {
  return (
    <header className="relative flex min-h-[46vh] w-full items-end overflow-hidden bg-ink">
      <Cover src={image} alt="" priority className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/15" />
      <div className="relative w-full px-4 pb-8 pt-24 sm:px-6 md:px-8 wide:px-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold-2">{kicker}</p>
        <h1 className="mt-3 font-display text-[clamp(3.4rem,7vw,7rem)] leading-[0.88] text-ivory">{title}</h1>
        <p className="mt-3 max-w-lg text-sm text-ivory/80 sm:text-base">{line}</p>
      </div>
    </header>
  )
}

function OutfitGrid({ outfits, go }) {
  if (!outfits.length) {
    return <p className="px-4 py-16 text-stone sm:px-6">Nothing in this edit yet.</p>
  }

  return (
    <div className="grid w-full grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
      {outfits.map((outfit, index) => (
        <Reveal key={outfit.id} delay={(index % 3) * 70}>
          <OutfitCard outfit={outfit} variant="quiet" onOpen={(id) => go("detail", { id })} />
        </Reveal>
      ))}
    </div>
  )
}

function Missing({ go }) {
  return (
    <div className="w-full px-4 py-24 sm:px-6">
      <h1 className="font-display text-5xl">This edit has moved.</h1>
      <button type="button" onClick={() => go("home")} className="mt-6 cursor-pointer text-[11px] uppercase tracking-[0.2em]">
        Return home →
      </button>
      <p className="sr-only">{categories.length} wardrobes available</p>
    </div>
  )
}
