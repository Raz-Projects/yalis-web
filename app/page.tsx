import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FloatingWhatsApp } from "@/components/whatsapp-button"
import { products } from "@/lib/products"

const featured = products.slice(0, 6)

export default function HomePage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      {/* ─── HERO — full-screen cover slide ─── */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background: the 4-panel cover image */}
        <Image
          src="/hero.jpeg"
          alt="YALIS Studio"
          fill
          priority
          quality={100}
          /*
            Desktop (landscape): image is portrait → object-contain centres it
            on black bg, giving the "slide" effect.
            Mobile (portrait): object-cover fills naturally.
          */
          className="
            hidden lg:block
            object-contain object-center
          "
          sizes="100vw"
        />
        {/* Mobile version: cover so it fills the portrait screen */}
        <Image
          src="/hero.jpeg"
          alt="YALIS Studio"
          fill
          priority
          quality={100}
          className="
            lg:hidden
            object-cover object-top
          "
          sizes="100vw"
        />

        {/* Dark vignette — heavier at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 lg:via-transparent lg:to-transparent" />
        {/* Desktop: side vignettes to frame the portrait image */}
        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,transparent_60%,black_100%)]" />

        {/* ── LOGO + CTA overlay — centred on slide ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-end lg:justify-center pb-16 lg:pb-0 px-6">

          {/* Logo */}
          <div className="w-64 md:w-80 lg:w-72 xl:w-80 mb-4 lg:mb-6 animate-fade-in">
            <div className="relative w-full" style={{ aspectRatio: "1774 / 887" }}>
              <Image
                src="/logo-full.jpeg"
                alt="YALIS"
                fill
                priority
                quality={100}
                className="object-contain invert mix-blend-screen"
                sizes="320px"
              />
            </div>
            <p className="text-center text-[#D6D3CE]/60 tracking-[0.45em] text-[10px] lg:text-xs mt-2 font-light"
              style={{ fontFamily: "Assistant, sans-serif" }}>
              S T U D I O
            </p>
          </div>

          {/* Thin rule */}
          <div className="w-12 h-px bg-steel/50 mb-6 lg:mb-8 animate-fade-in" style={{ animationDelay: "150ms" }} />

          {/* Tagline */}
          <p className="label-ys text-steel/80 tracking-[0.25em] text-center mb-8 lg:mb-10 animate-fade-in"
            style={{ animationDelay: "200ms" }}>
            ריהוט תעשייתי יוקרתי · ייצור ישראלי
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Link href="/products" className="btn-ys-solid px-10 py-3.5 text-sm text-center">
              לצפייה במוצרים
            </Link>
            <a
              href="https://wa.me/972528448870"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-outline px-10 py-3.5 text-sm text-center"
            >
              פנו אלינו
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-scroll opacity-40">
          <div className="w-px h-10 bg-concrete" />
        </div>
      </section>

      {/* ─── Brand statement ─── */}
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

      {/* ─── Collections ─── */}
      <section id="collections" className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/products?collection=5mm" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
              <Image src="/products/p07.jpeg" alt="קולקציית 5mm" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8">
                <p className="label-ys text-steel mb-2">קולקציה</p>
                <h3 className="font-cormorant text-3xl font-light text-concrete">5mm Steel</h3>
                <p className="font-assistant text-sm text-concrete/60 mt-1">שולחנות, כיסאות, קונסולות</p>
                <p className="steel-underline mt-4 text-sm text-concrete/70 group-hover:text-concrete transition-colors">לצפייה בקולקציה</p>
              </div>
            </Link>
            <Link href="/products?collection=3mm" className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
              <Image src="/products/p22.jpeg" alt="קולקציית 3mm" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
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

      {/* ─── Featured products ─── */}
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

      {/* ─── CTA ─── */}
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
