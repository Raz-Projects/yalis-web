import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { formatPrice } from "@/lib/utils"

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
  const waMessage = `שלום, אני מעוניין/ת במוצר: ${product.nameHe}. אשמח לקבל פרטים נוספים ומחיר.`
  const waUrl = `https://wa.me/972528448870?text=${encodeURIComponent(waMessage)}`

  const { width, depth, height, note } = product.dimensions

  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-assistant text-xs text-concrete/40">
            <Link href="/" className="hover:text-concrete/70 transition-colors">בית</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-concrete/70 transition-colors">מוצרים</Link>
            <span>/</span>
            <span className="text-concrete/60">{product.nameHe}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5">
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.nameHe}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-concrete/20 font-assistant text-sm">אין תמונה</span>
                  </div>
                )}
              </div>

              {/* Thumbnail strip */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, i) => (
                    <div key={i} className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-white/5">
                      <Image
                        src={img}
                        alt={`${product.nameHe} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge-collection">{product.collection} Steel</span>
                  <span className="label-ys text-concrete/40">{product.categoryHe}</span>
                </div>
                <h1 className="font-cormorant text-3xl md:text-4xl font-light text-concrete leading-snug mb-2">
                  {product.nameHe}
                </h1>
                <p className="font-assistant text-sm text-steel italic">{product.taglineHe}</p>
              </div>

              <div className="ys-divider" />

              {/* Price */}
              <div>
                <p className="label-ys text-concrete/40 mb-1">מחיר</p>
                <p className="font-cormorant text-3xl text-steel">
                  {product.priceFrom > 0 ? `החל מ-${formatPrice(product.priceFrom)}` : "מחיר לפי פנייה"}
                </p>
                <p className="font-assistant text-xs text-concrete/40 mt-1">
                  המחיר הסופי נקבע לפי מידות ומפרט מדויקים
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="label-ys text-concrete/40 mb-2">תיאור</p>
                <p className="font-assistant text-sm text-concrete/70 leading-relaxed">
                  {product.descriptionHe}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="label-ys text-concrete/40 mb-2">חומר</p>
                  <p className="font-assistant text-sm text-concrete">{product.material}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="label-ys text-concrete/40 mb-2">מידות (ס"מ)</p>
                  <div className="font-assistant text-sm text-concrete space-y-0.5">
                    {width && <p>רוחב: {width}</p>}
                    {depth && <p>עומק: {depth}</p>}
                    {height && <p>גובה: {height}</p>}
                    {note && <p className="text-concrete/50 text-xs mt-1">{note}</p>}
                  </div>
                </div>
              </div>

              {product.customizable && (
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-steel" />
                  <p className="font-assistant text-xs text-concrete/50">מוצר זה ניתן להתאמה אישית</p>
                </div>
              )}

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <AddToCartButton product={product} />
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ys-outline w-full flex items-center justify-center gap-2 py-3.5"
                >
                  <WAIcon />
                  שלחו פנייה ישירה
                </a>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-24">
              <div className="mb-10">
                <p className="label-ys text-steel mb-3">אולי גם יעניין אותך</p>
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

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
