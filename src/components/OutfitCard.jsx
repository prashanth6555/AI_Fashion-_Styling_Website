import { categories, labelOf, matchLabel } from "../data/catalog"
import { Cover } from "./ui"

export default function OutfitCard({ outfit, score, onOpen, variant = "edit" }) {
  const category = labelOf(categories, outfit.category)

  return (
    <article className="group h-full bg-paper">
      <button
        type="button"
        onClick={() => onOpen(outfit.id)}
        className="flex h-full w-full cursor-pointer flex-col text-left"
      >
        <div className="shine relative aspect-[3/4] overflow-hidden bg-sand">
          <Cover
            src={outfit.image}
            alt={outfit.title}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 bg-ivory/92 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
            {category}
          </div>
          {typeof score === "number" ? (
            <div className="absolute bottom-3 left-3 bg-ink/85 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-ivory">
              {matchLabel(score)}
            </div>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col px-4 py-5 sm:px-5">
          <h3 className="font-display text-[2rem] leading-none tracking-tight transition duration-300 group-hover:text-gold">
            {outfit.title}
          </h3>
          {variant === "edit" ? (
            <>
              <p className="mt-3 text-sm leading-relaxed text-stone">{outfit.description}</p>
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-ink">
                <span className="mr-2 text-[10px] uppercase tracking-[0.2em] text-gold">Tip</span>
                {outfit.tip}
              </p>
            </>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-stone">{outfit.description}</p>
          )}
          <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink">
            View the look
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </button>
    </article>
  )
}
