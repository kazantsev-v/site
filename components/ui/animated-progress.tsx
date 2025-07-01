"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

const AnimatedProgressIndicator = motion(ProgressPrimitive.Indicator)

const AnimatedProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "value"> & { value: number }
>(({ className, value, ...props }, ref) => {
  const internalRef = React.useRef<HTMLDivElement>(null)
  // Combine the forwarded ref with the internal ref
  React.useImperativeHandle(ref, () => internalRef.current!)

  // Use framer-motion's useInView for better integration
  const isInView = useInView(internalRef, { once: true, amount: 0.3 })

  const progressValue = value || 0

  return (
    <ProgressPrimitive.Root
      ref={internalRef}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <AnimatedProgressIndicator
        className="h-full w-full flex-1 bg-primary" // Default color is primary, will be overridden by className on Root
        initial={{ x: "-100%" }}
        animate={isInView ? { x: `-${100 - progressValue}%` } : { x: "-100%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Smoother easing
      />
    </ProgressPrimitive.Root>
  )
})
AnimatedProgress.displayName = "AnimatedProgress"

export { AnimatedProgress }
