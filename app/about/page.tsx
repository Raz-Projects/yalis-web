import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "אודות YALIS STUDIO — הסיפור שלנו",
  description:
    "YALIS STUDIO מייצר ריהוט אדריכלי מנירוסטה ועץ בעומר, ישראל. כל פריט עבודת יד, מידות מדויקות, גמרים בלתי מתפשרים.",
  openGraph: {
    title: "אודות YALIS STUDIO",
    images: [{ url: "/brand-board.jpeg" }],
  },
}

const process = [
  {
    step: "01",
    title: "פגישת עיצוב",
    body: "שיחה (WhatsApp / טלפון / סטודיו) כדי להבין את הצרכים, המידות, החלל והאסתטיקה. אנחנו לא מוכרים מוצרים — אנחנו פותרים בעיות עיצוב.",
  },
  {
    step: "02",
    title: "הצעת מחיר ושרטוט",
    body: "לאחר הבנת הפרויקט, שולחים הצעת מחיר מפורטת. אם יידרש — שרטוט ראשוני ל-verification של המידות.",
  },
  {
    step: "03",
    title: "ייצור",
    body: "כל פריט מיוצר ידנית על ידי אומן בודד: חיתוך, כיפוף, ריתוך, שיוף, גמר. זמן ייצור: 4–10 שבועות לפי מורכבות.",
  },
  {
    step: "04",
    title: "משלוח ומסירה",
    body: "אנחנו מתאמים משלוח עד הבית עם חברת הובלה מקצועית. הרכבה בסיסית כלולה. תיאום מועד גמיש.",
  },
]

const values = [
  {
    icon: "◻",
    title: "מינימליזם אדריכלי",
    body: "אנחנו מגיעים מתרבות עיצוב שמאמינה שפחות זה יותר. כל קו מוצדק, כל פרט עם סיבה.",
  },
  {
    icon: "◈",
    title: "חומרים אמיתיים",
    body: "נירוסטה, ברזל, עץ מלא. לא ציפויים, לא סימולציות. חומרים שמתיישנים בכבוד.",
  },
  {
    icon: "◎",
    title: "ייצור מקומי",
    body: "הייצור שלנו הוא בעומר, אזור הנגב. אנחנו גאים בייצור ישראלי ומשקיעים בקהילה המקומית.",
  },
  {
    icon: "◉",
    title: "שירות ישיר",
    body: "אתה מדבר ישירות עם האומן. לא עם סוכן. לא עם נציג מכירות. עם האדם שיבנה את הריהוט שלך.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">

        {/* ── Hero ── */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end pb-20">
          <Image
            src="/brand-board.jpeg"
            alt="YALIS STUDIO Sudio"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full" dir="rtl">
            <p className="label-ys text-steel-light mb-3">THE STUDIO</p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-concrete">הסיפור שלנו</h1>
          </div>
        </section>

        {/* ── Brand Story ── */}
        <section className="py-24 px-6 bg-onyx">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center" dir="rtl">
            <div className="space-y-6">
              <h2 className="font-cormorant text-4xl font-light text-concrete leading-snug">
                ריהוט שנבנה<br />להישאר
              </h2>
              <div className="ys-divider" />
              <p className="font-assistant text-base text-concrete/65 leading-relaxed">
                YALIS STUDIO נוסד מתוך אמונה פשוטה: ריהוט איכותי לא חייב לבוא מאיטליה.
                ניתן לייצר בישראל, בסטנדרטים בינלאומיים, עם אותה רמת גמר ודיוק.
              </p>
              <p className="font-assistant text-base text-concrete/65 leading-relaxed">
                אנחנו מתמחים בנירוסטה — חומר שהוא בו-זמנית עמיד, יפה ומאתגר לעיבוד.
                הגמרים שלנו (מוברש, שחור מט, ציפוי אבקה) דורשים ידע, ציוד ומיומנות שרכשנו
                לאורך שנים של עבודה.
              </p>
              <p className="font-assistant text-base text-concrete/65 leading-relaxed">
                כל פריט שיוצא מהסטודיו שלנו נושא את ה-DNA של YALIS: קווים נקיים,
                גמרים בלתי מתפשרים, ויחס ישיר עם הלקוח.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5">
              <Image
                src="/products/p05.jpeg"
                alt="YALIS Studio workshop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── Why Steel ── */}
        <section className="py-20 px-6 bg-onyx-dark border-y border-white/8">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">WHY STEEL</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">למה נירוסטה?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "עמידות מוחלטת",
                  body: "נירוסטה לא מתחמצנת, לא מתקלפת, לא דורשת טיפול שנתי. היא מיועדת לעמוד עשרות שנים ללא פגיעה בגמר.",
                },
                {
                  title: "גמישות עיצובית",
                  body: "אפשר לכופף, לחתוך, לריתך, לשלב עם עץ, זכוכית, בטון. זהו החומר הפלסטי ביותר לעיצוב.",
                },
                {
                  title: "נוכחות חזקה",
                  body: "לנירוסטה יש משקל ויזואלי. היא לא עומדת בצד — היא מדברת. הנוכחות שלה בחלל משנה את כל הסביבה.",
                },
              ].map(item => (
                <div key={item.title} className="space-y-3">
                  <div className="w-8 h-px bg-steel" />
                  <h3 className="font-cormorant text-2xl font-light text-concrete">{item.title}</h3>
                  <p className="font-assistant text-sm text-concrete/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-24 px-6 bg-onyx">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">THE PROCESS</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">איך זה עובד</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map(step => (
                <div key={step.step} className="space-y-4">
                  <p className="font-cormorant text-5xl font-light text-steel/30">{step.step}</p>
                  <h3 className="font-cormorant text-xl font-light text-concrete">{step.title}</h3>
                  <p className="font-assistant text-sm text-concrete/55 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 px-6 bg-onyx-dark border-t border-white/8">
          <div className="max-w-7xl mx-auto" dir="rtl">
            <div className="text-center mb-14 space-y-3">
              <p className="label-ys text-steel-light">OUR VALUES</p>
              <h2 className="font-cormorant text-4xl font-light text-concrete">מה מוביל אותנו</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(v => (
                <div key={v.title} className="border border-white/8 rounded-2xl p-6 space-y-3 hover:border-steel/30 transition-colors">
                  <p className="text-2xl text-steel">{v.icon}</p>
                  <h3 className="font-cormorant text-xl font-light text-concrete">{v.title}</h3>
                  <p className="font-assistant text-xs text-concrete/55 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 bg-onyx border-t border-white/8">
          <div className="max-w-2xl mx-auto text-center space-y-6" dir="rtl">
            <h2 className="font-cormorant text-4xl font-light text-concrete">
              בואו נבנה משהו יחד
            </h2>
            <p className="font-assistant text-sm text-concrete/55">
              פנו אלינו לשיחת ייעוץ חינם — ואנחנו נחזיר אתכם בהקדם.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/972528448870?text=שלום, רציתי לדעת יותר על YALIS STUDIO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-solid px-8 py-3.5 text-sm"
              >
                שלחו הודעה ב-WhatsApp
              </a>
              <Link href="/products" className="btn-ys-outline px-8 py-3.5 text-sm">
                לקולקציה
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
