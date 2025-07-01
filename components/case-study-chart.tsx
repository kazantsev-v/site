"use client"

import { useEffect, useState } from "react"
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface CaseStudyChartProps {
  data: { name: string; value: number }[]
  label: string
  className?: string
}

/**
 * Отдельный компонент-обёртка, который рендерит Recharts
 * только после монтирования клиента, чтобы избежать ошибок
 * getBoundingClientRect на undefined-элементе.
 */
export function CaseStudyChart({ data, label, className }: CaseStudyChartProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Дожидаемся монтирования
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <ChartContainer
      className={className}
      config={{
        value: {
          label,
          color: "hsl(var(--foreground))", // чёрный/белый в зависимости от темы
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${Number(v) / 1000}k`}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="dot"
                formatter={(v) => new Intl.NumberFormat("ru-RU").format(Number(v))}
              />
            }
          />
          <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} animationDuration={900} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
