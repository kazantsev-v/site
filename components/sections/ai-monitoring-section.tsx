"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import type { FC, ElementType } from "react"

interface AiMonitoringItem {
  icon: ElementType
  title: string
  description: string
  delay: number
}

interface AiMonitoringSectionProps {
  aiMonitoringData: AiMonitoringItem[]
}

const AiMonitoringSection: FC<AiMonitoringSectionProps> = ({ aiMonitoringData }) => {
  return (
    <AnimatedSection id="ai-monitoring" className="w-full py-20 lg:py-28 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">AI-мониторинг и Инновации</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Мы активно внедряем передовые AI-технологии для достижения максимальной эффективности и предоставления
            уникальных решений.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiMonitoringData.map((item) => (
            <AnimatedSection key={item.title} as="div" delay={item.delay}>
              <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader className="items-center">
                  <item.icon className="h-10 w-10 text-blue-500" />
                  <CardTitle className="mt-4 text-card-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default AiMonitoringSection
