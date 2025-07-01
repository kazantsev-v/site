"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"

// Reduced the number of elements for better performance on all devices
const rows = 40
const columns = 10

const generateFakeData = () => {
  const arr = []
  for (let i = 0; i < rows * columns; i++) {
    const value = (Math.random() * 10000).toFixed(2)
    arr.push(value)
  }
  return arr
}

export function DataBackground({ theme = "light" }: { theme?: "light" | "dark" }) {
  const data = useMemo(() => generateFakeData(), [])
  const data2 = useMemo(() => generateFakeData(), []) // Second set for seamless loop

  const baseTextColor = theme === "light" ? "text-muted-foreground/50" : "text-neutral-500/50"
  const highlightTextColor = theme === "light" ? "text-blue-500/60" : "text-blue-400/50"

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-auto animate-scrollData">
        <div className="grid grid-cols-10 gap-x-6 gap-y-2 text-xs font-mono whitespace-nowrap">
          {data.map((val, idx) => (
            <div
              key={`d1-${idx}`}
              className={cn("p-1 text-right animate-flicker", baseTextColor, idx % 11 === 0 && highlightTextColor)}
              style={{ animationDelay: `${Math.random() * 3}s`, animationDuration: `${2 + Math.random() * 2}s` }}
            >
              {val}
            </div>
          ))}
        </div>
        {/* Second identical block for seamless scrolling */}
        <div className="grid grid-cols-10 gap-x-6 gap-y-2 text-xs font-mono whitespace-nowrap">
          {data2.map((val, idx) => (
            <div
              key={`d2-${idx}`}
              className={cn("p-1 text-right animate-flicker", baseTextColor, idx % 13 === 0 && highlightTextColor)}
              style={{ animationDelay: `${Math.random() * 3}s`, animationDuration: `${2 + Math.random() * 2}s` }}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
