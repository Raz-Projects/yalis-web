import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "אדריכלים ומעצבים — YALIS STUDIO | For Architects & Designers",
  description:
    "שיתוף פעולה מקצועי עם YALIS STUDIO: מפרטים טכניים, מחירי מקצוענים, ציר זמן מהיר לפרויקטים.",
  openGraph: {
    title: "Architects & Designers — YALIS STUDIO",
    images: [{ url: "/brand-board.jpeg" }],
  },
}

export default function ArchitectsPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">

        {/* ── Hero ── */}
        <section className="pt-36 pb-24 px-6 bg-onyx">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <p className="label-ys text-steel-light mb-4">FOR PROFESSIONALS</p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-concrete leading-tight max-w-3xl">
              אדריכלים<br />
              <em className="not-italic text-steel-light">&</em><br />
              מעצבים
            </h1>
            <div className="ys-divider mt-8 mb-6" />
            <p className="font-assistant text-base md:text-lg text-concrete/60 max-w-xl leading-relaxed">
              YALIS STUDIO עובד עם אדריכלים ומעצבי פנים על פרויקטי קצה-לקצה.
              אנחנו מספקים מפרטים טכניים, מחירי מקצוענים, ותיאום ישיר לפי לוח הזמנים של הפרויקט.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/972528448870?text=שלום, אני אדריכל/מעצבת ומעוניין/ת לדון בשיתוף פעולה"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-solid px-8 py-4 text-sm"
              >
                דברו איתנו
              </a>
              <a
                href="mailto:yalistudio1@gmail.com?subject=שיתוף פעולה מקצועי — YALIS STUDIO"
                className="btn-ys-outline px-8 py-4 text-sm text-center"
              >
                שלחו מייל מקצועי
              </a>
            </div>
          </div>
        </section>

        {/* ── Panel strip ── */}
        <div className="grid grid-cols-4">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className="relative h-32 md:h-48 overflow-hidden">
              <Image src={`/panel-${n}.jpeg`} alt="" fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-onyx/30" />
            </div>
          ))}
        </div>

        {/* ── What we offer ── */}
        <section className="py-20 px-6 bg-onyx">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">WHAT WE OFFER</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">מה אנחנו מציעים</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📐",
                  title: "מפרטים טכניים",
                  body: "עלינו לספק שרטוטי מידות מדויקים, רשימת חומרים, קודי RAL לגימורים, ומפרט ריתוך — עבור כל פרויקט.",
                },
                {
                  icon: "💼",
                  title: "מחירי Trade",
                  body: "מעצבים ואדריכלים שעובדים איתנו בקביעות מקבלים מחירי מקצוענים. פנו אלינו לפרטים.",
                },
                {
                  icon: "⏱",
                  title: "לוח זמנים מקצועי",
                  body: "אנחנו מבינים שפרויקטים עובדים לפי לוח זמנים. אנחנו מציינים תאריך מסירה ועומדים בו.",
                },
                {
                  icon: "🔩",
                  title: "פתרונות מותאמים",
                  body: "יש לך חלל מאתגר? מידות לא-סטנדרטיות? זה בדיוק מה שאנחנו אוהבים. שלח/י ואנחנו נמצא פתרון.",
                },
                {
                  icon: "📦",
                  title: "תיאום הרכבה",
                  body: "אנחנו מתאמים משלוח עם שטח הפרויקט ויכולים להגיע גם למיקומים מחוץ לאזור הנגב.",
                },
                {
                  icon: "📸",
                  title: "תיעוד לפורטפוליו",
                  body: "לאחר ההתקנה — נשמח לבצע צילום מקצועי של הפרויקט שיוכל לשמש גם אתכם.",
                },
              ].map(item => (
                <div key={item.title} className="border border-white/8 rounded-2xl p-6 space-y-3 hover:border-steel/30 transition-colors">
                  <p className="text-2xl">{item.icon}</p>
                  <h3 className="font-cormorant text-xl font-light text-concrete">{item.title}</h3>
                  <p className="font-assistant text-sm text-concrete/55 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technical specs ── */}
        <section className="py-20 px-6 bg-onyx-dark border-y border-white/8">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">TECHNICAL</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">מפרט טכני כללי</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full font-assistant text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/15">
                    <th className="text-right py-3 px-4 text-concrete/50 font-normal label-ys text-[10px]">פרמטר</th>
                    <th className="text-right py-3 px-4 text-concrete/50 font-normal label-ys text-[10px]">קולקציית 5mm</th>
                    <th className="text-right py-3 px-4 text-concrete/50 font-normal label-ys text-[10px]">קולקציית 3mm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["עובי פלדה", "5 מ\"מ", "3 מ\"מ"],
                    ["סוג חומר", "נירוסטה AISI 304", "נירוסטה AISI 304"],
                    ["גימור ברירת מחדל", "מוברש (hairline 180-grit)", "מוברש (hairline 180-grit)"],
                    ["גימורים נוספים", "שחור מט, ציפוי אבקה RAL", "שחור מט, ציפוי אבקה RAL"],
                    ["חיבורים", "ריתוך MIG/TIG, פינות מרוחקות", "ריתוך MIG/TIG"],
                    ["שינויי מידה", "עד ±50% מהמידה הסטנדרטית", "עד ±100% גמישות מלאה"],
                    ["זמן ייצור", "6–10 שבועות", "4–8 שבועות"],
                  ].map(([param, v5, v3]) => (
                    <tr key={param}>
                      <td className="py-3 px-4 text-concrete/60">{param}</td>
                      <td className="py-3 px-4 text-concrete">{v5}</td>
                      <td className="py-3 px-4 text-concrete">{v3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-assistant text-xs text-concrete/35 mt-6">
              * המפרט המלא ניתן לבקשה. קבצי DWG ו-PDF זמינים לפרויקטים בתיאום מראש.
            </p>
          </div>
        </section>

        {/* ── Downloads placeholder ── */}
        <section className="py-20 px-6 bg-onyx">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-12 space-y-3">
              <p className="label-ys text-steel-light">DOWNLOADS</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">קבצי עיצוב</h2>
              <p className="font-assistant text-sm text-concrete/50">
                קבצי DWG, PDF ומפרטים טכניים זמינים לפנייה ישירה.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { type: "PDF", title: "קטלוג מוצרים עם מידות", available: false },
                { type: "DWG", title: "קבצי AutoCAD לקולקציית 5mm", available: false },
                { type: "DWG", title: "קבצי AutoCAD לקולקציית 3mm", available: false },
              ].map(file => (
                <div
                  key={file.title}
                  className="border border-white/8 rounded-xl p-5 flex items-center gap-4 opacity-50"
                >
                  <div className="w-10 h-10 rounded-lg bg-steel/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-assistant text-xs font-bold text-steel">{file.type}</span>
                  </div>
                  <div>
                    <p className="font-assistant text-sm text-concrete">{file.title}</p>
                    <p className="font-assistant text-xs text-concrete/40">זמין לפנייה ישירה</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 bg-onyx-dark border-t border-white/8">
          <div className="max-w-2xl mx-auto text-center space-y-6" dir="rtl">
            <h2 className="font-cormorant text-4xl font-light text-concrete">
              יש לך פרויקט?
            </h2>
            <p className="font-assistant text-sm text-concrete/55">
              שלח/י לנו קצת פרטים על הפרויקט — ונחזור אליך תוך 24 שעות.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/972528448870?text=שלום, אני אדריכל/מעצבת ויש לי פרויקט לדון בו"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-solid px-8 py-4 text-sm"
              >
                WhatsApp — שלחו פרטים
              </a>
              <a
                href="mailto:yalistudio1@gmail.com?subject=פרויקט לשיתוף פעולה"
                className="btn-ys-outline px-8 py-4 text-sm text-center"
              >
                שלחו מייל
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
