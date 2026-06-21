"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useCart } from "@/lib/cart-context"

const links = [
  { href: "/products",    label: "Shop" },
  { href: "/custom",      label: "Custom" },
  { href: "/about",       label: "Studio" },
  { href: "/architects",  label: "Trade" },
  { href: "/contact",     label: "Contact" },
]

export function Navbar() {
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-pearl/95 backdrop-blur-sm border-b border-wire"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-18 px-6 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group" aria-label="YALIS Studio — דף הבית">
          <Image
            src="/logo.jpeg"
            alt="YALIS"
            width={80}
            height={30}
            className="h-7 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop links — centered */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs font-assistant font-medium tracking-[0.16em] uppercase text-ink-soft hover:text-ink transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: cart + mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative p-1 text-ink-soft hover:text-ink transition-colors"
            aria-label={`עגלת קניות${count > 0 ? ` (${count} פריטים)` : ""}`}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-0.5 -left-0.5 h-3.5 w-3.5 rounded-full bg-ink text-pearl text-[9px] font-bold flex items-center justify-center leading-none">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-1 text-ink-soft hover:text-ink transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-pearl border-t border-wire px-6 py-8">
          <ul className="flex flex-col gap-6">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-cormorant text-2xl font-light text-ink hover:text-ink-soft transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-wire">
            <a
              href="https://wa.me/972528448870"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ys-solid w-full text-center block py-3"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
