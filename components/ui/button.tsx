import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-assistant font-medium tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "btn-ys-solid",
        outline: "btn-ys-outline",
        ghost: "btn-ys-ghost",
      },
      size: {
        sm: "text-xs px-4 py-2 rounded-full",
        md: "text-sm px-6 py-3 rounded-full",
        lg: "text-base px-8 py-4 rounded-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
