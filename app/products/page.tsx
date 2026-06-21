"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import NextLink from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FloatingWhatsApp } from "@/components/whatsapp-button"
import { products } from "@/lib/products"
import { SlidersHorizontal, X } from "lucide-react"

const collectionFilters = [
  { value: "all", label: "All" },
  { value: "5mm", label: "5mm — Heavy" },
  { value: "3mm", label: "3mm — Light" },
]

const categoryFilters = [
  { value: "all",           label: "All categories" },
  { value: "chairs",        label: "Seating" },
  { value: "tables",        label: "Tables" },
  { value: "side-tables",   label: "Side Tables" },
  { value: "shelving",      label: "Shelving" },
  { value: "lighting",      label: "Lighting" },
  { value: "kitchen",       label: "Kitchen" },
]

const priceFilters = [
  { value: "all",   label: "All prices" },
  { value: "low",   label: "Up to ₪1,000" },
  { value: "mid",   label: "₪1,000 – ₪2,000" },
  { value: "high",  label: "₪2,000+" },
]

const sortOptions = [
  { value: "default",    label: "Featured" },
  { value: "price-asc",  label: "Price: low → high" },
  { value: "price-desc", label: "Price: high → low" },
]

function Pill({
  active, onClick, children,
}: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 text-[0.68rem] font-assistant font-medium tracking-[0.12em] uppercase transition-all whitespace-nowrap border ${
        active
          ? "bg-ink text-pearl border-ink"
          : "bg-transparent border-wire text-ink-soft hover:border-wire-strong hover:text-ink"
      }`}
    >
      {children}
    </button>
  )
}

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCollection = searchParams.get("collection") ?? "all"

  const [collection, setCollection] = useState(initialCollection)
  const [category,   setCategory]   = useState("all")
  const [price,      setPrice]      = useState("all")
  const [sort,       setSort]       = useState("default")
  const [mobileOpen, setMobileOpen] = useState(false)

  const activeCount = [collection !== "all", category !== "all", price !== "all"].filter(Boolean).length

  const filtered = useMemo(() => {
    let list = products.filter(p => {
      if (collection !== "all" && p.collection !== collection) return false
      if (category   !== "all" && p.category   !== category)   return false
      if (price === "low"  && p.priceFrom > 1000)  return false
      if (price === "mid"  && (p.priceFrom < 1000 || p.priceFrom > 2000)) return false
      if (price === "high" && p.priceFrom < 2000)  return false
      return true
    })
    if (sort === "price-asc")  list = [...list].sort((a, b) => a.priceFrom - b.priceFrom)
    if (sort === "price-desc") list = [...list].sort((a, b) => b.priceFrom - a.priceFrom)
    return list
  }, [collection, category, price, sort])

  const reset = () => { setCollection("all"); setCategory("all"); setPrice("all") }

  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <div id="main-content" tabIndex={-1} className="pt-28 md:pt-36 pb-24 focus:outline-none bg-pearl min-h-screen">

        {/* Page header */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-10">
          <p className="label-ys text-ink-subtle mb-4">YALIS STUDIO</p>
          <div className="flex items-end justify-between">
            <h1 className="font-cormorant text-5xl md:text-6xl font-light text-ink">
              The Collection
            </h1>
            <p className="hidden md:block font-assistant text-xs text-ink-subtle">
              {filtered.length} pieces
            </p>
          </div>
          <div className="ys-divider-full mt-6" />
        </div>

        {/* Filters */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-10">

          {/* Desktop */}
          <div className="hidden md:flex flex-wrap items-center gap-2.5">
            <div className="flex gap-2 pr-4 border-r border-wire">
              {collectionFilters.map(f => (
                <Pill key={f.value} active={collection === f.value} onClick={() => setCollection(f.value)}>
                  {f.label}
                </Pill>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pr-4 border-r border-wire">
              {categoryFilters.map(f => (
                <Pill key={f.value} active={category === f.value} onClick={() => setCategory(f.value)}>
                  {f.label}
                </Pill>
              ))}
            </div>
            <div className="flex gap-2">
              {priceFilters.map(f => (
                <Pill key={f.value} active={price === f.value} onClick={() => setPrice(f.value)}>
                  {f.label}
                </Pill>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-4">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="bg-transparent border border-wire text-ink-soft text-xs font-assistant px-3 py-1.5 focus:outline-none focus:border-ink-mid tracking-[0.06em]"
              >
                {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              {activeCount > 0 && (
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 text-xs font-assistant text-ink-soft hover:text-ink transition-colors tracking-[0.1em] uppercase"
                >
                  <X size={11} />
                  Clear ({activeCount})
                </button>
              )}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center justify-between">
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="flex items-center gap-2 text-xs font-assistant text-ink-soft border border-wire px-4 py-2 hover:border-ink-mid transition-colors"
            >
              <SlidersHorizontal size={13} />
              Filter {activeCount > 0 && `(${activeCount})`}
            </button>
            <p className="font-assistant text-xs text-ink-subtle">{filtered.length} pieces</p>
          </div>

          {mobileOpen && (
            <div className="md:hidden mt-4 p-5 bg-pearl-warm border border-wire space-y-5">
              <div className="space-y-2">
                <p className="label-ys text-ink-subtle">Collection</p>
                <div className="flex flex-wrap gap-2">
                  {collectionFilters.map(f => <Pill key={f.value} active={collection === f.value} onClick={() => setCollection(f.value)}>{f.label}</Pill>)}
                </div>
              </div>
              <div className="space-y-2">
                <p className="label-ys text-ink-subtle">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categoryFilters.map(f => <Pill key={f.value} active={category === f.value} onClick={() => setCategory(f.value)}>{f.label}</Pill>)}
                </div>
              </div>
              <div className="space-y-2">
                <p className="label-ys text-ink-subtle">Price</p>
                <div className="flex flex-wrap gap-2">
                  {priceFilters.map(f => <Pill key={f.value} active={price === f.value} onClick={() => setPrice(f.value)}>{f.label}</Pill>)}
                </div>
              </div>
              {activeCount > 0 && (
                <button onClick={reset} className="text-xs font-assistant text-ink-soft underline">Clear all</button>
              )}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-14 md:gap-y-18">
              {filtered.map((product, i) => (
                <ProductCard key={product.slug} product={product} priority={i < 4} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center space-y-4">
              <p className="font-cormorant text-2xl text-ink-subtle">No pieces match your selection</p>
              <button onClick={reset} className="btn-ys-ghost text-sm">Clear filters</button>
            </div>
          )}
        </div>

        {/* Custom CTA */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 mt-24">
          <div className="border border-wire bg-pearl-warm px-8 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right space-y-2" dir="rtl">
              <p className="label-ys text-ink-subtle">Didn&apos;t find what you&apos;re looking for?</p>
              <h3 className="font-cormorant text-2xl md:text-3xl font-light text-ink">
                We&apos;ll build a custom piece for your space
              </h3>
              <p className="font-assistant text-sm text-ink-soft">
                Free consultation. Your dimensions, your finish.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <NextLink href="/custom" className="btn-ys-solid">Custom Design</NextLink>
              <a
                href="https://wa.me/972528448870?text=Hello, I'm looking for a custom piece."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  )
}
