import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "collection" | "default"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        variant === "collection" ? "badge-collection" : "label-ys",
        className
      )}
      {...props}
    />
  )
}
