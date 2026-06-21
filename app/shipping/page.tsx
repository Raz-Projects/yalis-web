import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "משלוחים וביטולים — YALIS STUDIO",
  description: "מדיניות המשלוחים, אזורי חלוקה ומחירים של YALIS STUDIO.",
}

const LAST_UPDATED = "יוני 2026"

const shippingZones = [
  {
    zone: "אזור באר שבע / עומר / רהט",
    distance: "עד 30 ק״מ",
    price: "₪250–400",
    notes: "משלוח ביתי + העלאה לקומה",
  },
  {
    zone: "אזור ערד / דימונה / נתיבות / אופקים",
    distance: "30–80 ק״מ",
    price: "₪350–500",
    notes: "משלוח ביתי + העלאה לקומה",
  },
  {
    zone: "אזור ירושלים / בית שמש / מודיעין",
    distance: "80–110 ק״מ",
    price: "₪450–650",
    notes: "משלוח ביתי + העלאה לקומה",
  },
  {
    zone: "גוש דן / תל אביב / ראשון לציון / פתח תקווה",
    distance: "100–130 ק״מ",
    price: "₪500–750",
    notes: "משלוח ביתי + העלאה לקומה",
  },
  {
    zone: "אזור השרון / נתניה / חדרה / כפר סבא",
    distance: "130–170 ק״מ",
    price: "₪600–850",
    notes: "משלוח ביתי + העלאה לקומה",
  },
  {
    zone: "חיפה / קריות / עכו / נהריה",
    distance: "170–210 ק״מ",
    price: "₪700–950",
    notes: "משלוח ביתי + העלאה לקומה",
  },
  {
    zone: "גליל / צפון הרחוק (טבריה, צפת, קרית שמונה)",
    distance: "210–280 ק״מ",
    price: "₪800–1,100",
    notes: "משלוח ביתי + העלאה לקומה",
  },
  {
    zone: "אילת",
    distance: "≈200 ק״מ דרומה",
    price: "₪650–950",
    notes: "זמן הגעה ארוך יותר, יתואם בנפרד",
  },
]

export default function ShippingPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main className="pt-36 pb-24 px-6 bg-onyx min-h-screen">
        <div className="max-w-3xl mx-auto space-y-10" dir="rtl">

          {/* Header */}
          <div className="space-y-3 border-b border-white/10 pb-8">
            <p className="label-ys text-steel">YALIS STUDIO</p>
            <h1 className="font-cormorant text-4xl md:text-5xl font-light text-concrete">משלוחים וביטולים</h1>
            <p className="font-assistant text-sm text-concrete/50">עודכן לאחרונה: {LAST_UPDATED}</p>
          </div>

          {/* Shipping intro */}
          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl font-light text-concrete border-b border-white/10 pb-2">
              מדיניות משלוחים
            </h2>
            <div className="font-assistant text-base text-concrete/70 leading-relaxed space-y-3">
              <p>
                YALIS STUDIO מספקת משלוחים לכלל הארץ. המשלוחים מתבצעים מבית הייצור שלנו בעומר, בחברת
                הובלה מקצועית הכוללת שני מוביליים ו-העלאה לקומה הרצויה (בכפוף לנגישות).
              </p>
              <p>
                מחירי המשלוח מוצגים כהערכה גסה ועשויים להשתנות בהתאם למשקל ומידות המוצר, קומה, נגישות,
                ומועד האספקה. המחיר המדויק ייקבע בתיאום אישי לפני אישור ההזמנה.
              </p>
              <p className="text-steel font-medium">
                * כל המחירים כוללים 2 מוביליים + פריקה + העלאה לקומה. אין תוספת על קומה עם מעלית.
                קומות גבוהות ללא מעלית — עשויה להיות תוספת של ₪50–150.
              </p>
            </div>
          </section>

          {/* Shipping zones table */}
          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl font-light text-concrete border-b border-white/10 pb-2">
              אזורי חלוקה ומחירים (הערכה)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full font-assistant text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-right">
                    <th className="py-3 pl-4 text-steel font-medium">אזור</th>
                    <th className="py-3 pl-4 text-steel font-medium">מרחק</th>
                    <th className="py-3 pl-4 text-steel font-medium">מחיר משוער</th>
                    <th className="py-3 text-steel font-medium">הערות</th>
                  </tr>
                </thead>
                <tbody>
                  {shippingZones.map((z, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="py-3 pl-4 text-concrete/80">{z.zone}</td>
                      <td className="py-3 pl-4 text-concrete/60">{z.distance}</td>
                      <td className="py-3 pl-4 text-steel font-medium">{z.price}</td>
                      <td className="py-3 text-concrete/50 text-xs">{z.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-assistant text-xs text-concrete/40">
              * המחירים הם הערכה בלבד. YALIS STUDIO אינה אחראית לסטיות מהמחיר המשוער.
              המחיר הסופי יאושר בכתב לפני ביצוע ההזמנה.
            </p>
          </section>

          {/* Delivery times */}
          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl font-light text-concrete border-b border-white/10 pb-2">
              זמני אספקה
            </h2>
            <div className="font-assistant text-base text-concrete/70 leading-relaxed space-y-3">
              <ul className="list-disc pr-5 space-y-2">
                <li>זמן ייצור: 4–10 שבועות ממועד אישור ההזמנה ותשלום המקדמה.</li>
                <li>תיאום מועד המשלוח ייעשה טלפונית/וואטסאפ שבוע לפני המסירה.</li>
                <li>יש להוודא נגישות לכתובת המסירה (חניה, מעלית, רוחב מדרגות).</li>
                <li>
                  לא הייתה נגישות במועד שתואם ולא הוזהרנו מראש — תחויב יציאה נוספת לפי
                  עלות המשלוח המקורית.
                </li>
              </ul>
            </div>
          </section>

          {/* Cancellations */}
          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl font-light text-concrete border-b border-white/10 pb-2">
              מדיניות ביטולים
            </h2>
            <div className="font-assistant text-base text-concrete/70 leading-relaxed space-y-4">
              <p>
                בהתאם לחוק הגנת הצרכן, התשמ"א-1981 ותקנותיו, להלן מדיניות הביטולים של YALIS STUDIO:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-concrete font-medium">ביטול לפני תחילת הייצור</p>
                <p>החזר מלא בניכוי דמי טיפול של 5% מסכום העסקה (לא יותר מ-₪200).</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-concrete font-medium">ביטול לאחר תחילת הייצור</p>
                <p>
                  מכיוון שהמוצרים מיוצרים בהתאמה אישית מלאה, לא ניתן לבטל הזמנה לאחר שהחל הייצור.
                  הלקוח יחויב בעלות החומרים והעבודה שהושקעו עד מועד הביטול.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                <p className="text-concrete font-medium">ביטול לאחר קבלת המוצר</p>
                <p>
                  בשל אופי המוצרים (ייצור אישי), לא חלה זכות ביטול לאחר קבלת המוצר, בהתאם לחריג
                  הקבוע בחוק הגנת הצרכן למוצרים שיוצרו בהתאמה אישית.
                </p>
                <p>
                  במקרה של פגם בייצור — ראה מדיניות האחריות ב
                  <a href="/terms" className="text-steel hover:text-concrete transition-colors mx-1">תקנון האתר</a>.
                </p>
              </div>

              <p className="text-xs text-concrete/40">
                לפנייה בנושא ביטולים: yalistudio1@gmail.com או WhatsApp 052-844-8870
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}
