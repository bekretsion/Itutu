import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/90 text-primary-foreground hover:bg-primary/70 px-3 py-0.5 text-xs font-medium",
        secondary:
          "border-transparent bg-secondary/80 text-secondary-foreground hover:bg-secondary/60 px-3 py-0.5 text-xs font-medium",
        destructive:
          "border-transparent bg-destructive/90 text-destructive-foreground hover:bg-destructive/70 px-3 py-0.5 text-xs font-medium",
        outline: 
          "text-foreground/80 hover:bg-accent hover:text-accent-foreground border-border/40 px-3 py-0.5 text-xs font-medium",
        success: 
          "border-transparent bg-emerald-500/90 text-white hover:bg-emerald-500/70 px-3 py-0.5 text-xs font-medium",
        warning: 
          "border-transparent bg-amber-500/90 text-white hover:bg-amber-500/70 px-3 py-0.5 text-xs font-medium",
        info: 
          "border-transparent bg-blue-500/90 text-white hover:bg-blue-500/70 px-3 py-0.5 text-xs font-medium",
        // Premium variants
        premium: 
          "border-transparent bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 px-3 py-0.5 text-xs font-medium",
        subtle: 
          "bg-secondary/30 text-secondary-foreground/80 hover:bg-secondary/50 border-transparent px-3 py-0.5 text-xs font-medium",
        ghost: 
          "border-transparent bg-background/50 text-foreground/80 hover:bg-accent/50 hover:text-accent-foreground px-3 py-0.5 text-xs font-medium",
        // Size variants can be combined with any color variant
        large: 
          "px-4 py-1 text-sm",
        small: 
          "px-2 py-0.5 text-[10px]",
      },
      size: {
        default: "",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-4 py-1 text-sm",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
