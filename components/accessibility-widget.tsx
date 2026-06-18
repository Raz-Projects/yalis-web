"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  Accessibility,
  X,
  ZoomIn,
  ZoomOut,
  Contrast,
  Droplet,
  Link2,
  Type,
  MousePointer2,
  PauseCircle,
  RotateCcw,
  FileText,
} from "lucide-react"

// Font-scale multipliers applied to the 17px root. Level 0 == site default.
const FONT_FACTORS: Record<number, number> = {
  [-1]: 0.9,
  0: 1,
  1: 1.12,
  2: 1.25,
  3: 1.4,
  4: 1.6,
}

const STORAGE_KEY = "yalis-a11y"

type Settings = {
  font: number
  contrast: boolean
  grayscale: boolean
  links: boolean
  readable: boolean
  motion: boolean // true == animations stopped
  cursor: boolean // true == large cursor
}

const DEFAULTS: Settings = {
  font: 0,
  contrast: false,
  grayscale: false,
  links: false,
  readable: false,
  motion: false,
  cursor: false,
}

function applySettings(s: Settings) {
  const h = document.documentElement
  h.style.fontSize = `${17 * (FONT_FACTORS[s.font] ?? 1)}px`
  h.classList.toggle("a11y-contrast", s.contrast)
  h.classList.toggle("a11y-grayscale", s.grayscale)
  h.classList.toggle("a11y-links", s.links)
  h.classList.toggle("a11y-readable", s.readable)
  h.classList.toggle("a11y-no-motion", s.motion)
  h.classList.toggle("a11y-big-cursor", s.cursor)
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(DEFAULTS)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Load persisted settings once mounted (the inline boot script already
  // applied them pre-paint; this just syncs React state to what's stored).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setSettings({ ...DEFAULTS, ...JSON.parse(raw) })
    } catch {
      /* ignore corrupt storage */
    }
  }, [])

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings(prev => {
      const next = { ...prev, ...patch }
      applySettings(next)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const reset = useCallback(() => {
    applySettings(DEFAULTS)
    setSettings(DEFAULTS)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }, [])

  // Close on Escape; move focus into the panel on open and back on close.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    panelRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      toggleRef.current?.focus()
    }
  }, [open])

  const fontPct = Math.round((FONT_FACTORS[settings.font] ?? 1) * 100)

  return (
    <>
      {/* Toggle button — fixed on the side */}
      <button
        ref={toggleRef}
        onClick={() => setOpen(v => !v)}
        aria-label="תפריט נגישות"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="fixed left-5 top-1/2 -translate-y-1/2 z-[120] w-12 h-12 flex items-center justify-center rounded-full bg-onyx-light border border-white/20 text-concrete shadow-lg hover:bg-concrete hover:text-onyx hover:border-concrete transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-concrete focus-visible:ring-offset-2 focus-visible:ring-offset-onyx"
      >
        <Accessibility className="w-6 h-6" strokeWidth={1.75} />
      </button>

      {open && (
        <>
          <div
            className="a11y-overlay fixed inset-0 z-[120]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="תפריט נגישות"
            tabIndex={-1}
            dir="rtl"
            className="fixed left-5 top-1/2 -translate-y-1/2 z-[121] w-[300px] max-w-[calc(100vw-2.5rem)] max-h-[85vh] overflow-y-auto rounded-2xl bg-onyx-light border border-white/15 shadow-2xl focus:outline-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h2 className="font-cormorant text-xl text-concrete flex items-center gap-2">
                <Accessibility className="w-5 h-5" strokeWidth={1.75} />
                נגישות
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="סגירת תפריט הנגישות"
                className="text-concrete/60 hover:text-concrete transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-concrete rounded"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Font size */}
              <div>
                <p className="font-assistant text-xs text-concrete/60 mb-2">גודל טקסט</p>
                <div className="flex items-stretch gap-2">
                  <ControlButton
                    label="הקטנה"
                    onClick={() => update({ font: Math.max(-1, settings.font - 1) })}
                    disabled={settings.font <= -1}
                    icon={<ZoomOut size={18} />}
                    compact
                  />
                  <div className="flex-1 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 font-assistant text-sm text-concrete tabular-nums">
                    {fontPct}%
                  </div>
                  <ControlButton
                    label="הגדלה"
                    onClick={() => update({ font: Math.min(4, settings.font + 1) })}
                    disabled={settings.font >= 4}
                    icon={<ZoomIn size={18} />}
                    compact
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-2 gap-2">
                <ControlButton
                  label="ניגודיות גבוהה"
                  active={settings.contrast}
                  onClick={() => update({ contrast: !settings.contrast })}
                  icon={<Contrast size={18} />}
                />
                <ControlButton
                  label="גווני אפור"
                  active={settings.grayscale}
                  onClick={() => update({ grayscale: !settings.grayscale })}
                  icon={<Droplet size={18} />}
                />
                <ControlButton
                  label="הדגשת קישורים"
                  active={settings.links}
                  onClick={() => update({ links: !settings.links })}
                  icon={<Link2 size={18} />}
                />
                <ControlButton
                  label="גופן קריא"
                  active={settings.readable}
                  onClick={() => update({ readable: !settings.readable })}
                  icon={<Type size={18} />}
                />
                <ControlButton
                  label="עצירת אנימציות"
                  active={settings.motion}
                  onClick={() => update({ motion: !settings.motion })}
                  icon={<PauseCircle size={18} />}
                />
                <ControlButton
                  label="סמן גדול"
                  active={settings.cursor}
                  onClick={() => update({ cursor: !settings.cursor })}
                  icon={<MousePointer2 size={18} />}
                />
              </div>

              {/* Reset */}
              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/15 text-concrete/80 font-assistant text-sm hover:bg-white/5 hover:text-concrete transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-concrete"
              >
                <RotateCcw size={16} />
                איפוס הגדרות
              </button>

              {/* Statement link */}
              <Link
                href="/accessibility"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-concrete/80 font-assistant text-sm hover:bg-white/10 hover:text-concrete transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-concrete"
              >
                <FileText size={16} />
                הצהרת נגישות
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

function ControlButton({
  label,
  icon,
  onClick,
  active = false,
  disabled = false,
  compact = false,
}: {
  label: string
  icon: React.ReactNode
  onClick: () => void
  active?: boolean
  disabled?: boolean
  compact?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-pressed={compact ? undefined : active}
      aria-label={label}
      title={label}
      className={`flex ${compact ? "items-center justify-center px-3" : "flex-col items-center justify-center gap-1.5 px-2"} py-2.5 rounded-lg border font-assistant text-[11px] leading-tight text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-concrete disabled:opacity-40 disabled:cursor-not-allowed ${
        active
          ? "bg-concrete text-onyx border-concrete"
          : "bg-white/5 text-concrete/80 border-white/10 hover:bg-white/10 hover:text-concrete"
      }`}
    >
      {icon}
      {!compact && <span>{label}</span>}
    </button>
  )
}
