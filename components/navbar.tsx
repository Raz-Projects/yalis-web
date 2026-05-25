"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"

const links = [
  { href: "/products", label: "מוצרים" },
  { href: "/#collections", label: "קולקציות" },
  { href: "/#about", label: "אודות" },
  { href: "/#contact", label: "פנו אלינו" },
]

export function Navbar() {
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-8 inset-x-0 z-40 px-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-14 px-6 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.jpeg"
            alt="YALIS"
            width={72}
            height={28}
            className="h-7 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-assistant font-medium text-concrete/70 hover:text-concrete transition-colors tracking-wide"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative p-2 text-concrete/70 hover:text-concrete transition-colors"
            aria-label="עגלת קניות"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -top-0.5 -left-0.5 h-4 w-4 rounded-full bg-steel text-black text-[10px] font-bold flex items-center justify-center leading-none">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-concrete/70 hover:text-concrete transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-black/90 backdrop-blur-md border border-white/10 px-6 py-5">
          <ul className="flex flex-col gap-5">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-base font-assistant font-medium text-concrete/70 hover:text-concrete transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
