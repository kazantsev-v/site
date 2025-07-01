"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Database, BrainCircuit, PenTool, BarChartIcon, Users } from "lucide-react"

const processSteps = [
  {
    icon: Database,
    title: "Сбор данных и аудит",
    description: "Глубокий анализ вашего продукта, рынка и конкурентов.",
  },
  {
    icon: BrainCircuit,
    title: "Стратегия и гипотезы",
    description: "Разработка data-driven стратегии и формирование гипотез для тестов.",
  },
  {
    icon: PenTool,
    title: "AI-креативы и настройка",
    description: "Создание вижуалов и текстов с помощью AI, запуск кампаний.",
  },
  {
    icon: BarChartIcon,
    title: "Оптимизация и аналитика",
    description: "Ежедневный мониторинг, A/B тесты и корректировка курса.",
  },
  {
    icon: Users,
    title: "Рост и масштабирование",
    description: "Поиск новых точек роста и масштабирование успешных кампаний.",
  },
]

export default function ProcessSection() {
  return (
    <AnimatedSection id="process" className="w-full py-20 lg:py-28 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Прозрачный процесс работы</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Пять шагов к предсказуемому росту вашего бизнеса.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block rounded-full"></div>
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={index}
                as="div"
                delay={index * 0.15}
                className="relative flex items-start md:items-center gap-6 md:gap-12"
              >
                <div className="flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 bg-background border-2 rounded-full p-3 shadow-md">
                  <step.icon className="h-6 w-6 text-blue-500" />
                </div>
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:text-right md:mr-auto" : "md:text-left md:ml-auto"}`}
                >
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
