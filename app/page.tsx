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
  title: "YALIS STUDIO — Architectural Steel Furniture | ריהוט נירוסטה יוקרתי",
  description:
    "Handcrafted architectural furniture in brushed stainless steel and solid wood. Designed and made in Israel. Custom pieces for residential, hospitality and commercial spaces.",
  openGraph: {
    title: "YALIS STUDIO — Architectural Steel Furniture",
    description: "Handcrafted architectural furniture in brushed stainless steel and solid wood. Made in Israel.",
    images: [{ url: "/brand-board.jpeg", width: 2752, height: 917 }],
  },
}

const featured = products.filter(p => p.priceFrom >= 2000).slice(0, 6)

const testimonials = [
  {
    quote: "YALIS הפכו את חלל הישיבות שלנו לחלל שאנשים רוצים לבלות בו. האיכות מורגשת בכל נגיעה.",
    name: "מיכל כהן",
    title: "מנהלת עיצוב, סטארטאפ בתל אביב",
  },
  {
    quote: "כמעצבת פנים, אני מחפשת ספקים שמבינים גמרים. YALIS הם בין הבודדים שנותנים מוצר שגמרו תואם לדרישת הפרויקט.",
    name: "דנה לוי",
    title: "מעצבת פנים, תל אביב",
  },
  {
    quote: "הקונסולה שהזמנתי עלתה בדיוק למפרט שנתתי. 10 שבועות מדויקים, אפס פשרות על האיכות.",
    name: "אורי שפירא",
    title: "לקוח פרטי, הרצליה פיתוח",
  },
]

const brandValues = [
  {
    title: "Precision",
    sub: "דיוק",
    body: "כל חיתוך, כל ריתוך, כל גימור — נמדד. הסטייה המקסימלית שלנו היא אפס.",
  },
  {
    title: "Craftsmanship",
    sub: "מלאכת יד",
    body: "כל פריט מיוצר ידנית על ידי אומן אחד, מהתחלה ועד הסוף. אין פס ייצור.",
  },
  {
    title: "Timeless",
    sub: "נצחי",
    body: "עיצוב שלא מנסה להיות טרנדי. מינימליזם אדריכלי שיתאים לחלל עוד עשרים שנה.",
  },
  {
    title: "Custom",
    sub: "על פי מידה",
    body: "אנחנו לא מייצרים מלאי. כל פריט מוזמן, מתוכנן, ומיוצר עבור הלקוח הספציפי.",
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        id="main-content"
        tabIndex={-1}
        className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden focus:outline-none"
      >
        <Image
          src="/brand-board.jpeg"
          alt="YALIS STUDIO — Architectural Steel Furniture"
          fill
          priority
          quality={90}
          className="object-cover object-center scale-[1.02]"
          sizes="100vw"
        />
        {/* Gradient overlay — dark at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-onyx/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6" dir="rtl">
          <div className="max-w-2xl space-y-6">
            <p className="label-ys text-steel-light tracking-[0.4em]">YALIS STUDIO</p>
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-offwhite leading-[1.05]">
              ריהוט<br />
              <em className="not-italic text-steel-light">אדריכלי</em><br />
              מנירוסטה
            </h1>
            <p className="font-assistant text-base md:text-lg text-concrete/75 leading-relaxed max-w-lg">
              עיצוב מינימליסטי. גמרים מדויקים. ייצור ישראלי בעבודת יד.
              כל פריט מותאם אישית — לחלל, לממדים, לחזון שלך.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/products" className="btn-ys-solid px-8 py-4 text-sm tracking-wide text-center">
                Explore Collection
              </Link>
              <Link href="/custom" className="btn-ys-outline px-8 py-4 text-sm tracking-wide text-center">
                Custom Design
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-16 bg-concrete/60 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND VALUES STRIP
      ══════════════════════════════════════════ */}
      <section className="border-y border-white/8 bg-onyx-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-white/8" dir="rtl">
          {brandValues.map(v => (
            <div key={v.title} className="px-6 py-8 md:py-10 space-y-1">
              <p className="font-cormorant text-lg font-light text-concrete">{v.title}</p>
              <p className="label-ys text-steel text-[10px]">{v.sub}</p>
              <p className="font-assistant text-xs text-concrete/50 leading-relaxed pt-1 hidden md:block">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED COLLECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-onyx">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14" dir="rtl">
            <div className="space-y-3">
              <p className="label-ys text-steel-light">THE COLLECTION</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-concrete">
                מוצרים נבחרים
              </h2>
            </div>
            <Link href="/products" className="btn-ys-ghost text-sm hidden md:inline-flex items-center gap-2">
              כל הקולקציה
              <span aria-hidden>←</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <ProductCard key={product.slug} product={product} priority={i < 3} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="btn-ys-outline px-8 py-3">כל הקולקציה</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PANEL STRIP
      ══════════════════════════════════════════ */}
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="relative h-44 sm:h-64 md:h-96 overflow-hidden">
            <Image
              src={`/panel-${n}.jpeg`}
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          ABOUT — BRAND STORY
      ══════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-36 px-6 bg-onyx">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center" dir="rtl">
          <div className="space-y-7">
            <p className="label-ys text-steel-light">THE STUDIO</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-concrete leading-snug">
              ריהוט שנבנה<br />להישאר
            </h2>
            <div className="ys-divider" />
            <p className="font-assistant text-base md:text-lg text-concrete/65 leading-relaxed">
              YALIS STUDIO נוסד מתוך אמונה שריהוט איכותי לא צריך להגיע מאיטליה.
              אנחנו מייצרים ריהוט אדריכלי מנירוסטה ועץ מלא בעומר, ישראל —
              עם אותה רמת גמר ודיוק שמצפים ממנה במותגי יוקרה בינלאומיים.
            </p>
            <p className="font-assistant text-base text-concrete/60 leading-relaxed">
              כל פריט מוזמן. כל פריט מותאם. כל פריט נושא את החתימה של האומן שיצר אותו.
            </p>
            <Link href="/about" className="btn-ys-outline inline-flex px-8 py-3 text-sm">
              הסיפור שלנו
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white/5">
              <Image src="/products/p05.jpeg" alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                <Image src="/products/p12.jpeg" alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                <Image src="/products/p18.jpeg" alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CUSTOM MADE
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-onyx-dark border-y border-white/8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center" dir="rtl">
          <div className="space-y-6">
            <p className="label-ys text-steel-light">CUSTOM MADE</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-concrete leading-snug">
              כל מוצר —<br />לפי המידות שלך
            </h2>
            <div className="ys-divider" />
            <p className="font-assistant text-base text-concrete/65 leading-relaxed">
              אין קטלוג שמגביל אותך. תביא מידות, שרטוט, תמונה, או רעיון — ואנחנו נתרגם
              אותו לפריט שיתאים בדיוק לחלל ולאסתטיקה שלך.
            </p>
            <ul className="space-y-3 font-assistant text-sm text-concrete/60" dir="rtl">
              {[
                "גדלים ומידות על פי דרישה",
                "גמרים: מוברש, מט, בציפוי אבקה",
                "שילוב חומרים: נירוסטה + עץ מלא",
                "ייצור מקומי, זמן מסירה 4–10 שבועות",
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-steel flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/custom" className="btn-ys-solid px-8 py-3.5 text-sm text-center">
                התחל פרויקט Custom
              </Link>
              <a
                href="https://wa.me/972528448870?text=שלום, אני מעוניין/ת בריהוט מותאם אישית"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-outline px-8 py-3.5 text-sm text-center"
              >
                שיחת ייעוץ ב-WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["/products/p05.jpeg", "/products/p24.jpeg", "/products/p09.jpeg", "/products/p31.jpeg"].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-white/5">
                <Image src={src} alt="" fill className="object-cover img-zoom" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COLLECTIONS GRID
      ══════════════════════════════════════════ */}
      <section id="collections" className="py-20 md:py-28 px-6 bg-onyx">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3" dir="rtl">
            <p className="label-ys text-steel-light">COLLECTIONS</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-concrete">הקולקציות</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/products?collection=5mm" className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
              <Image src="/products/p20.jpeg" alt="קולקציית 5mm Steel" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8" dir="rtl">
                <p className="label-ys text-steel-light mb-2">Heavy Gauge</p>
                <h3 className="font-cormorant text-3xl font-light text-concrete">5mm Steel</h3>
                <p className="font-assistant text-sm text-concrete/55 mt-1">שולחנות, כיסאות, קונסולות, ספסלים</p>
                <p className="steel-underline mt-5 text-sm text-concrete/65 group-hover:text-concrete transition-colors">
                  גלה את הקולקציה ←
                </p>
              </div>
            </Link>
            <Link href="/products?collection=3mm" className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
              <Image src="/products/p31.jpeg" alt="קולקציית 3mm Steel" fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8" dir="rtl">
                <p className="label-ys text-steel-light mb-2">Light Gauge</p>
                <h3 className="font-cormorant text-3xl font-light text-concrete">3mm Steel</h3>
                <p className="font-assistant text-sm text-concrete/55 mt-1">מדפים, תאורה, מסגרות, פרטים</p>
                <p className="steel-underline mt-5 text-sm text-concrete/65 group-hover:text-concrete transition-colors">
                  גלה את הקולקציה ←
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-onyx-dark border-y border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3" dir="rtl">
            <p className="label-ys text-steel-light">CLIENT STORIES</p>
            <h2 className="font-cormorant text-4xl font-light text-concrete">מה אומרים הלקוחות</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8" dir="rtl">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-8 space-y-5 hover:border-steel/30 transition-colors">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} viewBox="0 0 12 12" width="12" height="12" fill="currentColor" className="text-steel">
                      <path d="M6 1l1.545 3.09L11 4.635l-2.5 2.43.59 3.435L6 8.91l-3.09 1.59L3.5 7.065 1 4.635l3.455-.545z" />
                    </svg>
                  ))}
                </div>
                <p className="font-assistant text-base text-concrete/70 leading-relaxed">"{t.quote}"</p>
                <div className="border-t border-white/8 pt-4">
                  <p className="font-assistant text-sm font-medium text-concrete">{t.name}</p>
                  <p className="font-assistant text-xs text-steel">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ARCHITECTS STRIP
      ══════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-onyx">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 rounded-2xl px-8 py-8 md:py-10" dir="rtl">
            <div className="space-y-2 text-center md:text-right">
              <p className="label-ys text-steel-light">FOR PROFESSIONALS</p>
              <h3 className="font-cormorant text-2xl md:text-3xl font-light text-concrete">
                אדריכלים ומעצבים
              </h3>
              <p className="font-assistant text-sm text-concrete/55">
                מפרטים טכניים, קבצי DWG ושיתופי פעולה לפרויקטים גדולים
              </p>
            </div>
            <Link href="/architects" className="btn-ys-outline whitespace-nowrap px-8 py-3 text-sm flex-shrink-0">
              לעמוד המקצועי ←
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-onyx-dark border-t border-white/8">
        <div className="max-w-lg mx-auto text-center space-y-6" dir="rtl">
          <p className="label-ys text-steel-light">STUDIO UPDATES</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-concrete">
            הצטרפו לרשימת הסטודיו
          </h2>
          <p className="font-assistant text-sm text-concrete/55">
            עדכונים על קולקציות חדשות, פרויקטים, ומבצעים — ישירות לתיבת הדואר שלך.
          </p>
          <NewsletterForm />
          <p className="font-assistant text-xs text-concrete/30">
            אין ספאם. ניתן לבטל בכל עת.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-28 md:py-40 px-6 bg-onyx border-t border-white/8">
        <div className="max-w-3xl mx-auto text-center space-y-7" dir="rtl">
          <p className="label-ys text-steel-light">LET'S BUILD</p>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-concrete leading-tight">
            יש לכם<br />
            <em className="not-italic text-steel-light">רעיון?</em>
          </h2>
          <p className="font-assistant text-base md:text-lg text-concrete/60 max-w-lg mx-auto leading-relaxed">
            פנו אלינו לייעוץ חינם. נבין מה אתם צריכים, נציע פתרון, ונתחיל לבנות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/972528448870?text=שלום, אני מעוניין/ת לדבר על פרויקט ריהוט"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-solid inline-flex items-center gap-2 px-10 py-4 text-base"
            >
              <WAIcon />
              שלחו הודעה ב-WhatsApp
            </a>
            <Link href="/contact" className="btn-ys-outline px-10 py-4 text-base">
              כל דרכי יצירת קשר
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
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
