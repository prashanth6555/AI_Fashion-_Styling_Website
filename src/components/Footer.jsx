import { useState } from "react"
import { categories } from "../data/catalog"

export default function Footer({ go }) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [ok, setOk] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setOk(false)
      setMessage("Enter a valid email address.")
      return
    }
    setOk(true)
    setMessage("You are on the list. New edits, occasionally.")
    setEmail("")
  }

  return (
    <footer className="w-full bg-ink text-ivory">
      <div className="grid w-full gap-12 px-4 py-14 sm:px-6 md:grid-cols-12 md:px-8 md:py-16 wide:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-5xl leading-none">Aurelle</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">
            An AI atelier for getting dressed. Occasion, palette, and preference — returned as a finished look.
          </p>
          <form onSubmit={submit} className="mt-8 max-w-md" noValidate>
            <label htmlFor="atelier-email" className="text-[11px] uppercase tracking-[0.22em] text-gold-2">
              The list
            </label>
            <div className="mt-3 flex w-full flex-col gap-2 sm:flex-row">
              <input
                id="atelier-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setMessage("")
                }}
                placeholder="Email address"
                autoComplete="email"
                aria-invalid={Boolean(message) && !ok}
                className="min-h-12 w-full border border-ivory/25 bg-transparent px-4 text-sm text-ivory outline-none placeholder:text-ivory/40 focus:border-gold-2"
              />
              <button
                type="submit"
                className="min-h-12 cursor-pointer bg-ivory px-5 text-[11px] uppercase tracking-[0.2em] text-ink transition hover:bg-gold-2"
              >
                Join
              </button>
            </div>
            {message ? (
              <p role="alert" className={`mt-3 text-sm ${ok ? "text-gold-2" : "text-[#f0b4b4]"}`}>
                {message}
              </p>
            ) : null}
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold-2">Atelier</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <button type="button" onClick={() => go("home")} className="cursor-pointer text-ivory/80 hover:text-ivory">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go("stylist")} className="cursor-pointer text-ivory/80 hover:text-ivory">
                  Compose a look
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go("lookbook")} className="cursor-pointer text-ivory/80 hover:text-ivory">
                  The edit
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold-2">Wardrobes</p>
            <ul className="mt-4 space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => go("category", { id: category.id })}
                    className="cursor-pointer text-ivory/80 hover:text-ivory"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold-2">Visit</p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/75">
              Online atelier
              <br />
              Styled digitally.
              <br />
              Worn in the real world.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 border-t border-ivory/15 px-4 py-5 text-[11px] uppercase tracking-[0.18em] text-ivory/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8 wide:px-10">
        <p>© {new Date().getFullYear()} Aurelle</p>
        <p>Looks composed from the atelier library</p>
      </div>
    </footer>
  )
}
