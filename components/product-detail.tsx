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
  "brushed":      "מוברש (Brushed)",
  "matte-black":  "שחור מט",
  "powder-coat":  "ציפוי אבקה",
  "mirror":       "מראה",
  "natural-wood": "עץ טבעי",
  "dark-wood":    "עץ כהה",
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-right gap-4"
      >
        <span className="font-assistant text-sm font-medium text-concrete/80">{title}</span>
        {open
          ? <ChevronUp size={14} className="text-steel flex-shrink-0" />
          : <ChevronDown size={14} className="text-concrete/40 flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 font-assistant text-sm text-concrete/60 leading-relaxed" dir="rtl">
          {children}
        </div>
      )}
    </div>
  )
}

interface Props {
  product: Product
}

export function ProductDetail({ product }: Props) {
  const [mainImg, setMainImg] = useState(0)

  const waMessage = `שלום, אני מעוניין/ת במוצר: ${product.nameHe}. אשמח לקבל פרטים נוספים ומחיר.`
  const waUrl = `https://wa.me/972528448870?text=${encodeURIComponent(waMessage)}`
  const customWaMessage = `שלום, אני מעוניין/ת בגרסה מותאמת אישית של: ${product.nameHe}. אשמח לדון במידות ומפרט.`
  const customWaUrl = `https://wa.me/972528448870?text=${encodeURIComponent(customWaMessage)}`

  const { width, depth, height, note } = product.dimensions
  const delivery = product.deliveryWeeks ?? getDefaultDelivery()
  const care = product.careInstructions ?? getDefaultCare()
  const finishes = product.finish ?? (["brushed", "matte-black"] as FinishType[])

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

      {/* ── Images ── */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 cursor-zoom-in group">
          {product.images[mainImg] ? (
            <Image
              src={product.images[mainImg]}
              alt={product.nameHe}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-concrete/20 font-assistant text-sm">אין תמונה</span>
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-4 right-4 bg-steel text-onyx text-[10px] font-bold font-assistant px-2.5 py-1 rounded-full tracking-wide">
              NEW
            </div>
          )}
        </div>

        {product.images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-1">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImg(i)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all ${
                  i === mainImg
                    ? "ring-2 ring-steel ring-offset-1 ring-offset-onyx"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Info ── */}
      <div className="space-y-7" dir="rtl">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="badge-collection">{product.collection} Steel</span>
            <span className="label-ys text-concrete/55">{product.categoryHe}</span>
          </div>
          <h1 className="font-cormorant text-3xl md:text-4xl font-light text-concrete leading-snug mb-2">
            {product.nameHe}
          </h1>
          <p className="font-assistant text-sm text-steel-light italic">{product.taglineHe}</p>
        </div>

        <div className="ys-divider" />

        {/* Price */}
        <div>
          <p className="label-ys text-concrete/55 mb-1">מחיר</p>
          <p className="font-cormorant text-4xl text-concrete">
            {product.priceFrom > 0
              ? `החל מ-${formatPrice(product.priceFrom)}`
              : "מחיר לפי פנייה"
            }
          </p>
          <p className="font-assistant text-xs text-concrete/50 mt-1">
            המחיר הסופי נקבע לפי מידות ומפרט מדויקים
          </p>
        </div>

        {/* Description */}
        <p className="font-assistant text-sm text-concrete/70 leading-relaxed">
          {product.descriptionHe}
        </p>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 rounded-xl p-4 space-y-1">
            <p className="label-ys text-concrete/40 text-[10px]">חומר</p>
            <p className="font-assistant text-sm text-concrete">{product.material}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 space-y-1">
            <p className="label-ys text-concrete/40 text-[10px]">זמן ייצור</p>
            <p className="font-assistant text-sm text-concrete">{delivery.min}–{delivery.max} שבועות</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 space-y-1">
            <p className="label-ys text-concrete/40 text-[10px]">מידות (ס"מ)</p>
            <div className="font-assistant text-sm text-concrete space-y-0.5">
              {width  && <span>{width}W </span>}
              {depth  && <span>{depth}D </span>}
              {height && <span>{height}H</span>}
              {note   && <p className="text-concrete/40 text-xs mt-0.5">{note}</p>}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 space-y-1">
            <p className="label-ys text-concrete/40 text-[10px]">גימורים זמינים</p>
            <div className="font-assistant text-xs text-concrete space-y-0.5">
              {finishes.map(f => (
                <p key={f}>{finishLabels[f] ?? f}</p>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-2.5 pt-1">
          <AddToCartButton product={product} />
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ys-outline w-full flex items-center justify-center gap-2 py-3.5 text-sm"
          >
            <WAIcon />
            שאל/י על מוצר זה
          </a>
          {product.customizable && (
            <a
              href={customWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-ghost w-full flex items-center justify-center gap-2 py-3 text-sm text-steel"
            >
              ✦ הזמינו גרסה מותאמת אישית
            </a>
          )}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/8">
          {[
            { icon: "🇮🇱", label: "ייצור ישראלי" },
            { icon: "✋", label: "עבודת יד" },
            { icon: "📐", label: "מותאם אישית" },
          ].map(b => (
            <div key={b.label} className="text-center space-y-1">
              <p className="text-lg">{b.icon}</p>
              <p className="font-assistant text-[10px] text-concrete/50">{b.label}</p>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="border-t border-white/8">
          <AccordionItem title="טיפול ותחזוקה">
            {care}
          </AccordionItem>
          <AccordionItem title="מדיניות משלוחים">
            משלוח מתואם עד הבית. עלות המשלוח תלויה במיקום —{" "}
            <Link href="/shipping" className="text-steel underline">
              ראה עמוד משלוחים
            </Link>{" "}
            לפרטים מלאים.
          </AccordionItem>
          <AccordionItem title="ביטולים ושינויים">
            מוצרים מותאמים אישית לא ניתנים לביטול לאחר תחילת הייצור. לפרטים מלאים ראה את{" "}
            <Link href="/terms" className="text-steel underline">התקנון</Link>.
          </AccordionItem>
        </div>
      </div>
    </div>
  )
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
