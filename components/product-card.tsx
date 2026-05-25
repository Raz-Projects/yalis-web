"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="product-card group relative">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-white/5">
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.nameHe}
              fill
              priority={priority}
              className="object-cover img-zoom"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-concrete/20 text-xs font-assistant">אין תמונה</span>
            </div>
          )}

          {/* Collection badge */}
          <span className="badge-collection absolute top-3 right-3">
            {product.collection === "5mm" ? "5mm Steel" : "3mm Steel"}
          </span>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
            <button
              onClick={e => { e.preventDefault(); addItem(product) }}
              className="btn-ys-solid w-full py-2.5 text-xs flex items-center justify-center gap-2"
            >
              <ShoppingBag size={14} />
              הוסף לעגלה
            </button>
          </div>
        </div>

        <div className="pt-4 space-y-1">
          <h3 className="font-assistant text-sm font-medium text-concrete leading-snug line-clamp-2">
            {product.nameHe}
          </h3>
          <p className="font-cormorant text-base text-steel">
            {product.priceFrom > 0 ? `החל מ-${formatPrice(product.priceFrom)}` : "מחיר לפי פנייה"}
          </p>
        </div>
      </Link>
    </div>
  )
}
