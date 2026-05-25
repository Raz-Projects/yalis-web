"use client"

import { ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() => addItem(product)}
      className="btn-ys-solid w-full flex items-center justify-center gap-2 py-3.5"
    >
      <ShoppingBag size={16} />
      הוסף לעגלה
    </button>
  )
}
