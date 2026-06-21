import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "צור קשר — YALIS STUDIO",
  description: "צרו קשר עם YALIS STUDIO — ריהוט נירוסטה ועץ בעבודת יד. WhatsApp, אימייל ופרטי התקשרות.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsApp />

      <main className="pt-36 pb-24 px-6 bg-onyx min-h-screen">
        <div className="max-w-4xl mx-auto" dir="rtl">

          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <p className="label-ys text-steel">YALIS STUDIO</p>
            <h1 className="font-cormorant text-4xl md:text-6xl font-light text-concrete">צור קשר</h1>
            <div className="ys-divider" />
            <p className="font-assistant text-base text-concrete/60 max-w-lg mx-auto">
              כל מוצר מותאם אישית — פנו אלינו לייעוץ, שאלות, או להתחיל לתכנן את הריהוט שלכם.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">

            {/* WhatsApp */}
            <a
              href="https://wa.me/972528448870?text=שלום, אני מעוניין/ת בייעוץ לריהוט מותאם אישית"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-4 p-8 border border-white/10 hover:border-steel/40 bg-white/3 hover:bg-white/5 rounded-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <WAIcon />
              </div>
              <div>
                <p className="font-cormorant text-xl text-concrete mb-1">WhatsApp</p>
                <p className="font-assistant text-sm text-steel">052-844-8870</p>
                <p className="font-assistant text-xs text-concrete/50 mt-2">הדרך המהירה ביותר לקבל מענה</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:yalistudio1@gmail.com"
              className="group flex flex-col items-center text-center gap-4 p-8 border border-white/10 hover:border-steel/40 bg-white/3 hover:bg-white/5 rounded-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-steel/10 flex items-center justify-center group-hover:bg-steel/20 transition-colors">
                <MailIcon />
              </div>
              <div>
                <p className="font-cormorant text-xl text-concrete mb-1">אימייל</p>
                <p className="font-assistant text-sm text-steel">yalistudio1@gmail.com</p>
                <p className="font-assistant text-xs text-concrete/50 mt-2">לפניות מפורטות ושיתוף קבצים</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+972528448870"
              className="group flex flex-col items-center text-center gap-4 p-8 border border-white/10 hover:border-steel/40 bg-white/3 hover:bg-white/5 rounded-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-steel/10 flex items-center justify-center group-hover:bg-steel/20 transition-colors">
                <PhoneIcon />
              </div>
              <div>
                <p className="font-cormorant text-xl text-concrete mb-1">טלפון</p>
                <p className="font-assistant text-sm text-steel">052-844-8870</p>
                <p className="font-assistant text-xs text-concrete/50 mt-2">ראה שעות פעילות למטה</p>
              </div>
            </a>
          </div>

          {/* Hours + Location */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-8 border border-white/10 bg-white/3 rounded-2xl space-y-5">
              <h2 className="font-cormorant text-2xl font-light text-concrete">שעות פעילות</h2>
              <div className="space-y-3 font-assistant text-sm">
                {[
                  { day: "ראשון – חמישי", hours: "08:00 – 18:00" },
                  { day: "שישי", hours: "08:00 – 13:00" },
                  { day: "שבת", hours: "סגור" },
                ].map(r => (
                  <div key={r.day} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-concrete/70">{r.day}</span>
                    <span className={r.hours === "סגור" ? "text-concrete/30" : "text-steel"}>{r.hours}</span>
                  </div>
                ))}
              </div>
              <p className="font-assistant text-xs text-concrete/40">
                * הודעות WhatsApp מקבלות מענה גם מחוץ לשעות הפעילות
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-white/3 rounded-2xl space-y-5">
              <h2 className="font-cormorant text-2xl font-light text-concrete">בית הייצור</h2>
              <div className="space-y-3 font-assistant text-sm text-concrete/70">
                <div className="flex gap-3">
                  <LocationIcon />
                  <div>
                    <p>עומר, אזור באר שבע</p>
                    <p className="text-concrete/40 text-xs mt-1">ביקורים בתיאום מראש בלבד</p>
                  </div>
                </div>
                <p className="text-concrete/50 text-xs leading-relaxed pt-2 border-t border-white/5">
                  ניתן לבקר בסטודיו ולראות דוגמאות חומרים, גימורים וטפסות בפועל.
                  יש לתאם ביקור מראש דרך WhatsApp.
                </p>
              </div>
              <a
                href="https://wa.me/972528448870?text=שלום, אני מעוניין/ת לתאם ביקור בסטודיו"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ys-outline text-sm px-6 py-2.5 inline-block"
              >
                תיאום ביקור בסטודיו
              </a>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-12 text-center space-y-4">
            <p className="font-cormorant text-2xl font-light text-concrete/60">
              מוכנים להתחיל?
            </p>
            <a
              href="https://wa.me/972528448870?text=שלום, אני מעוניין/ת לקבל הצעת מחיר לריהוט מותאם אישית"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-solid inline-flex items-center gap-2 px-10 py-4 text-base"
            >
              <WAIcon />
              שלחו הודעה ב-WhatsApp
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-steel">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-steel">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-steel mt-0.5 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}
