"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const messages = [
  { text: "ייצור ישראלי · עבודת יד · התאמה אישית לכל מוצר", cta: null },
  { text: "משלוח עד הבית בכל הארץ", cta: { label: "פרטי משלוחים", href: "/shipping" } },
  { text: "כל מוצר מותאם אישית — גודל, גימור וחומר לפי בחירתך", cta: { label: "צרו קשר", href: "/contact" } },
]

export function PromoBar() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % messages.length)
        setVisible(true)
      }, 400)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  if (closed) return null

  const msg = messages[idx]

  return (
    <div className="promo-bar relative flex items-center justify-center gap-3 px-10">
      <span
        className="font-assistant text-xs tracking-wide transition-opacity duration-400"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {msg.text}
        {msg.cta && (
          <Link
            href={msg.cta.href}
            className="mr-2 underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            {msg.cta.label}
          </Link>
        )}
      </span>
      <button
        onClick={() => setClosed(true)}
        aria-label="סגור"
        className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity text-xs leading-none"
      >
        ✕
      </button>
    </div>
  )
}
