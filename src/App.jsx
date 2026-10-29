import { useState } from "react"
import CategoryPage from "./components/CategoryPage"
import DetailPage from "./components/DetailPage"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import LookbookPage from "./components/LookbookPage"
import Navbar from "./components/Navbar"
import StylistPage from "./components/StylistPage"

export default function App() {
  const [route, setRoute] = useState({ page: "home" })

  const go = (page, extra = {}) => {
    setRoute({ page, ...extra })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const pageKey = `${route.page}-${route.id ?? ""}-${JSON.stringify(route.preset ?? {})}`

  return (
    <div className="min-h-screen w-full bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>
      <Navbar route={route} go={go} />
      <main id="content" className="w-full pt-16">
        <div key={pageKey} className="page-enter w-full">
          {route.page === "home" && <HomePage go={go} />}
          {route.page === "stylist" && <StylistPage go={go} preset={route.preset} />}
          {route.page === "category" && <CategoryPage go={go} categoryId={route.id} />}
          {route.page === "season" && <CategoryPage go={go} seasonId={route.id} />}
          {route.page === "detail" && <DetailPage go={go} outfitId={route.id} />}
          {route.page === "lookbook" && <LookbookPage go={go} />}
        </div>
      </main>
      <Footer go={go} />
    </div>
  )
}
