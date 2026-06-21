import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Custom Design — YALIS STUDIO | ריהוט מותאם אישית",
  description:
    "עיצוב וייצור ריהוט מנירוסטה לפי מידות ומפרט מותאם אישית. שלח מידות, רעיון או שרטוט ונצור אותו.",
  openGraph: {
    title: "Custom Design — YALIS STUDIO",
    images: [{ url: "/products/p05.jpeg" }],
  },
}

const faqs = [
  {
    q: "מה ניתן להתאים?",
    a: "מידות, גובה, עומק, צורת הרגליים, סוג הגמר (מוברש / שחור מט / ציפוי אבקה), שילוב עם עץ, מספר מדפים, כיוון הדלתות — ועוד.",
  },
  {
    q: "מה זמן הייצור?",
    a: "4–10 שבועות תלוי במורכבות הפרויקט. אנחנו מציינים זמן מדויק בהצעת המחיר.",
  },
  {
    q: "האם יש מינימום הזמנה?",
    a: "לא. אנחנו עובדים גם על פריט בודד. כל הזמנה מתקבלת בכבוד.",
  },
  {
    q: "מה אם אני לא יודע/ת בדיוק מה אני רוצה?",
    a: "זה בסדר גמור. שלח/י תמונות של חללים, השראות מהאינטרנט, או פשוט תאר/י את הצורך — ואנחנו נציע אפשרויות.",
  },
  {
    q: "כמה עולה Custom מוצר?",
    a: "המחיר תלוי בגודל, מורכבות החיתוך, הגמר ותוספות כמו עץ. הצעת מחיר ניתנת לאחר הבנת הפרויקט.",
  },
]

export default function CustomPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">

        {/* ── Hero ── */}
        <section className="pt-36 pb-20 px-6 bg-onyx">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center" dir="rtl">
            <div className="space-y-6">
              <p className="label-ys text-steel-light">CUSTOM DESIGN</p>
              <h1 className="font-cormorant text-5xl md:text-6xl font-light text-concrete leading-snug">
                ריהוט שנבנה<br />
                <em className="not-italic text-steel-light">בדיוק בשבילך</em>
              </h1>
              <div className="ys-divider" />
              <p className="font-assistant text-base text-concrete/65 leading-relaxed">
                אין קטלוג שמגביל אותך. אם יש לך מידות ספציפיות, חלל מאתגר, או פשוט רעיון — אנחנו נתרגם אותו לפריט נירוסטה בגמר מושלם.
              </p>
              <p className="font-assistant text-sm text-concrete/50 leading-relaxed">
                שלח/י הודעה ב-WhatsApp עם תיאור הרעיון, תמונת השראה, או מידות — ונחזור אליך עם הצעת מחיר תוך 24–48 שעות.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/972528448870?text=שלום, אני מעוניין/ת בריהוט מותאם אישית. הנה הרעיון שלי:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ys-solid px-8 py-4 text-sm"
                >
                  פתח שיחה ב-WhatsApp
                </a>
                <a href="mailto:yalistudio1@gmail.com" className="btn-ys-outline px-8 py-4 text-sm text-center">
                  שלח מייל עם פרטים
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["/products/p05.jpeg", "/products/p12.jpeg", "/products/p18.jpeg", "/products/p24.jpeg"].map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                  <Image src={src} alt="" fill className="object-cover img-zoom" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What can be customized ── */}
        <section className="py-20 px-6 bg-onyx-dark border-y border-white/8">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">WHAT&apos;S POSSIBLE</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">מה ניתן להתאים</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "מידות",
                  items: ["גובה", "רוחב", "עומק", "עובי הפלטה", "גודל מדפים"],
                },
                {
                  title: "גימורים",
                  items: ["נירוסטה מוברשת", "שחור מט", "ציפוי אבקה (כל RAL)", "מראה", "שילוב גימורים"],
                },
                {
                  title: "חומרים",
                  items: ["נירוסטה 3mm", "נירוסטה 5mm", "שילוב עץ אלון", "שילוב שיש", "לוח זכוכית"],
                },
              ].map(col => (
                <div key={col.title} className="border border-white/8 rounded-2xl p-6 space-y-4">
                  <h3 className="font-cormorant text-xl font-light text-concrete">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map(item => (
                      <li key={item} className="flex items-center gap-3 font-assistant text-sm text-concrete/60">
                        <span className="w-1 h-1 rounded-full bg-steel flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 px-6 bg-onyx">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">THE PROCESS</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">תהליך ה-Custom</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { n: "01", t: "פנייה", b: "שלח/י WhatsApp עם הרעיון, מידות, תמונה, או כל מה שיש לך. אין צורך בשרטוט מקצועי." },
                { n: "02", t: "ייעוץ", b: "שיחה (WhatsApp / טלפון) להבין את הצרכים. לפעמים נבקש תמונות של החלל." },
                { n: "03", t: "הצעת מחיר", b: "הצעה מפורטת עם מחיר, מידות מדויקות וזמן ייצור — תוך 24–48 שעות." },
                { n: "04", t: "ייצור ומסירה", b: "לאחר אישור — נתחיל לייצר. מסירה עד הבית עם תיאום מועד." },
              ].map(s => (
                <div key={s.n} className="space-y-3">
                  <p className="font-cormorant text-5xl font-light text-steel/25">{s.n}</p>
                  <h3 className="font-cormorant text-xl font-light text-concrete">{s.t}</h3>
                  <p className="font-assistant text-sm text-concrete/55 leading-relaxed">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-onyx-dark border-t border-white/8">
          <div className="max-w-3xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">FAQ</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">שאלות נפוצות</h2>
            </div>
            <div className="space-y-0 divide-y divide-white/8">
              {faqs.map(faq => (
                <div key={faq.q} className="py-6 space-y-2">
                  <h3 className="font-assistant text-sm font-semibold text-concrete">{faq.q}</h3>
                  <p className="font-assistant text-sm text-concrete/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 bg-onyx border-t border-white/8">
          <div className="max-w-2xl mx-auto text-center space-y-6" dir="rtl">
            <h2 className="font-cormorant text-4xl font-light text-concrete">
              מוכנים להתחיל?
            </h2>
            <p className="font-assistant text-sm text-concrete/55">
              שיחת ייעוץ ראשונה — חינם תמיד.
            </p>
            <a
              href="https://wa.me/972528448870?text=שלום, אני מעוניין/ת בריהוט Custom. הנה הרעיון:"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-solid inline-flex items-center gap-2 px-10 py-4 text-base"
            >
              <WAIcon />
              שלחו הודעה ב-WhatsApp
            </a>
          </div>
        </section>

      </main>

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
