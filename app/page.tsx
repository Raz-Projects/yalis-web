import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FloatingWhatsApp } from "@/components/whatsapp-button"
import { NewsletterForm } from "@/components/newsletter-form"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: "YALIS STUDIO — Architectural Steel Furniture, Made in Israel",
  description:
    "Handcrafted stainless steel furniture for refined interiors. Chairs, tables, shelving, consoles and custom pieces. Designed and made in Omer, Israel.",
  openGraph: {
    title: "YALIS STUDIO — Architectural Steel Furniture",
    description: "Stainless steel objects for refined spaces. Handcrafted in Israel.",
    images: [{ url: "/brand-board.jpeg", width: 2752, height: 917 }],
  },
}

/* Show 8 products sorted by price high→low */
const bestsellers = [...products]
  .sort((a, b) => b.priceFrom - a.priceFrom)
  .slice(0, 8)

const testimonials = [
  {
    quote: "The quality is immediately apparent. The finishing on the stainless steel is exceptional — exactly what we needed for the project.",
    name: "Michal Cohen",
    title: "Interior Designer, Tel Aviv",
  },
  {
    quote: "Working with YALIS on a custom console for a villa project was seamless. Precise dimensions, delivered on time.",
    name: "Ariel Levy",
    title: "Architect, Jerusalem",
  },
  {
    quote: "I've ordered three pieces over two years. Each one is exactly as discussed. This is what artisan production should look like.",
    name: "Uri Shapira",
    title: "Private client, Herzliya",
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      {/* ══════════════════════════════════════════
          HERO — editorial, text-first
      ══════════════════════════════════════════ */}
      <section id="main-content" tabIndex={-1} className="pt-16 focus:outline-none">

        {/* Text block */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-20 pb-14 md:pt-28 md:pb-20">
          <div className="max-w-3xl">
            <p className="label-ys text-ink-subtle mb-6 animate-fade-up">
              YALIS STUDIO — Omer, Israel
            </p>
            <h1 className="font-cormorant text-display font-light text-ink leading-[1.02] tracking-[-0.02em] animate-fade-up delay-100">
              Stainless steel<br className="hidden md:block" />
              furniture for<br className="hidden md:block" />
              refined interiors
            </h1>
            <p className="font-assistant text-base text-ink-soft mt-7 max-w-lg leading-relaxed animate-fade-up delay-200">
              Sculptural objects crafted from real materials. Each piece is designed
              with precision, made by hand, and built to last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-9 animate-fade-up delay-300">
              <Link href="/products" className="btn-ys-solid">
                Shop Collection
              </Link>
              <Link href="/custom" className="btn-ys-outline">
                Custom Design
              </Link>
            </div>
          </div>
        </div>

        {/* Full-width image strip — the four panels */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className="relative h-52 sm:h-72 md:h-[420px] overflow-hidden">
              <Image
                src={`/panel-${n}.jpeg`}
                alt=""
                fill
                priority={n <= 2}
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND STATEMENT STRIP
      ══════════════════════════════════════════ */}
      <section className="border-y border-wire bg-pearl-warm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-wire">
            {[
              { en: "Precision",    he: "דיוק מוחלט",      body: "Every cut, weld, and finish is held to a zero-tolerance standard." },
              { en: "Handcrafted",  he: "עבודת יד",         body: "Each piece is made by a single artisan from start to finish." },
              { en: "Custom",       he: "מותאם אישית",       body: "No stock. Every piece is made to order, for your specific space." },
            ].map(v => (
              <div key={v.en} className="px-8 py-9 space-y-2">
                <div className="flex items-baseline gap-3">
                  <p className="font-cormorant text-lg font-light text-ink">{v.en}</p>
                  <p className="label-ys text-ink-subtle">{v.he}</p>
                </div>
                <p className="font-assistant text-xs text-ink-soft leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BESTSELLERS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">

          {/* Section header */}
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="label-ys text-ink-subtle mb-3">Bestsellers</p>
              <h2 className="font-cormorant text-display-sm font-light text-ink">
                The Collection
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 font-assistant text-xs text-ink-soft hover:text-ink transition-colors tracking-[0.1em] uppercase"
            >
              View all
              <span aria-hidden className="text-base font-light">→</span>
            </Link>
          </div>

          {/* 4-col product grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-16">
            {bestsellers.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 4} />
            ))}
          </div>

          <div className="mt-12 text-center lg:hidden">
            <Link href="/products" className="btn-ys-outline px-10">View all pieces</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MATERIAL SECTION — dark contrast
      ══════════════════════════════════════════ */}
      <section className="bg-ink text-pearl py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-7">
            <p className="label-ys text-iron">Materials</p>
            <h2 className="font-cormorant text-display-sm font-light leading-tight">
              Real materials.<br />No compromises.
            </h2>
            <p className="font-assistant text-sm text-iron-light leading-relaxed max-w-md">
              We work exclusively with AISI 304 stainless steel — the same grade used
              in architectural and commercial applications worldwide. Brushed, matte black,
              or powder-coated: every finish is applied with the same obsessive attention to detail.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "AISI 304 Stainless Steel",
                "Solid Oak",
                "Powder Coat (any RAL)",
                "Brushed Finish",
                "Matte Black",
              ].map(m => (
                <span
                  key={m}
                  className="font-assistant text-xs tracking-[0.1em] uppercase border border-iron/40 text-iron-light px-3 py-1.5"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["/products/p20.jpeg", "/products/p07.jpeg", "/products/p10.jpeg", "/products/p03.jpeg"].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-ink-mid">
                <Image src={src} alt="" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STUDIO STORY
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-pearl-warm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/brand-board.jpeg"
              alt="YALIS Studio — Omer, Israel"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="space-y-7" dir="rtl">
            <p className="label-ys text-ink-subtle">The Studio</p>
            <h2 className="font-cormorant text-display-sm font-light text-ink leading-tight">
              Designed with precision.<br />Made to last.
            </h2>
            <div className="w-8 h-px bg-ink opacity-20" />
            <p className="font-assistant text-sm text-ink-soft leading-relaxed">
              YALIS STUDIO was founded on the conviction that fine furniture doesn&apos;t need to come from Italy.
              We design and produce architectural steel pieces in Omer, Israel — with the same level of
              finish and precision expected from international luxury brands.
            </p>
            <p className="font-assistant text-sm text-ink-soft leading-relaxed">
              No assembly line. Every piece is made by one artisan, from raw sheet metal to finished object.
              The mark of the maker is in every detail.
            </p>
            <Link href="/about" className="btn-ys-outline inline-flex mt-2">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COLLECTIONS GRID
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-pearl">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-3">

            <Link href="/products?collection=5mm" className="group relative overflow-hidden aspect-[3/2]">
              <Image
                src="/products/p23.jpeg"
                alt="5mm Steel Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-colors duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-7 md:p-10">
                <p className="label-ys text-pearl/70 mb-2">Heavy Gauge</p>
                <h3 className="font-cormorant text-3xl md:text-4xl font-light text-pearl">
                  5mm Steel
                </h3>
                <p className="font-assistant text-xs text-pearl/60 mt-1 tracking-wide uppercase">
                  Tables · Chairs · Consoles
                </p>
              </div>
            </Link>

            <Link href="/products?collection=3mm" className="group relative overflow-hidden aspect-[3/2]">
              <Image
                src="/products/p31.jpeg"
                alt="3mm Steel Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-colors duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-7 md:p-10">
                <p className="label-ys text-pearl/70 mb-2">Light Gauge</p>
                <h3 className="font-cormorant text-3xl md:text-4xl font-light text-pearl">
                  3mm Steel
                </h3>
                <p className="font-assistant text-xs text-pearl/60 mt-1 tracking-wide uppercase">
                  Shelving · Lighting · Details
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CUSTOM WORK
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-y border-wire bg-pearl-warm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div className="space-y-7" dir="rtl">
            <p className="label-ys text-ink-subtle">Custom Work</p>
            <h2 className="font-cormorant text-display-sm font-light text-ink leading-tight">
              Minimal furniture.<br />Maximum presence.
            </h2>
            <p className="font-assistant text-sm text-ink-soft leading-relaxed">
              Don&apos;t see what you need? We produce custom stainless steel pieces for
              private clients, architects, and commercial spaces. Bring your dimensions,
              a sketch, or just an idea — we&apos;ll handle the rest.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { n: "4–10", label: "weeks lead time" },
                { n: "0mm",  label: "tolerance" },
                { n: "∞",    label: "custom options" },
                { n: "100%", label: "handmade" },
              ].map(s => (
                <div key={s.label} className="border-t border-wire pt-4">
                  <p className="font-cormorant text-2xl font-light text-ink">{s.n}</p>
                  <p className="font-assistant text-xs text-ink-subtle mt-0.5 uppercase tracking-[0.1em]">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/custom" className="btn-ys-solid">Request Custom Piece</Link>
              <a
                href="https://wa.me/972528448870?text=Hello, I'm interested in a custom steel piece."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              "/products/p05.jpeg",
              "/products/p24.jpeg",
              "/products/p09.jpeg",
              "/products/p31.jpeg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-pearl">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <p className="label-ys text-ink-subtle text-center mb-10">Client Stories</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border-t border-wire pt-6 space-y-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} viewBox="0 0 10 10" width="10" height="10" fill="currentColor" className="text-ink-subtle">
                      <path d="M5 1l1.24 2.47L9 3.9l-2 1.94.47 2.75L5 7.19l-2.47 1.4.47-2.75-2-1.94 2.76-.43z" />
                    </svg>
                  ))}
                </div>
                <p className="font-cormorant text-lg font-light text-ink leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-assistant text-xs font-medium text-ink">{t.name}</p>
                  <p className="font-assistant text-xs text-ink-subtle">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ARCHITECTS / TRADE STRIP
      ══════════════════════════════════════════ */}
      <section className="border-y border-wire bg-pearl-warm py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="label-ys text-ink-subtle mb-2">For professionals</p>
            <h3 className="font-cormorant text-2xl md:text-3xl font-light text-ink">
              Architects &amp; interior designers
            </h3>
            <p className="font-assistant text-sm text-ink-soft mt-1">
              Technical specifications, trade pricing, and project coordination.
            </p>
          </div>
          <Link href="/architects" className="btn-ys-outline flex-shrink-0">
            Trade Enquiry →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-ink text-pearl">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-right" dir="rtl">
            <p className="label-ys text-iron">Studio Updates</p>
            <h2 className="font-cormorant text-3xl font-light">
              New pieces. New finishes. Studio news.
            </h2>
            <p className="font-assistant text-xs text-iron-light">
              No spam. Unsubscribe anytime.
            </p>
          </div>
          <div className="w-full md:w-auto md:min-w-[380px]">
            <NewsletterForm light />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-pearl text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-7">
          <p className="label-ys text-ink-subtle">Let&apos;s build something</p>
          <h2 className="font-cormorant text-display font-light text-ink leading-[1.0]">
            Have a project<br />in mind?
          </h2>
          <p className="font-assistant text-sm text-ink-soft max-w-sm mx-auto leading-relaxed">
            Free consultation. No commitment. Tell us what you&apos;re looking for
            and we&apos;ll find the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/972528448870?text=Hello, I'd like to discuss a furniture project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-solid inline-flex items-center gap-2"
            >
              <WAIcon />
              Start on WhatsApp
            </a>
            <Link href="/contact" className="btn-ys-outline">
              All contact options
            </Link>
          </div>
        </div>
      </section>

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
