"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"
import type { FC, ElementType } from "react"

interface Technology {
  name: string
  logoQuery: string
  description: string
}

interface TechCategory {
  category: string
  icon: ElementType
  technologies: Technology[]
}

interface TechSectionProps {
  techStack: TechCategory[]
}

const TechSection: FC<TechSectionProps> = ({ techStack }) => {
  return (
    <AnimatedSection id="tech" className="w-full py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Наш технологический стек</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Мы используем лучшие в своем классе инструменты для достижения максимальных результатов. Вот некоторые из
            них:
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {techStack.map((category, index) => (
              <AccordionItem key={category.category} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-blue-500" />
                    {category.category}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-4 rounded-lg bg-secondary/50 border transition-colors hover:bg-secondary"
                      >
                        <h4 className="font-semibold text-foreground">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default TechSection
