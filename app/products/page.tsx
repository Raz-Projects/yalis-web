"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FloatingWhatsApp } from "@/components/whatsapp-button"
import { products } from "@/lib/products"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const collections = [
  { value: "all", label: "הכל" },
  { value: "5mm", label: "5mm Steel" },
  { value: "3mm", label: "3mm Steel" },
]

const categories = [
  { value: "all", label: "כל הקטגוריות" },
  { value: "chairs", label: "כיסאות" },
  { value: "tables", label: "שולחנות" },
  { value: "side-tables", label: "שולחן צד" },
  { value: "shelving", label: "מדפים" },
  { value: "kitchen", label: "מטבח" },
  { value: "lighting", label: "תאורה" },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCollection = searchParams.get("collection") ?? "all"

  const [activeCollection, setActiveCollection] = useState(initialCollection)
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCol = activeCollection === "all" || p.collection === activeCollection
      const matchCat = activeCategory === "all" || p.category === activeCategory
      return matchCol && matchCat
    })
  }, [activeCollection, activeCategory])

  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <div id="main-content" tabIndex={-1} className="pt-32 md:pt-40 pb-24 px-6 min-h-screen focus:outline-none">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="label-ys text-steel-light mb-3">YALIS</p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light text-concrete">המוצרים שלנו</h1>
          </div>

          {/* Filters */}
          <div className="mb-10 space-y-4">
            {/* Collection tabs */}
            <div className="flex gap-2 flex-wrap">
              {collections.map(c => (
                <button
                  key={c.value}
                  onClick={() => setActiveCollection(c.value)}
                  className={`px-5 py-2 rounded-full text-sm font-assistant font-medium transition-all border ${
                    activeCollection === c.value
                      ? "bg-concrete text-onyx border-concrete"
                      : "border-white/20 text-concrete/60 hover:border-white/40 hover:text-concrete"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Category tabs */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <button
                  key={c.value}
                  onClick={() => setActiveCategory(c.value)}
                  className={`px-4 py-1.5 rounded-full text-xs font-assistant transition-all border ${
                    activeCategory === c.value
                      ? "border-concrete/60 text-concrete"
                      : "border-white/10 text-concrete/50 hover:border-white/25 hover:text-concrete/80"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <p className="font-assistant text-xs text-concrete/50">
              {filtered.length} מוצרים
            </p>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8">
              {filtered.map((product, i) => (
                <ProductCard key={product.slug} product={product} priority={i < 4} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-assistant text-concrete/40">לא נמצאו מוצרים בסינון זה</p>
            </div>
          )}
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
