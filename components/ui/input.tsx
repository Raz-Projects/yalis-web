import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-assistant text-sm text-concrete placeholder:text-concrete/30 focus:outline-none focus:border-steel/50 transition-colors",
        className
      )}
      {...props}
    />
  )
}
