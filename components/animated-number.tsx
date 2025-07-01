"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  className?: string
  // Optional prop to add text before/after the number
  prefix?: string
  postfix?: string
}

export function AnimatedNumber({ value, className, prefix = "", postfix = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  // Use a spring for a more natural animation
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          // Format the number to avoid decimals during animation
          ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${postfix}`
        }
      }),
    [springValue, prefix, postfix],
  )

  return <span ref={ref} className={className} />
}
