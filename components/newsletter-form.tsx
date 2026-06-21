"use client"

export function NewsletterForm() {
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        placeholder="כתובת האימייל שלך"
        className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 font-assistant text-sm text-concrete placeholder:text-concrete/30 focus:outline-none focus:border-steel/50 text-right"
        dir="rtl"
      />
      <button
        type="submit"
        className="btn-ys-solid px-6 py-3 text-sm whitespace-nowrap rounded-full"
      >
        הצטרפות
      </button>
    </form>
  )
}
