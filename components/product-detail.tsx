"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"
import type { Product, FinishType } from "@/lib/products"
import { getDefaultCare, getDefaultDelivery } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

const finishLabels: Record<FinishType, string> = {
  "brushed":      "Brushed (Hairline 180-grit)",
  "matte-black":  "Matte Black",
  "powder-coat":  "Powder Coat (any RAL)",
  "mirror":       "Mirror Polish",
  "natural-wood": "Natural Oak",
  "dark-wood":    "Dark-stained Oak",
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-wire">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="font-assistant text-sm text-ink group-hover:text-ink-mid transition-colors">{title}</span>
        {open
          ? <ChevronUp size={13} className="text-ink-subtle flex-shrink-0" />
          : <ChevronDown size={13} className="text-ink-subtle flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 font-assistant text-sm text-ink-soft leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export function ProductDetail({ product }: { product: Product }) {
  const [mainImg, setMainImg] = useState(0)

  const waMessage = `Hello, I'm interested in: ${product.nameEn || product.nameHe}. I'd like details and a price.`
  const waUrl = `https://wa.me/972528448870?text=${encodeURIComponent(waMessage)}`
  const customWaMessage = `Hello, I'd like a custom version of: ${product.nameEn || product.nameHe}. Can we discuss dimensions and finish?`
  const customWaUrl = `https://wa.me/972528448870?text=${encodeURIComponent(customWaMessage)}`

  const { width, depth, height, note } = product.dimensions
  const delivery = product.deliveryWeeks ?? getDefaultDelivery()
  const care = product.careInstructions ?? getDefaultCare()
  const finishes = product.finish ?? (["brushed", "matte-black"] as FinishType[])

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">

      {/* ── Images ── */}
      <div className="space-y-3">
        {/* Main image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-pearl-warm group">
          {product.images[mainImg] ? (
            <Image
              src={product.images[mainImg]}
              alt={product.nameHe}
              fill
              priority
              className="object-cover transition-transform duration-600 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-pearl-warm">
              <span className="label-ys text-ink-subtle">No image</span>
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-ink text-pearl text-[9px] font-assistant font-medium tracking-[0.15em] uppercase px-2.5 py-1">
              New
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImg(i)}
                className={`relative flex-shrink-0 w-18 h-18 overflow-hidden transition-all ${
                  i === mainImg
                    ? "ring-1 ring-ink ring-offset-1 ring-offset-pearl"
                    : "opacity-50 hover:opacity-80"
                }`}
                style={{ width: 72, height: 72 }}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="72px" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Info ── */}
      <div className="space-y-8 lg:pt-2">

        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="badge-collection">{product.collection} Steel</span>
            <span className="label-ys text-ink-subtle">{product.categoryHe}</span>
          </div>
          <h1 className="font-cormorant text-3xl md:text-4xl font-light text-ink leading-[1.1]">
            {product.nameHe}
          </h1>
          {product.nameEn && (
            <p className="font-assistant text-xs text-ink-subtle tracking-wide">{product.nameEn}</p>
          )}
          <p className="font-assistant text-sm text-ink-soft italic">{product.taglineHe}</p>
        </div>

        {/* Price */}
        <div className="border-t border-b border-wire py-5">
          <p className="label-ys text-ink-subtle mb-1.5">Price</p>
          <p className="font-cormorant text-4xl font-light text-ink">
            {product.priceFrom > 0
              ? `Starting from ${formatPrice(product.priceFrom)}`
              : "Price on enquiry"
            }
          </p>
          <p className="font-assistant text-xs text-ink-subtle mt-1.5">
            Final price based on exact dimensions and specification
          </p>
        </div>

        {/* Description */}
        <p className="font-assistant text-sm text-ink-soft leading-relaxed">
          {product.descriptionHe}
        </p>

        {/* Specs table */}
        <table className="w-full text-sm font-assistant border-collapse">
          <tbody>
            {([
              ["Material",       product.material],
              ["Lead time",      `${delivery.min}–${delivery.max} weeks`],
              width  ? ["Width",  `${width} cm`]  : null,
              depth  ? ["Depth",  `${depth} cm`]  : null,
              height ? ["Height", `${height} cm`] : null,
              note   ? ["Note",   note]            : null,
              ["Finish options", finishes.map(f => finishLabels[f] ?? f).join(", ")],
            ] as ([string, string] | null)[]).filter((r): r is [string, string] => r !== null).map(([label, value]) => (
              <tr key={label} className="border-b border-wire/60">
                <td className="py-2.5 pr-6 text-ink-subtle w-1/3">{label}</td>
                <td className="py-2.5 text-ink">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CTAs */}
        <div className="space-y-2.5">
          <AddToCartButton product={product} />
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ys-outline w-full flex items-center justify-center gap-2 py-3"
          >
            <WAIcon />
            Enquire about this piece
          </a>
          {product.customizable && (
            <a
              href={customWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-ghost w-full flex items-center justify-center gap-2 py-3 text-ink-soft hover:text-ink"
            >
              Request custom dimensions
            </a>
          )}
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-3 gap-2 border-t border-wire pt-5">
          {[
            { label: "Made in Israel" },
            { label: "Handcrafted" },
            { label: "Custom available" },
          ].map(b => (
            <div key={b.label} className="text-center py-1">
              <p className="label-ys text-ink-subtle leading-relaxed">{b.label}</p>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="border-t border-wire">
          <AccordionItem title="Care &amp; maintenance">
            {care}
          </AccordionItem>
          <AccordionItem title="Shipping &amp; delivery">
            Coordinated home delivery throughout Israel.{" "}
            <Link href="/shipping" className="underline underline-offset-2 text-ink hover:text-ink-mid">
              View shipping costs →
            </Link>
          </AccordionItem>
          <AccordionItem title="Returns &amp; cancellations">
            Custom-made pieces cannot be cancelled once production has begun.{" "}
            <Link href="/terms" className="underline underline-offset-2 text-ink hover:text-ink-mid">
              Full terms →
            </Link>
          </AccordionItem>
          <AccordionItem title="Warranty">
            12-month warranty on all structural welds and finishes against manufacturing defects.
          </AccordionItem>
        </div>
      </div>
    </div>
  )
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
