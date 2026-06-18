import type { Metadata } from "next"
import { Cormorant_Garamond, Assistant, Frank_Ruhl_Libre } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { CartProvider } from "@/lib/cart-context"
import { StickyCart } from "@/components/sticky-cart"
import { PromoBar } from "@/components/promo-bar"
import { AccessibilityWidget } from "@/components/accessibility-widget"
import "./globals.css"

// Applies saved accessibility preferences before first paint to avoid a flash.
const A11Y_BOOT = `(function(){try{var s=JSON.parse(localStorage.getItem('yalis-a11y')||'{}');var h=document.documentElement;var f={'-1':0.9,'0':1,'1':1.12,'2':1.25,'3':1.4,'4':1.6};if(s.font)h.style.fontSize=(17*(f[s.font]||1))+'px';if(s.contrast)h.classList.add('a11y-contrast');if(s.grayscale)h.classList.add('a11y-grayscale');if(s.links)h.classList.add('a11y-links');if(s.readable)h.classList.add('a11y-readable');if(s.motion)h.classList.add('a11y-no-motion');if(s.cursor)h.classList.add('a11y-big-cursor');}catch(e){}})();`

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "YALIS — ריהוט נירוסטה ישראלי",
  description: "קולקציות ריהוט מנירוסטה ועץ בעבודת יד. עיצוב תעשייתי יוקרתי, ייצור ישראלי.",
}

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

// Elegant Hebrew serif — pairs with Cormorant and covers the Hebrew
// glyphs Cormorant lacks, so headings render in a real designed serif
// instead of the browser's generic fallback.
const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${assistant.variable} ${frankRuhl.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOT }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CartProvider>
            <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
            <PromoBar />
            {children}
            <StickyCart />
            <AccessibilityWidget />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
