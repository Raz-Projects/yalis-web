import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "הצהרת נגישות — YALIS",
  description:
    "הצהרת הנגישות של YALIS STUDIO. האתר הונגש בהתאם לתקן הישראלי ת״י 5568 ברמת AA.",
}

// ── Update these before going live ──────────────────────────
const COORDINATOR_NAME = "[שם רכז/ת הנגישות]"
const COORDINATOR_EMAIL = "[כתובת אימייל ליצירת קשר]"
const PHONE_DISPLAY = "052-844-8870"
const PHONE_TEL = "+972528448870"
const LAST_UPDATED = "יוני 2026"
// ────────────────────────────────────────────────────────────

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main id="main-content" tabIndex={-1} className="pt-32 md:pt-40 pb-24 px-6 min-h-screen focus:outline-none">
        <div className="max-w-3xl mx-auto" dir="rtl">
          {/* Header */}
          <div className="mb-12">
            <p className="label-ys text-steel-light mb-3">YALIS</p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light text-concrete">
              הצהרת נגישות
            </h1>
          </div>

          <div className="space-y-12 font-assistant text-concrete/75 leading-relaxed">
            {/* Intro */}
            <section className="space-y-4">
              <p>
                ב־<span className="text-concrete">YALIS STUDIO</span> אנו רואים חשיבות רבה במתן שירות
                שוויוני לכלל הלקוחות, ופועלים להנגיש את אתר האינטרנט שלנו כך שיהיה זמין ונוח לשימוש גם
                עבור אנשים עם מוגבלות. אנו משקיעים מאמצים מתמשכים לשפר את נגישות האתר, מתוך אמונה
                שלכל אדם מגיעה הזכות לחיות בכבוד, בשוויון, בנוחות ובעצמאות.
              </p>
            </section>

            {/* Compliance level */}
            <Section title="רמת הנגישות באתר">
              <p>
                האתר הונגש בהתאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
                התשע״ג־2013, ובהתאם לתקן הישראלי <span className="text-concrete">ת״י 5568</span>{" "}
                המבוסס על הנחיות <span className="text-concrete">WCAG 2.1</span> של ארגון{" "}
                <span dir="ltr">W3C</span>, לרמת התאמה <span className="text-concrete">AA</span>.
              </p>
              <p>בין הפעולות שבוצעו להנגשת האתר:</p>
              <ul className="space-y-2 pr-5 list-disc marker:text-steel-light">
                <li>התאמת האתר לתפעול מלא באמצעות המקלדת (מקש Tab והחצים), ללא תלות בעכבר.</li>
                <li>תמיכה בתוכנות הקראת מסך, כולל טקסט חלופי לתמונות ולכפתורים.</li>
                <li>מבנה כותרות סמנטי, סימון שדות וקישורים, וניגודיות צבעים תקנית.</li>
                <li>תפריט נגישות ייעודי המאפשר התאמה אישית של חוויית הגלישה (ראו פירוט להלן).</li>
                <li>קישור ״דילוג לתוכן הראשי״ המופיע בעת ניווט במקלדת.</li>
              </ul>
            </Section>

            {/* Accessibility menu */}
            <Section title="תפריט הנגישות באתר">
              <p>
                בכל עמודי האתר מופיע לחצן נגישות קבוע בצד המסך (סמל{" "}
                <span aria-hidden="true">♿</span>). לחיצה עליו פותחת תפריט המאפשר להתאים את האתר
                לצרכים אישיים. ההגדרות נשמרות בדפדפן ונשארות פעילות גם בעמודים הבאים. בתפריט ניתן:
              </p>
              <ul className="space-y-2 pr-5 list-disc marker:text-steel-light">
                <li>להגדיל ולהקטין את גודל הטקסט.</li>
                <li>להפעיל מצב ניגודיות גבוהה או תצוגה בגווני אפור.</li>
                <li>להדגיש קישורים באתר.</li>
                <li>לעבור לגופן קריא יותר עם ריווח מוגדל.</li>
                <li>לעצור אנימציות ותנועה.</li>
                <li>להגדיל את סמן העכבר.</li>
                <li>לאפס את כל ההגדרות בלחיצה אחת.</li>
              </ul>
            </Section>

            {/* Known limitations */}
            <Section title="החרגות ומגבלות ידועות">
              <p>
                למרות מאמצינו להנגיש את כל הדפים והרכיבים באתר, ייתכן שחלקים מסוימים — ובכללם תכנים
                או תמונות שמקורם בצדדים שלישיים — טרם הונגשו במלואם. אנו ממשיכים לפעול לשיפור הנגישות
                באופן שוטף. אם נתקלתם בתוכן שאינו נגיש, נשמח שתפנו אלינו ונספק לכם את המידע הדרוש
                בדרך חלופית בהקדם.
              </p>
            </Section>

            {/* Contact / coordinator */}
            <Section title="פנייה בנושאי נגישות — רכז/ת הנגישות">
              <p>
                אם במהלך הגלישה נתקלתם בקושי או בתקלה בנושא נגישות, או שיש לכם הצעה לשיפור, נשמח שתפנו
                אל רכז/ת הנגישות שלנו. נעשה כמיטב יכולתנו לטפל בפנייה ולתת מענה בהקדם.
              </p>
              <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-5 space-y-2 text-sm">
                <p>
                  <span className="text-concrete/55">שם רכז/ת הנגישות: </span>
                  <span className="text-concrete">{COORDINATOR_NAME}</span>
                </p>
                <p>
                  <span className="text-concrete/55">טלפון: </span>
                  <a href={`tel:${PHONE_TEL}`} dir="ltr" className="text-concrete hover:text-steel-light transition-colors steel-underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  <span className="text-concrete/55">דוא״ל: </span>
                  <span className="text-concrete">{COORDINATOR_EMAIL}</span>
                </p>
                <p>
                  <span className="text-concrete/55">וואטסאפ: </span>
                  <a
                    href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-concrete hover:text-steel-light transition-colors steel-underline"
                  >
                    שליחת הודעה
                  </a>
                </p>
              </div>
            </Section>

            <p className="text-sm text-concrete/50 pt-4 border-t border-white/10">
              הצהרת הנגישות עודכנה לאחרונה: {LAST_UPDATED}.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-cormorant text-2xl md:text-3xl font-light text-concrete">{title}</h2>
      {children}
    </section>
  )
}
