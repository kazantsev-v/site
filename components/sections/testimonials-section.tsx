"use client"

import { AnimatedSection } from "@/components/animated-section"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import type { FC } from "react"

interface Testimonial {
  quote: string
  name: string
  title: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <AnimatedSection id="testimonials" className="w-full py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Что говорят наши клиенты</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Мы гордимся долгосрочными отношениями и результатами, которые приносим.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={testimonials.map((t) => ({ quote: `"${t.quote}"`, name: t.name, title: t.title }))}
          direction="right"
          speed="slow"
        />
      </div>
    </AnimatedSection>
  )
}

export default TestimonialsSection
