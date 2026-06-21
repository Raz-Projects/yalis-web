"use client"

interface Props {
  light?: boolean
}

export function NewsletterForm({ light }: Props) {
  const inputCls = light
    ? "flex-1 bg-white/10 border border-iron/40 text-pearl placeholder:text-iron focus:outline-none focus:border-iron px-4 py-3 font-assistant text-sm text-right"
    : "flex-1 bg-pearl border border-wire text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink-mid px-4 py-3 font-assistant text-sm text-right"

  const btnCls = light
    ? "bg-pearl text-ink border border-pearl font-assistant text-xs font-medium tracking-[0.14em] uppercase px-6 py-3 whitespace-nowrap hover:bg-iron-light transition-colors"
    : "bg-ink text-pearl border border-ink font-assistant text-xs font-medium tracking-[0.14em] uppercase px-6 py-3 whitespace-nowrap hover:bg-ink-mid transition-colors"

  return (
    <form onSubmit={e => e.preventDefault()} className="flex gap-2" dir="rtl">
      <input
        type="email"
        placeholder="כתובת האימייל שלך"
        className={inputCls}
        dir="rtl"
      />
      <button type="submit" className={btnCls}>
        הצטרפות
      </button>
    </form>
  )
}
