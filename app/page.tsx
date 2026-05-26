import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FloatingWhatsApp } from "@/components/whatsapp-button"
import { products } from "@/lib/products"

const featured = products.slice(0, 6)

// hero.jpeg = 493×1452 portrait, 4 equal panels.
// object-position values to centre each panel when the image is clipped:
// panel 1 (top 25%)    → 0%
// panel 2 (25–50%)     → 33%
// panel 3 (50–75%)     → 67%
// panel 4 (bottom 25%) → 100%
const PANEL = ["0%", "33%", "67%", "100%"] as const

function HeroPanel({
  panel,
  className = "",
}: {
  panel: 0 | 1 | 2 | 3
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/hero.jpeg"
        alt="YALIS"
        fill
        priority
        quality={100}
        className="object-cover"
        style={{ objectPosition: `50% ${PANEL[panel]}` }}
        sizes="(max-width: 768px) 100vw, 55vw"
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      {/* ══════════════════════════════════════
          HERO — bento grid  +  brand strip
          ══════════════════════════════════════ */}
      <section className="bg-black min-h-screen flex flex-col">

        {/* ── BENTO GRID ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-1.5 p-1.5 min-h-0">

          {/* ── MOBILE: panels 0 (dramatic), 2 (chair), 3 (steel texture) ── */}
          <HeroPanel panel={0} className="md:hidden aspect-[4/3]" />
          <HeroPanel panel={2} className="md:hidden aspect-[4/3]" />
          <HeroPanel panel={3} className="md:hidden aspect-[4/3]" />

          {/* ── DESKTOP LEFT column: panel 0 full height (dramatic light ray) ── */}
          <HeroPanel panel={0} className="hidden md:block" />

          {/* ── DESKTOP RIGHT column: chair (top) + panel 1 + panel 3 (bottom row) ── */}
          <div className="hidden md:grid grid-rows-[58fr_42fr] gap-1.5 min-h-0">
            <HeroPanel panel={2} />
            <div className="grid grid-cols-2 gap-1.5 min-h-0">
              <HeroPanel panel={1} />
              <HeroPanel panel={3} />
            </div>
          </div>
        </div>

        {/* ── BRAND STRIP — completely separate from images ── */}
        <div className="flex flex-col items-center justify-center gap-5 py-10 px-6 border-t border-white/[0.06]">

          {/* Logo */}
          <div className="w-48 md:w-56 lg:w-64 relative" style={{ aspectRatio: "1774 / 887" }}>
            <Image
              src="/logo-full.jpeg"
              alt="YALIS"
              fill
              priority
              quality={100}
              className="object-contain invert mix-blend-screen"
              sizes="256px"
            />
          </div>

          {/* STUDIO subtitle */}
          <p
            className="tracking-[0.5em] text-[#D6D3CE]/50 text-[10px] md:text-xs font-light -mt-2"
            style={{ fontFamily: "Assistant, sans-serif" }}
          >
            S T U D I O
          </p>

          {/* Divider */}
          <div className="w-10 h-px bg-steel/40" />

          {/* Tagline */}
          <p className="label-ys text-steel/70 tracking-[0.2em] text-center text-[10px] md:text-xs">
            ריהוט תעשייתי יוקרתי · ייצור ישראלי · עבודת יד
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-1">
            <Link href="/products" className="btn-ys-solid px-8 py-3 text-sm text-center">
              לצפייה במוצרים
            </Link>
            <a
              href="https://wa.me/972528448870"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-outline px-8 py-3 text-sm text-center"
            >
              פנו אלינו
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
          ══════════════════════════════════════ */}
      <section id="about" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="label-ys text-steel">YALIS — ייצור ישראלי</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-concrete leading-snug">
            ריהוט שנבנה להישאר
          </h2>
          <div className="ys-divider" />
          <p className="font-assistant text-base text-concrete/60 leading-relaxed max-w-2xl mx-auto">
            אנחנו מייצרים ריהוט מנירוסטה ועץ בעבודת יד, עם תשומת לב לכל פרט. כל מוצר מותאם אישית לפי הצרכים שלך — גודל, גימור, חומר. המחיר נקבע בשיחה ישירה, ואין פשרות על האיכות.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COLLECTIONS
          ══════════════════════════════════════ */}
      <section id="collections" className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/products?collection=5mm" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
              <Image src="/products/p20.jpeg" alt="קולקציית 5mm" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8">
                <p className="label-ys text-steel mb-2">קולקציה</p>
                <h3 className="font-cormorant text-3xl font-light text-concrete">5mm Steel</h3>
                <p className="font-assistant text-sm text-concrete/60 mt-1">שולחנות, כיסאות, קונסולות</p>
                <p className="steel-underline mt-4 text-sm text-concrete/70 group-hover:text-concrete transition-colors">לצפייה בקולקציה</p>
              </div>
            </Link>
            <Link href="/products?collection=3mm" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
              <Image src="/products/p31.jpeg" alt="קולקציית 3mm" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8">
                <p className="label-ys text-steel mb-2">קולקציה</p>
                <h3 className="font-cormorant text-3xl font-light text-concrete">3mm Steel</h3>
                <p className="font-assistant text-sm text-concrete/60 mt-1">מדפים, מנורות, מסגרות</p>
                <p className="steel-underline mt-4 text-sm text-concrete/70 group-hover:text-concrete transition-colors">לצפייה בקולקציה</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PRODUCTS
          ══════════════════════════════════════ */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="label-ys text-steel mb-3">מוצרים נבחרים</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">מהקולקציה</h2>
            </div>
            <Link href="/products" className="btn-ys-ghost text-sm hidden md:flex">כל המוצרים ←</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 3} />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="btn-ys-outline px-8 py-3">כל המוצרים</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
          ══════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="label-ys text-steel">התאמה אישית</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-concrete">
            יש לכם רעיון?<br />בואו נדבר.
          </h2>
          <p className="font-assistant text-base text-concrete/60 max-w-lg mx-auto">
            כל מוצר יכול להיות מותאם לגודל, לחומר ולגימור שאתם רוצים. פנו אלינו ישירות ונבנה ביחד.
          </p>
          <a href="https://wa.me/972528448870" target="_blank" rel="noopener noreferrer"
            className="btn-ys-solid inline-flex items-center gap-2 px-10 py-4 text-base">
            <WAIcon />
            שלחו הודעה ב-WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
