import { useEffect, useMemo, useRef, useState } from "react"
import {
  atelierImage,
  clothingPrefs,
  colors,
  labelOf,
  occasions,
  recommend,
  styles,
  validateBrief,
} from "../data/catalog"
import OutfitCard from "./OutfitCard"
import { Button, Cover, SectionLabel } from "./ui"

const emptyBrief = {
  occasion: "",
  style: "",
  color: "",
  clothing: [],
}

export default function StylistPage({ go, preset }) {
  const [form, setForm] = useState(() => ({
    ...emptyBrief,
    ...preset,
    clothing: preset?.clothing ?? [],
  }))
  const [errors, setErrors] = useState({})
  const [offset, setOffset] = useState(0)
  const [hasRun, setHasRun] = useState(false)
  const [loading, setLoading] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const result = useMemo(() => (hasRun ? recommend(form, offset) : null), [form, offset, hasRun])

  const choose = (field, value) => {
    setErrors((current) => ({ ...current, [field]: undefined }))
    setForm((current) => {
      if (field === "clothing") {
        const selected = current.clothing.includes(value)
        return {
          ...current,
          clothing: selected
            ? current.clothing.filter((item) => item !== value)
            : [...current.clothing, value],
        }
      }
      return { ...current, [field]: value }
    })
  }

  const compose = (event, nextOffset) => {
    event?.preventDefault()
    const nextErrors = validateBrief(form)
    setErrors(nextErrors)
    const fields = ["occasion", "style", "color", "clothing"]
    const firstInvalid = fields.find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      return
    }

    setLoading(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      setOffset(nextOffset)
      setHasRun(true)
      setLoading(false)
      window.setTimeout(() => {
        document.getElementById("looks")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 40)
    }, 680)
  }

  const summary = hasRun
    ? [
        labelOf(occasions, form.occasion),
        labelOf(styles, form.style),
        labelOf(colors, form.color),
        form.clothing.map((item) => labelOf(clothingPrefs, item)).join(" & "),
      ]
        .filter(Boolean)
        .join(" · ")
    : ""

  return (
    <div className="w-full">
      <header className="relative h-[48vh] min-h-[300px] w-full overflow-hidden bg-ink">
        <Cover
          src={atelierImage}
          alt="Rails of clothing inside a fashion atelier"
          priority
          className="kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/20" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-6 md:px-8 wide:px-10">
          <SectionLabel light>The atelier</SectionLabel>
          <h1 className="mt-3 font-display text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-ivory">
            Compose a look
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory/80 sm:text-base">
            Four preferences. Three outfits, with the pieces, the metal, and a styling note.
          </p>
        </div>
      </header>

      <div className="grid w-full lg:grid-cols-12">
        <form
          onSubmit={(event) => compose(event, 0)}
          noValidate
          className={`w-full bg-ivory px-4 py-8 sm:px-6 md:px-8 lg:col-span-5 lg:px-8 lg:py-10 wide:px-10 ${
            Object.keys(errors).length ? "shake" : ""
          }`}
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Your brief</p>
          <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">What are we dressing?</h2>
          {preset?.occasion && !hasRun ? (
            <p className="mt-4 text-sm text-stone">
              Occasion set to {labelOf(occasions, form.occasion) || "your choice"}. Add the rest of the brief.
            </p>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Every field is required. Clothing can be more than one — choose everything you enjoy wearing.
            </p>
          )}

          <ChoiceGroup
            id="occasion"
            label="Occasion"
            options={occasions}
            value={form.occasion}
            error={errors.occasion}
            onChoose={(value) => choose("occasion", value)}
          />
          <ChoiceGroup
            id="style"
            label="Style"
            options={styles}
            value={form.style}
            error={errors.style}
            onChoose={(value) => choose("style", value)}
          />
          <ColorGroup value={form.color} error={errors.color} onChoose={(value) => choose("color", value)} />
          <ChoiceGroup
            id="clothing"
            label="Clothing preferences"
            options={clothingPrefs}
            value={form.clothing}
            multiple
            error={errors.clothing}
            onChoose={(value) => choose("clothing", value)}
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="submit" className="w-full sm:w-auto" arrow>
              {hasRun ? "Compose again" : "Compose my look"}
            </Button>
            {hasRun ? (
              <Button
                type="button"
                variant="ghost"
                className="w-full sm:w-auto"
                onClick={(event) => compose(event, offset + 1)}
              >
                Generate new look
              </Button>
            ) : null}
          </div>
        </form>

        <section id="looks" className="w-full scroll-mt-20 bg-paper px-4 py-8 sm:px-6 md:px-8 lg:col-span-7 lg:px-8 lg:py-10 wide:px-10">
          {!hasRun && !loading ? (
            <div className="flex h-full min-h-[420px] flex-col justify-end border border-line bg-ivory p-6 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Waiting</p>
              <h2 className="mt-3 max-w-md font-display text-5xl leading-[0.95]">
                Your looks will appear here.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
                Complete the brief and Aurelle will lay out three outfits from the atelier library.
              </p>
            </div>
          ) : null}

          {loading ? (
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Composing</p>
              <h2 className="mt-3 font-display text-5xl leading-none">Editing the rack…</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="animate-pulse bg-sand" style={{ aspectRatio: item === 2 ? "3 / 2" : "3 / 4" }} />
                ))}
              </div>
            </div>
          ) : null}

          {hasRun && !loading && result ? (
            <div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                    {result.tailored ? "Tailored to your brief" : "Closest edits for this brief"}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95]">
                    Three ways to wear it.
                  </h2>
                  <p className="mt-3 text-sm text-stone">{summary}</p>
                </div>
                <Button type="button" variant="ghost" onClick={(event) => compose(event, offset + 1)}>
                  Generate new look
                </Button>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2" aria-live="polite">
                {result.looks.map(({ outfit, score }, index) => (
                  <div key={`${outfit.id}-${offset}`} className="card-in" style={{ animationDelay: `${index * 90}ms` }}>
                    <OutfitCard outfit={outfit} score={score} onOpen={(id) => go("detail", { id })} />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  )
}

function ChoiceGroup({ id, label, options, value, onChoose, error, multiple = false }) {
  const selected = multiple ? value : [value]

  return (
    <fieldset id={`field-${id}`} className="mt-8 border-0 p-0">
      <legend className="text-[11px] uppercase tracking-[0.22em] text-ink">
        {label}
        {multiple ? <span className="ml-2 normal-case tracking-normal text-stone">Select any</span> : null}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option.id)
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChoose(option.id)}
              className={`min-h-11 cursor-pointer rounded-full border px-4 text-sm transition duration-300 ${
                active
                  ? "border-ink bg-ink text-ivory"
                  : "border-line bg-paper text-ink hover:-translate-y-0.5 hover:border-ink"
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      {error ? (
        <p role="alert" className="mt-2 text-sm text-[#8d3038]">
          {error}
        </p>
      ) : null}
    </fieldset>
  )
}

function ColorGroup({ value, error, onChoose }) {
  return (
    <fieldset id="field-color" className="mt-8 border-0 p-0">
      <legend className="text-[11px] uppercase tracking-[0.22em] text-ink">Color story</legend>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {colors.map((color) => {
          const active = value === color.id
          return (
            <button
              key={color.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChoose(color.id)}
              className={`flex min-h-12 cursor-pointer items-center gap-2 border px-3 text-left text-sm transition duration-300 ${
                active ? "border-ink bg-ink text-ivory" : "border-line bg-paper hover:-translate-y-0.5 hover:border-ink"
              }`}
            >
              <span
                className="h-4 w-4 shrink-0 rounded-full border border-black/10"
                style={{ backgroundColor: color.hex }}
              />
              {color.label}
            </button>
          )
        })}
      </div>
      {error ? (
        <p role="alert" className="mt-2 text-sm text-[#8d3038]">
          {error}
        </p>
      ) : null}
    </fieldset>
  )
}
