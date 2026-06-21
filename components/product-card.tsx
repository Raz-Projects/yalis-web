"use client"

import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="product-card group">
      <Link href={`/products/${product.slug}`} className="block">

        {/* Image container — portrait ratio, clean */}
        <div className="relative aspect-[4/5] overflow-hidden bg-pearl-warm">
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.nameHe}
              fill
              priority={priority}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="label-ys text-ink-subtle">No image</span>
            </div>
          )}

          {/* Collection pill — top left */}
          <span className="badge-collection absolute top-3 left-3">
            {product.collection} Steel
          </span>

          {product.isNew && (
            <span className="absolute top-3 right-3 bg-ink text-pearl text-[9px] font-assistant font-medium tracking-[0.15em] uppercase px-2 py-0.5">
              New
            </span>
          )}

          {/* Hover CTA */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-pearl/92 backdrop-blur-sm px-4 py-3 text-center">
              <span className="label-ys text-ink">View product</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="pt-3.5 space-y-1" dir="rtl">
          <h3 className="font-assistant text-sm font-medium text-ink leading-snug line-clamp-2">
            {product.nameHe}
          </h3>
          <p className="font-assistant text-xs text-ink-subtle">
            {product.material}
          </p>
          <p className="font-cormorant text-base text-ink-mid font-light pt-0.5">
            {product.priceFrom > 0
              ? `החל מ-${formatPrice(product.priceFrom)}`
              : "מחיר לפי פנייה"
            }
          </p>
        </div>
      </Link>
    </div>
  )
}
