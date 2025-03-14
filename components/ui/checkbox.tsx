"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer shrink-0 border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: [
          "border-primary",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        ],
        success: [
          "border-emerald-500",
          "data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white",
          "data-[state=indeterminate]:bg-emerald-500 data-[state=indeterminate]:text-white",
        ],
        destructive: [
          "border-destructive",
          "data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
          "data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground",
        ],
        outline: [
          "border-input bg-background hover:bg-accent hover:text-accent-foreground",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        ],
      },
      size: {
        default: "h-4 w-4 rounded-sm",
        md: "h-5 w-5 rounded-md",
        lg: "h-6 w-6 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  indeterminate?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, indeterminate, checked, ...props }, ref) => {
  const [isIndeterminate, setIsIndeterminate] = React.useState(indeterminate)

  React.useEffect(() => {
    setIsIndeterminate(indeterminate)
  }, [indeterminate])

  React.useEffect(() => {
    if (checked) setIsIndeterminate(false)
  }, [checked])

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={isIndeterminate ? false : checked}
      data-state={isIndeterminate ? "indeterminate" : checked ? "checked" : "unchecked"}
      className={cn(checkboxVariants({ variant, size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "flex items-center justify-center text-current",
          "data-[state=checked]:animate-in data-[state=checked]:zoom-in-95",
          "data-[state=unchecked]:animate-out data-[state=unchecked]:zoom-out-95"
        )}
      >
        {isIndeterminate ? (
          <Minus className="size-[65%] opacity-100" />
        ) : (
          <Check className="size-[65%] opacity-100" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
