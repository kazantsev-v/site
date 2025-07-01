"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { AnimatedSection } from "@/components/animated-section"
import { CaseStudyChart } from "@/components/case-study-chart"
import type { FC } from "react"

interface CaseStudy {
  clientName: string
  logoQuery: string
  title: string
  goal: string
  results: { label: string; value: number; text: string }[]
  chartLabel: string
  chartData: { name: string; value: number }[]
  chartDescription: string
}

interface CasesSectionProps {
  caseStudies: CaseStudy[]
}

const CasesSection: FC<CasesSectionProps> = ({ caseStudies }) => {
  return (
    <AnimatedSection id="cases" className="w-full py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            Кейсы, которые говорят сами за себя
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Посмотрите, как мы решаем реальные бизнес-задачи с помощью данных и креатива.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <Card className="h-full flex flex-col overflow-hidden border-border/80 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group bg-card">
                    <CardHeader className="p-6">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{study.clientName}</p>
                        <CardTitle className="text-lg leading-tight text-foreground">{study.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-1 flex flex-col gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Ключевые результаты</h4>
                        <div className="grid grid-cols-3 gap-3 text-center">
                          {study.results.map((result) => (
                            <div key={result.label} className="p-3 rounded-lg bg-secondary">
                              <p className="text-2xl font-bold text-blue-500">{result.text}</p>
                              <p className="text-xs text-muted-foreground leading-tight">{result.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Цель</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{study.goal}</p>
                      </div>

                      <div className="mt-auto pt-6 border-t">
                        <h4 className="text-sm font-semibold text-foreground mb-2">{study.chartDescription}</h4>
                        <CaseStudyChart data={study.chartData} label={study.chartLabel} className="h-[150px] w-full" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </AnimatedSection>
  )
}

export default CasesSection
