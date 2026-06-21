"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
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
  { value: "all",         label: "כל הקטגוריות" },
  { value: "chairs",      label: "כיסאות" },
  { value: "tables",      label: "שולחנות" },
  { value: "side-tables", label: "שולחנות צד" },
  { value: "shelving",    label: "מדפים ואחסון" },
  { value: "lighting",    label: "תאורה" },
  { value: "kitchen",     label: "מטבח" },
]

const priceFilters = [
  { value: "all",  label: "כל המחירים" },
  { value: "low",  label: "עד ₪1,000" },
  { value: "mid",  label: "₪1,000 – ₪2,000" },
  { value: "high", label: "מעל ₪2,000" },
]

const sortOptions = [
  { value: "default",    label: "מומלץ" },
  { value: "price-asc",  label: "מחיר: נמוך לגבוה" },
  { value: "price-desc", label: "מחיר: גבוה לנמוך" },
  { value: "name",       label: "לפי שם" },
]

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-assistant transition-all border whitespace-nowrap ${
        active
          ? "bg-concrete text-onyx border-concrete font-medium"
          : "border-white/15 text-concrete/55 hover:border-white/35 hover:text-concrete/80"
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
    if (sort === "name")       list = [...list].sort((a, b) => a.nameHe.localeCompare(b.nameHe, "he"))
    return list
  }, [collection, category, price, sort])

  const reset = () => {
    setCollection("all")
    setCategory("all")
    setPrice("all")
  }

  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <div id="main-content" tabIndex={-1} className="pt-32 md:pt-40 pb-24 focus:outline-none">

        {/* Page header */}
        <div className="px-6 max-w-7xl mx-auto mb-10" dir="rtl">
          <p className="label-ys text-steel-light mb-3">YALIS STUDIO</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-concrete">הקולקציה</h1>
          <p className="font-assistant text-sm text-concrete/50 mt-3">
            {filtered.length} פריטים · ריהוט אדריכלי מנירוסטה ועץ, ייצור ישראלי
          </p>
        </div>

        {/* Filters bar */}
        <div className="px-6 max-w-7xl mx-auto mb-10">

          {/* Desktop */}
          <div className="hidden md:flex flex-wrap items-center gap-3" dir="rtl">
            <div className="flex gap-2 border-r border-white/10 pl-3 ml-1">
              {collectionFilters.map(f => (
                <Chip key={f.value} active={collection === f.value} onClick={() => setCollection(f.value)}>
                  {f.label}
                </Chip>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 border-r border-white/10 pl-3 ml-1">
              {categoryFilters.map(f => (
                <Chip key={f.value} active={category === f.value} onClick={() => setCategory(f.value)}>
                  {f.label}
                </Chip>
              ))}
            </div>
            <div className="flex gap-2 border-r border-white/10 pl-3 ml-1">
              {priceFilters.map(f => (
                <Chip key={f.value} active={price === f.value} onClick={() => setPrice(f.value)}>
                  {f.label}
                </Chip>
              ))}
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="mr-auto bg-transparent border border-white/15 text-concrete/60 text-xs font-assistant rounded-full px-4 py-1.5 focus:outline-none focus:border-steel/40"
              dir="rtl"
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            {activeCount > 0 && (
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs font-assistant text-steel hover:text-concrete transition-colors"
              >
                <X size={12} />
                נקה ({activeCount})
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center justify-between">
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="flex items-center gap-2 text-sm font-assistant text-concrete/70 border border-white/15 rounded-full px-4 py-2"
            >
              <SlidersHorizontal size={14} />
              סינון {activeCount > 0 && `(${activeCount})`}
            </button>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-transparent border border-white/15 text-concrete/60 text-xs font-assistant rounded-full px-3 py-2 focus:outline-none"
              dir="rtl"
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {mobileOpen && (
            <div className="md:hidden mt-4 p-5 bg-onyx-dark border border-white/10 rounded-2xl space-y-5" dir="rtl">
              <div className="space-y-2">
                <p className="font-assistant text-xs text-steel">קולקציה</p>
                <div className="flex flex-wrap gap-2">
                  {collectionFilters.map(f => (
                    <Chip key={f.value} active={collection === f.value} onClick={() => setCollection(f.value)}>
                      {f.label}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-assistant text-xs text-steel">קטגוריה</p>
                <div className="flex flex-wrap gap-2">
                  {categoryFilters.map(f => (
                    <Chip key={f.value} active={category === f.value} onClick={() => setCategory(f.value)}>
                      {f.label}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-assistant text-xs text-steel">מחיר</p>
                <div className="flex flex-wrap gap-2">
                  {priceFilters.map(f => (
                    <Chip key={f.value} active={price === f.value} onClick={() => setPrice(f.value)}>
                      {f.label}
                    </Chip>
                  ))}
                </div>
              </div>
              {activeCount > 0 && (
                <button onClick={reset} className="text-xs font-assistant text-steel underline">נקה הכל</button>
              )}
            </div>
          )}
        </div>

        {/* Product grid */}
        <div className="px-6 max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
              {filtered.map((product, i) => (
                <ProductCard key={product.slug} product={product} priority={i < 4} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center space-y-4">
              <p className="font-cormorant text-2xl text-concrete/40">לא נמצאו פריטים</p>
              <button onClick={reset} className="btn-ys-ghost text-sm">הסר פילטרים</button>
            </div>
          )}
        </div>

        {/* Custom CTA */}
        <div className="px-6 max-w-7xl mx-auto mt-20">
          <div className="border border-white/10 rounded-2xl px-8 py-10 text-center space-y-4 bg-white/2" dir="rtl">
            <p className="label-ys text-steel-light">לא מצאת מה שחיפשת?</p>
            <h3 className="font-cormorant text-3xl font-light text-concrete">ניצור עבורך פריט מותאם אישית</h3>
            <p className="font-assistant text-sm text-concrete/55">מידות, גימורים וחומרים לפי בחירתך. שיחת ייעוץ חינם.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/972528448870?text=שלום, אני מחפש/ת פריט מותאם אישית"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-solid px-8 py-3 text-sm"
              >
                Custom Design ב-WhatsApp
              </a>
              <a href="/custom" className="btn-ys-outline px-8 py-3 text-sm">עמוד Custom Design</a>
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
