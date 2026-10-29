import { useEffect, useState } from "react"
import { categories } from "../data/catalog"
import { Cover } from "./ui"

const links = [
  { id: "home", label: "Home" },
  { id: "lookbook", label: "The Edit" },
  { id: "stylist", label: "Atelier" },
]

export default function Navbar({ route, go }) {
  const [open, setOpen] = useState(false)
  const [catsOpen, setCatsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false)
        setCatsOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const visit = (page, extra) => {
    setOpen(false)
    setCatsOpen(false)
    go(page, extra)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-line/80 bg-ivory">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 md:px-8 wide:px-10">
        <button
          type="button"
          onClick={() => visit("home")}
          className="flex cursor-pointer items-center gap-3"
          aria-label="Aurelle home"
        >
          <span className="grid h-9 w-9 place-items-center border border-ink font-display text-lg leading-none">
            A
          </span>
          <span className="text-[13px] tracking-[0.34em]">AURELLE</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => visit(link.id)}
              className={`cursor-pointer text-[11px] uppercase tracking-[0.22em] transition hover:text-gold ${
                route.page === link.id ? "text-gold" : "text-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCatsOpen((value) => !value)}
            className={`cursor-pointer text-[11px] uppercase tracking-[0.22em] transition hover:text-gold ${
              route.page === "category" || route.page === "season" || catsOpen ? "text-gold" : "text-ink"
            }`}
            aria-expanded={catsOpen}
          >
            Categories
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => visit("stylist")}
            className="hidden min-h-11 cursor-pointer bg-ink px-5 text-[11px] uppercase tracking-[0.2em] text-ivory transition duration-300 hover:bg-gold md:inline-flex md:items-center"
          >
            Compose a look
          </button>
          <button
            type="button"
            className="grid h-11 w-11 cursor-pointer place-items-center border border-ink/20 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setCatsOpen(false)
              setOpen((value) => !value)
            }}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className={`h-px w-full bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {catsOpen ? (
        <div className="absolute inset-x-0 top-full hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-ivory shadow-[0_24px_50px_rgba(18,16,14,0.08)] md:block">
          <div className="grid w-full grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => visit("category", { id: category.id })}
                className="group cursor-pointer border-r border-line text-left last:border-r-0"
              >
                <div className="shine relative aspect-[4/5] overflow-hidden bg-sand">
                  <Cover
                    src={category.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="block px-4 py-4">
                  <span className="block font-display text-3xl leading-none">{category.name}</span>
                  <span className="mt-2 block text-xs leading-relaxed text-stone">{category.line}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ivory px-4 py-6 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => visit(link.id)}
                className="cursor-pointer border-b border-line py-4 text-left font-display text-5xl leading-none"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <p className="mb-3 mt-8 text-[11px] uppercase tracking-[0.24em] text-gold">Categories</p>
          <div className="grid grid-cols-2 gap-px bg-line">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => visit("category", { id: category.id })}
                className="cursor-pointer bg-ivory px-3 py-4 text-left font-display text-2xl"
              >
                {category.name}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => visit("stylist")}
            className="mt-6 min-h-12 w-full cursor-pointer bg-ink text-[11px] uppercase tracking-[0.22em] text-ivory"
          >
            Compose a look
          </button>
        </div>
      ) : null}

      {catsOpen ? (
        <button
          type="button"
          aria-label="Close categories"
          className="fixed inset-0 top-16 -z-10 hidden cursor-default md:block"
          onClick={() => setCatsOpen(false)}
        />
      ) : null}
    </header>
  )
}
