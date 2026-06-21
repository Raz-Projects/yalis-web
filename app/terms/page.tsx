import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "תקנון — YALIS STUDIO",
  description: "תקנון האתר ותנאי השימוש של YALIS STUDIO — ריהוט נירוסטה ועץ בעבודת יד.",
}

const OWNER = "רז שרור"
const ID = "208907352"
const EMAIL = "yalistudio1@gmail.com"
const PHONE = "052-844-8870"
const LAST_UPDATED = "יוני 2026"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main className="pt-36 pb-24 px-6 bg-onyx min-h-screen">
        <div className="max-w-3xl mx-auto space-y-10" dir="rtl">

          {/* Header */}
          <div className="space-y-3 border-b border-white/10 pb-8">
            <p className="label-ys text-steel">YALIS STUDIO</p>
            <h1 className="font-cormorant text-4xl md:text-5xl font-light text-concrete">תקנון האתר</h1>
            <p className="font-assistant text-sm text-concrete/50">עודכן לאחרונה: {LAST_UPDATED}</p>
          </div>

          <Section title="1. כללי">
            <p>
              ברוכים הבאים לאתר YALIS STUDIO (להלן: "האתר"). האתר מופעל על ידי {OWNER},
              ע.מ. {ID} (להלן: "YALIS" או "העסק"). השימוש באתר מהווה הסכמה לתנאי תקנון זה במלואם.
              הוראות תקנון זה גוברות על כל הסכמה אחרת, למעט הסכמה בכתב החתומה על ידי שני הצדדים.
            </p>
            <p>
              YALIS STUDIO מתמחה בייצור ריהוט מנירוסטה ועץ בעבודת יד, בהתאמה אישית. כל המוצרים מיוצרים
              בעומר, ישראל.
            </p>
          </Section>

          <Section title="2. הזמנת מוצרים">
            <p>
              הזמנת מוצרים מתבצעת באמצעות פנייה ישירה דרך WhatsApp או דואר אלקטרוני בלבד. אין רכישה
              מקוונת ישירה דרך האתר. האתר משמש לצורך הצגת המוצרים והמידע אודות העסק בלבד.
            </p>
            <p>הזמנה תיחשב מאושרת רק לאחר קבלת אישור בכתב מנציג YALIS וקבלת מקדמה כנדרש.</p>
          </Section>

          <Section title="3. מחירים ותשלום">
            <ul>
              <li>המחירים המוצגים באתר הם הערכה ראשונית בלבד ואינם מחייבים.</li>
              <li>המחיר הסופי נקבע לאחר שיחת ייעוץ אישית ובהתאם למפרט המדויק של המוצר.</li>
              <li>כל המחירים אינם כוללים מע"מ, אלא אם נאמר אחרת.</li>
              <li>תנאי התשלום יפורטו בהצעת המחיר הפרטנית.</li>
              <li>YALIS שומרת לעצמה את הזכות לשנות מחירים בכל עת, ללא הודעה מוקדמת.</li>
            </ul>
          </Section>

          <Section title="4. ייצור ואספקה">
            <ul>
              <li>כל המוצרים מיוצרים בעבודת יד לפי הזמנה ספציפית.</li>
              <li>זמן הייצור הוא 4–10 שבועות ממועד אישור ההזמנה ותשלום המקדמה.</li>
              <li>תאריך האספקה הוא הערכה בלבד ועשוי להשתנות בהתאם לעומס הייצור.</li>
              <li>YALIS תיידע את הלקוח על כל עיכוב משמעותי.</li>
            </ul>
          </Section>

          <Section title="5. ביטול עסקה">
            <p className="font-semibold text-concrete">ביטול על ידי הלקוח:</p>
            <ul>
              <li>
                בהתאם לחוק הגנת הצרכן, התשמ"א-1981 וחוק המכר (מכר טובין), ניתן לבטל עסקה בתוך
                14 יום ממועד קבלת המוצר, בכפוף לתנאים הבאים:
              </li>
              <li>מוצר שיוצר בהתאמה אישית (Custom Made) אינו ניתן לביטול לאחר תחילת הייצור.</li>
              <li>
                ניתן לבטל הזמנה לפני תחילת הייצור בהודעה בכתב; במקרה זה תוחזר המקדמה בניכוי
                דמי טיפול בשיעור של 5% מסכום העסקה.
              </li>
              <li>
                ביטול לאחר תחילת הייצור — לא יינתן החזר כספי, וסכום שהושקע עד מועד הביטול
                יחויב במלואו.
              </li>
            </ul>
            <p className="font-semibold text-concrete mt-4">ביטול על ידי YALIS:</p>
            <ul>
              <li>
                YALIS שומרת לעצמה את הזכות לבטל הזמנה עקב אי-אספקת חומרי גלם, כוח עליון, או
                בנסיבות חריגות. במקרה כזה יוחזר ללקוח מלוא הסכום ששולם.
              </li>
            </ul>
          </Section>

          <Section title="6. אחריות ותיקונים">
            <ul>
              <li>YALIS מעניקה אחריות למוצריה למשך 12 חודשים ממועד האספקה.</li>
              <li>האחריות מכסה פגמי ייצור בלבד, ואינה חלה על נזק שנגרם משימוש לא נכון, תאונה או בלאי רגיל.</li>
              <li>פנייה לאחריות תתבצע דרך WhatsApp או דואר אלקטרוני, עם צירוף תמונות ותיאור הפגם.</li>
            </ul>
          </Section>

          <Section title="7. קניין רוחני">
            <p>
              כל התכנים באתר, לרבות תמונות, טקסטים, עיצובים ולוגואים, הם רכושה הבלעדי של YALIS STUDIO.
              אין לעשות שימוש כלשהו בתכנים אלה ללא אישור מראש ובכתב.
            </p>
          </Section>

          <Section title="8. פרטיות">
            <p>
              השימוש במידע אישי שנמסר לנו כפוף ל
              <a href="/privacy" className="text-steel hover:text-concrete transition-colors mx-1">מדיניות הפרטיות</a>
              של YALIS STUDIO.
            </p>
          </Section>

          <Section title="9. שינויים בתקנון">
            <p>
              YALIS שומרת לעצמה את הזכות לשנות תקנון זה בכל עת. שינויים ייכנסו לתוקף עם פרסומם באתר.
              המשך שימוש באתר לאחר השינוי מהווה הסכמה לתנאים המעודכנים.
            </p>
          </Section>

          <Section title="10. יצירת קשר">
            <p>לכל שאלה או פנייה:</p>
            <ul>
              <li>דואר אלקטרוני: <a href={`mailto:${EMAIL}`} className="text-steel hover:text-concrete transition-colors">{EMAIL}</a></li>
              <li>WhatsApp / טלפון: <a href="https://wa.me/972528448870" className="text-steel hover:text-concrete transition-colors">{PHONE}</a></li>
            </ul>
          </Section>

        </div>
      </main>

      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-cormorant text-2xl font-light text-concrete border-b border-white/10 pb-2">{title}</h2>
      <div className="font-assistant text-base text-concrete/70 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pr-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  )
}
