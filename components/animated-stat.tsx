"use client"

import { useMemo } from "react"
import { AnimatedNumber } from "@/components/animated-number"
import { cn } from "@/lib/utils"

interface AnimatedStatProps {
  text: string
  className?: string
}

/**
 * A component that parses a string like "-35%" or "x4"
 * and animates the numerical part using AnimatedNumber.
 */
const parseStatText = (text: string) => {
  // Regex to capture prefix (like +, -, x), number, and postfix (like %)
  const match = text.match(/([x+-]*)(\d+)(.*)/)
  if (match) {
    const [, prefix, value, postfix] = match
    return {
      prefix: prefix || "",
      value: Number.parseInt(value, 10),
      postfix: postfix || "",
    }
  }
  // Fallback for formats that don't match
  return { prefix: "", value: 0, postfix: text }
}

export function AnimatedStat({ text, className }: AnimatedStatProps) {
  const { prefix, value, postfix } = useMemo(() => parseStatText(text), [text])

  // If parsing fails, just render the original text without animation
  if (value === 0 && postfix === text) {
    return <span className={className}>{text}</span>
  }

  return (
    <AnimatedNumber
      value={value}
      prefix={prefix}
      postfix={postfix}
      className={cn("font-bold tabular-nums", className)} // Use tabular-nums to prevent layout shifts
    />
  )
}
