import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { ProductDetail } from "@/components/product-detail"

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(slug, 3)

  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <div id="main-content" tabIndex={-1} className="pt-28 pb-20 px-6 focus:outline-none">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-assistant text-xs text-concrete/50" dir="rtl">
            <Link href="/" className="hover:text-concrete/70 transition-colors">בית</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-concrete/70 transition-colors">מוצרים</Link>
            <span>/</span>
            <span className="text-concrete/60">{product.nameHe}</span>
          </nav>

          <ProductDetail product={product} />

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-24">
              <div className="mb-10" dir="rtl">
                <p className="label-ys text-steel-light mb-3">אולי גם יעניין אותך</p>
                <h2 className="font-cormorant text-3xl font-light text-concrete">מוצרים קשורים</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map(p => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
