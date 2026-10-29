import {
  categories,
  ctaImage,
  heroImage,
  occasions,
  quoteImage,
  seasons,
  trends,
} from "../data/catalog"
import Reveal from "./Reveal"
import { Button, Cover, SectionLabel } from "./ui"

const ticker = [
  "Aurelle",
  "New season",
  "AI curated",
  "Tailoring",
  "Silk",
  "Street",
  "Heritage",
  "After dark",
  "Ivory",
  "Ink",
]

const steps = [
  {
    n: "01",
    title: "Set the brief",
    body: "Occasion, style, color, and the clothes you actually like wearing. Four choices. No moodboard required.",
  },
  {
    n: "02",
    title: "Receive three looks",
    body: "Aurelle composes from the atelier library and returns complete outfits, not a single lonely garment.",
  },
  {
    n: "03",
    title: "Open the one",
    body: "Read the pieces, the accessories, the palette, and the note on how to wear it. Then generate another edit.",
  },
]

export default function HomePage({ go }) {
  return (
    <div className="w-full">
      <section className="grid w-full lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center bg-ivory px-4 py-12 sm:px-8 md:px-10 lg:order-1 lg:py-16 wide:px-16">
          <p className="rise text-[11px] uppercase tracking-[0.32em] text-gold">Aurelle atelier · AW26</p>
          <h1
            className="rise mt-5 max-w-xl font-display text-[clamp(3.1rem,7vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.03em]"
            style={{ animationDelay: "90ms" }}
          >
            Clothes, chosen with a <em className="italic text-gold">point of view.</em>
          </h1>
          <p
            className="rise mt-6 max-w-md text-base leading-relaxed text-stone sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            Tell Aurelle the room you are walking into, the mood, and the colors you love. Receive a finished look — garments, accessories, and the reason they belong together.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "270ms" }}>
            <Button onClick={() => go("stylist")} arrow>
              Compose a look
            </Button>
            <Button variant="ghost" onClick={() => go("lookbook")} arrow>
              See the edit
            </Button>
          </div>
          <dl className="rise mt-12 grid grid-cols-3 border-t border-line" style={{ animationDelay: "360ms" }}>
            {[
              ["18", "Atelier looks"],
              ["06", "Wardrobes"],
              ["04", "Seasons"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-line py-4 pr-3 last:border-r-0 last:pr-0">
                <dt className="font-display text-4xl leading-none sm:text-5xl">{value}</dt>
                <dd className="mt-2 text-[11px] uppercase tracking-[0.16em] text-stone">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 relative min-h-[72vh] overflow-hidden bg-ink lg:order-2 lg:min-h-full">
          <Cover
            src={heroImage}
            alt="Editorial portrait in evening color, the Aurelle campaign image"
            priority
            className="kenburns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10" />
          <p className="absolute left-4 top-6 hidden text-[11px] uppercase tracking-[0.28em] text-ivory [writing-mode:vertical-rl] lg:block">
            Autumn / Winter 26
          </p>
          <button
            type="button"
            onClick={() => go("season", { id: "winter" })}
            className="group absolute bottom-4 left-4 right-4 cursor-pointer bg-ivory/95 p-4 text-left transition duration-300 hover:-translate-y-1 sm:bottom-6 sm:left-auto sm:right-6 sm:w-72"
          >
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold">Campaign · AW26</span>
            <span className="mt-1 block font-display text-3xl leading-none">Milan, in blue</span>
            <span className="mt-2 block text-sm text-stone">One coat, one color, the city behind it.</span>
            <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
              Explore winter
              <span className="transition group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </section>

      <div className="marquee w-full overflow-hidden bg-ink text-ivory">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <p key={copy} className="flex shrink-0 items-center gap-8 px-4 py-4 text-[11px] uppercase tracking-[0.28em]">
              {ticker.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-8">
                  {item}
                  <span className="text-gold-2" aria-hidden="true">
                    ◆
                  </span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section className="w-full bg-paper">
        <div className="grid w-full items-end gap-8 px-4 py-16 sm:px-6 md:px-8 lg:grid-cols-12 lg:py-24 wide:px-10">
          <Reveal className="lg:col-span-7">
            <SectionLabel>The stylist</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.92] tracking-tight">
              Styling, without the guesswork.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="max-w-md text-base leading-relaxed text-stone sm:text-lg">
              Aurelle keeps a library of finished outfits. You set the brief. What comes back includes the clothing, the accessories, the colors that hold them, and a note on how to wear the look.
            </p>
          </Reveal>
        </div>
        <div className="w-full border-t border-line">
          {[
            ["01", "Read the room", "Office, celebration, travel, or a Tuesday that still deserves a decision."],
            ["02", "Hold the palette", "Noir, ivory, navy, earth, jewel. The color story stays consistent from cloth to metal."],
            ["03", "Finish the look", "Not a lone dress. A shoe, a bag, a piece of jewelry, and the small adjustment that makes it yours."],
          ].map(([index, title, body], item) => (
            <Reveal key={title} delay={item * 80}>
              <article className="group grid w-full gap-3 border-b border-line px-4 py-8 transition duration-300 hover:bg-ivory sm:px-6 md:grid-cols-12 md:items-baseline md:px-8 md:py-10 wide:px-10">
                <p className="font-display text-3xl text-gold md:col-span-2">{index}</p>
                <h3 className="font-display text-4xl leading-none md:col-span-4 md:text-5xl">{title}</h3>
                <p className="text-sm leading-relaxed text-stone md:col-span-6 md:text-base">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-paper pb-16 lg:pb-24">
        <div className="flex w-full flex-col gap-4 px-4 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-6 md:px-8 wide:px-10">
          <div>
            <SectionLabel>Featured</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.5rem)] leading-none">The season’s edit</h2>
          </div>
          <button
            type="button"
            onClick={() => go("lookbook")}
            className="cursor-pointer text-left text-[11px] uppercase tracking-[0.22em] text-ink hover:text-gold"
          >
            All looks →
          </button>
        </div>
        <div className="grid w-full grid-cols-1 gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {trends.map((trend, index) => (
            <Reveal key={trend.id} delay={index * 70} className="h-full">
              <button
                type="button"
                onClick={() => go("detail", { id: trend.outfitId })}
                className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden bg-ink text-left"
              >
                <Cover
                  src={trend.image}
                  alt={trend.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent transition duration-500 group-hover:from-ink/85" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gold-2">{trend.kicker}</p>
                  <h3 className="mt-2 font-display text-[2.4rem] leading-none">{trend.title}</h3>
                  <p className="mt-2 text-sm text-ivory/80">{trend.note}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative min-h-[68vh] w-full overflow-hidden bg-ink">
        <Cover
          src={quoteImage}
          alt="Clothing hanging in soft light inside the atelier"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative flex min-h-[68vh] w-full items-end px-4 py-14 sm:px-6 md:px-8 wide:px-10">
          <Reveal>
            <p className="max-w-3xl font-display text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.95] text-ivory">
              “Tell us the room you are walking into. We will dress the entrance.”
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold-2">Aurelle</p>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-paper">
        <div className="px-4 py-14 sm:px-6 md:px-8 lg:py-20 wide:px-10">
          <SectionLabel>Wardrobes</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.4rem,4vw,4.5rem)] leading-none">
            Six ways of getting dressed.
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-px bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={(index % 3) * 80}>
              <button
                type="button"
                onClick={() => go("category", { id: category.id })}
                className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden bg-sand text-left sm:aspect-[3/4]"
              >
                <Cover
                  src={category.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory sm:p-6">
                  <h3 className="font-display text-5xl leading-none">{category.name}</h3>
                  <p className="mt-2 text-sm text-ivory/80">{category.line}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold-2">
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-ivory">
        <div className="flex w-full flex-col gap-4 px-4 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-6 md:px-8 lg:py-20 wide:px-10">
          <div>
            <SectionLabel>Seasonal collections</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.5rem)] leading-none">Dress the weather.</h2>
          </div>
          <button
            type="button"
            onClick={() => go("category", { id: "seasonal" })}
            className="cursor-pointer text-[11px] uppercase tracking-[0.22em] hover:text-gold"
          >
            All seasons →
          </button>
        </div>
        <div className="grid w-full grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((season, index) => (
            <Reveal key={season.id} delay={index * 70}>
              <button
                type="button"
                onClick={() => go("season", { id: season.id })}
                className="group block w-full cursor-pointer bg-ivory text-left"
              >
                <div className="shine relative aspect-[3/4] overflow-hidden bg-sand">
                  <Cover
                    src={season.image}
                    alt={season.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-5 sm:px-5">
                  <h3 className="font-display text-4xl leading-none">{season.name}</h3>
                  <p className="mt-2 text-sm text-stone">{season.line}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-ink text-ivory">
        <div className="px-4 py-14 sm:px-6 md:px-8 lg:py-16 wide:px-10">
          <SectionLabel light>How it works</SectionLabel>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(2.4rem,4vw,4.5rem)] leading-none">
            A brief in, a look out.
          </h2>
        </div>
        <div className="grid w-full border-t border-ivory/15 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 90}>
              <article className="border-b border-ivory/15 px-4 py-10 sm:px-6 md:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-14 lg:last:border-r-0 wide:px-12">
                <p className="font-display text-6xl text-gold-2">{step.n}</p>
                <h3 className="mt-6 font-display text-4xl leading-none">{step.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="px-4 py-10 sm:px-6 md:px-8 wide:px-10">
          <Button variant="light" onClick={() => go("stylist")} arrow>
            Open the atelier
          </Button>
        </div>
      </section>

      <section className="w-full bg-paper">
        <div className="px-4 py-14 sm:px-6 md:px-8 lg:py-20 wide:px-10">
          <SectionLabel>Begin here</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.4rem,4vw,4.5rem)] leading-[0.95]">
            Start with the occasion.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone sm:text-base">
            Choose where you are going. Aurelle will open a brief with that occasion already set.
          </p>
        </div>
        <div className="w-full border-t border-line">
          {occasions.map((occasion) => (
            <button
              key={occasion.id}
              type="button"
              onClick={() => go("stylist", { preset: { occasion: occasion.id } })}
              className="group flex w-full cursor-pointer items-center justify-between border-b border-line px-4 py-5 text-left transition duration-300 hover:bg-ivory sm:px-6 md:px-8 md:py-6 wide:px-10"
            >
              <span className="font-display text-4xl leading-none transition duration-300 group-hover:translate-x-2 group-hover:text-gold sm:text-5xl">
                {occasion.label}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone transition group-hover:text-ink">
                Style this →
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="relative min-h-[78vh] w-full overflow-hidden bg-ink">
        <Cover
          src={ctaImage}
          alt="A model walking in a tailored look"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/20" />
        <div className="relative flex min-h-[78vh] w-full items-end px-4 py-14 sm:px-6 md:px-8 wide:px-10">
          <Reveal>
            <SectionLabel light>Your next look</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.8rem)] font-medium leading-[0.92] text-ivory">
              Already waiting in the atelier.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="light" onClick={() => go("stylist")} arrow>
                Compose a look
              </Button>
              <Button variant="ghostLight" onClick={() => go("lookbook")} arrow>
                Browse the edit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
