"use client"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import SiteHeader from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedNumber } from "@/components/animated-number"
import { DataBackground } from "@/components/data-background"
import { AnimatedProgress } from "@/components/ui/animated-progress"
import { AnimatedStat } from "@/components/animated-stat"
import {
  ArrowRight,
  Database,
  BrainCircuit,
  BarChartIcon,
  Rocket,
  DatabaseZap,
  Sparkles,
  Briefcase,
  TextIcon as Telegram,
} from "lucide-react"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { precisionData } from "@/data/precision-data" // Import precisionData

// Dynamically import heavy components
const CasesSection = dynamic(() => import("@/components/sections/cases-section"))
const ProcessSection = dynamic(() => import("@/components/sections/process-section"))
const TechSection = dynamic(() => import("@/components/sections/tech-section"))
const AiMonitoringSection = dynamic(() => import("@/components/sections/ai-monitoring-section"))
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"))

// New, detailed case studies data structure
const caseStudies = [
  {
    clientName: "Aura Fashion",
    logoQuery: "Aura+Fashion+logo+minimalist",
    title: "Увеличение ROAS для E-commerce бренда одежды",
    goal: "Повысить рентабельность инвестиций в рекламу (ROAS) на 150% и увеличить онлайн-продажи на 80% за 6 месяцев.",
    strategy:
      "Разработана омниканальная performance-стратегия с фокусом на AI-генерации креативов для социальных сетей и оптимизации товарных кампаний в Google Shopping. Внедрена динамическая сегментация аудитории.",
    channels: ["Meta Ads", "Google Shopping", "TikTok Ads", "Email-маркетинг"],
    results: [
      { label: "ROAS", value: 180, text: "+180%" },
      { label: "Рост продаж", value: 120, text: "+120%" },
      { label: "Снижение CPA", value: 25, text: "-25%" },
    ],
    chartLabel: "Продажи, $",
    chartData: [
      { name: "Янв", value: 45000 },
      { name: "Фев", value: 62000 },
      { name: "Мар", value: 78000 },
      { name: "Апр", value: 95000 },
      { name: "Май", value: 110000 },
      { name: "Июн", value: 132000 },
    ],
    chartDescription: "Динамика роста онлайн-продаж",
  },
  {
    clientName: "Innovate SaaS",
    logoQuery: "Innovate+SaaS+logo+tech",
    title: "Генерация MQL для B2B SaaS-платформы",
    goal: "Увеличить количество квалифицированных лидов (MQL) на 200% и снизить стоимость лида (CPL) на 30% за один квартал.",
    strategy:
      "Создан контент-хаб с экспертными статьями и вебинарами. Запущены таргетированные кампании в LinkedIn для продвижения контента и сбора лидов. Настроена сквозная аналитика для отслеживания пути клиента.",
    channels: ["LinkedIn Ads", "Google Search (SEO)", "Content Marketing", "HubSpot"],
    results: [
      { label: "Рост MQL", value: 250, text: "+250%" },
      { label: "Снижение CPL", value: 40, text: "-40%" },
      { label: "Конверсия в Demo", value: 30, text: "+30%" },
    ],
    chartLabel: "Лиды",
    chartData: [
      { name: "Нед 1", value: 15 },
      { name: "Нед 3", value: 28 },
      { name: "Нед 6", value: 45 },
      { name: "Нед 9", value: 62 },
      { name: "Нед 12", value: 88 },
    ],
    chartDescription: "Еженедельный прирост квалифицированных лидов (MQL)",
  },
  {
    clientName: "Zenith Fitness",
    logoQuery: "Zenith+Fitness+logo+premium",
    title: "Привлечение клиентов для премиум фитнес-клуба",
    goal: "Увеличить количество проданных годовых абонементов на 50% за счет привлечения целевой аудитории в радиусе 5 км от клуба.",
    strategy:
      "Запущены гиперлокальные кампании в Meta и Google Ads с таргетингом по интересам и местоположению. Проведена оптимизация Google My Business и локального SEO. Организованы партнерства с местными бизнесами.",
    channels: ["Geo-targeted Meta Ads", "Google Maps Ads", "Local SEO", "Influence-маркетинг"],
    results: [
      { label: "Рост продаж абонементов", value: 70, text: "+70%" },
      { label: "Снижение стоимости заявки", value: 30, text: "-30%" },
      { label: "Посещаемость сайта с карт", value: 150, text: "+150%" },
    ],
    chartLabel: "Абонементы",
    chartData: [
      { name: "Янв", value: 25 },
      { name: "Фев", value: 32 },
      { name: "Мар", value: 48 },
      { name: "Апр", value: 65 },
    ],
    chartDescription: "Количество проданных годовых абонементов",
  },
]

const techStack = [
  {
    category: "Сбор и анализ данных",
    icon: Database,
    technologies: [
      {
        name: "Google BigQuery",
        logoQuery: "BigQuery+logo",
        description:
          "Масштабируемое облачное хранилище для анализа огромных массивов данных и построения предиктивных моделей.",
      },
      {
        name: "Segment CDP",
        logoQuery: "Segment+CDP+logo",
        description:
          "Платформа клиентских данных для объединения информации из разных источников и создания единого профиля клиента.",
      },
      {
        name: "Google Analytics 4",
        logoQuery: "Google+Analytics+4+logo",
        description: "Комплексный анализ поведения пользователей на сайтах и в приложениях для оптимизации воронок.",
      },
      {
        name: "Amplitude",
        logoQuery: "Amplitude+logo",
        description:
          "Глубокий анализ продуктовой аналитики для понимания пользовательского пути и повышения retention.",
      },
    ],
  },
  {
    category: "Искусственный интеллект и автоматизация",
    icon: BrainCircuit,
    technologies: [
      {
        name: "OpenAI GPT-4 & API",
        logoQuery: "OpenAI+logo",
        description:
          "Использование передовых языковых моделей для генерации контента, персонализации коммуникаций и анализа текстов.",
      },
      {
        name: "Midjourney / DALL-E 3",
        logoQuery: "Midjourney+logo",
        description:
          "Создание уникальных и высококачественных визуальных креативов для рекламных кампаний с помощью AI.",
      },
      {
        name: "Fivetran",
        logoQuery: "Fivetran+logo",
        description:
          "Автоматизация сбора данных из сотен источников в наше хранилище, обеспечивая их актуальность и целостность.",
      },
      {
        name: "Zapier / Make",
        logoQuery: "Zapier+logo",
        description: "Интеграция и автоматизация рабочих процессов между различными сервисами без написания кода.",
      },
    ],
  },
  {
    category: "Рекламные платформы и трекинг",
    icon: BarChartIcon,
    technologies: [
      {
        name: "Google Ads",
        logoQuery: "Google+Ads+logo",
        description:
          "Эффективное управление поисковыми, медийными, видео- и торговыми кампаниями с предиктивной оптимизацией.",
      },
      {
        name: "Meta Ads",
        logoQuery: "Meta+Ads+logo",
        description:
          "Таргетированная реклама в Facebook, Instagram, Messenger и Audience Network с глубокой сегментацией аудитории.",
      },
      {
        name: "TikTok Ads",
        logoQuery: "TikTok+Ads+logo",
        description: "Привлечение молодой и вовлеченной аудитории через креативные видеоформаты и вирусные кампании.",
      },
      {
        name: "AppsFlyer",
        logoQuery: "AppsFlyer+logo",
        description:
          "Лидирующая платформа мобильной атрибуции для отслеживания эффективности кампаний по продвижению приложений.",
      },
    ],
  },
]

const resultsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const resultsItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

const tabContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const tabItemVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
}

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const gridItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const cardContentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardContentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
}

export default function EyeCatchersPage() {
  const testimonials = [
    {
      quote:
        "YBO превзошли все наши ожидания. Их AI-подход к маркетингу действительно работает! Результаты говорят сами за себя.",
      name: "Иван Петров",
      title: "CEO, TechStart LLC",
    },
    {
      quote:
        "Благодаря YBO мы увидели 200% рост ROAS за первые три месяца. Настоящие профессионалы своего дела. Очень довольны сотрудничеством.",
      name: "Мария Сидорова",
      title: "Маркетинг-директор, FashionRetail Group",
    },
    {
      quote:
        "Прозрачность, данные и результат – вот что отличает YBO. Рекомендую всем, кто ищет надежного партнера в digital.",
      name: "Алексей Иванов",
      title: "Основатель, EcoGoods",
    },
    {
      quote:
        "Невероятная команда! Помогли нам не только с рекламой, но и с общей стратегией выхода на новые рынки. Глубокая экспертиза в AI.",
      name: "Елена Смирнова",
      title: "CMO, Innovate Solutions",
    },
    {
      quote:
        "Снизили стоимость привлечения клиента на 40%, сохранив при этом объем. Впечатляющая работа с данными и автоматизацией.",
      name: "Дмитрий Васильев",
      title: "Руководитель отдела маркетинга, FinTech Corp",
    },
  ]

  const aiMonitoringData = [
    {
      icon: Rocket,
      title: "AI Growth Hacking",
      description:
        "Используем AI для быстрого тестирования гипотез, поиска неочевидных точек роста и масштабирования успешных стратегий.",
      delay: 0,
    },
    {
      icon: DatabaseZap,
      title: "Customer Data Platform (CDP)",
      description:
        "Объединяем данные из всех источников для создания единого профиля клиента и сверхточной персонализации коммуникаций.",
      delay: 0.1,
    },
    {
      icon: Sparkles,
      title: "AI-визуализация (DALL·E, Midjourney)",
      description:
        "Генерируем уникальные и привлекательные креативы с помощью нейросетей, ускоряя процесс создания контента в разы.",
      delay: 0.2,
    },
  ]

  const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#results", label: "Результаты" },
    { href: "#precision", label: "Эффективность" },
    { href: "#cases", label: "Кейсы" },
    { href: "#process", label: "Процесс" },
    { href: "#tech", label: "Технологии" },
    { href: "#ai-monitoring", label: "AI-Мониторинг" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#contact", label: "Контакты" },
  ]

  const resultsData = [
    { value: 8, label: "стран запуска", prefix: "", postfix: "" },
    { value: 3400000, label: "под управлением", prefix: "$", postfix: "+" },
    { value: 10, label: "средний ROAS", prefix: "", postfix: "x" },
    { value: 287, label: "рост выручки клиентов", prefix: "+", postfix: "%" },
  ]

  const [activePrecisionTab, setActivePrecisionTab] = useState(precisionData[0].id)
  const activeTabData = precisionData.find((tab) => tab.id === activePrecisionTab)

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background font-sans">
      <SiteHeader navLinks={navLinks} />

      <main className="flex-1">
        {/* Hero Block */}
        <section
          id="home"
          className="w-full min-h-screen relative flex items-center justify-center text-center overflow-hidden"
        >
          {/* Layer 1: Animated Background. z-0 */}
          <DataBackground />

          {/* Layer 2: Gradient Overlay. z-10 */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

          {/* Layer 3: Content. z-20 */}
          <div className="container px-4 md:px-6 relative z-20">
            <AnimatedSection>
              <div className="flex flex-col items-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
                  Данные. Креатив. Результат.
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                  Мы создаем интеллектуальные маркетинговые стратегии, которые работают. Увеличьте ваш ROAS с помощью AI
                  и data-driven подхода.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-500 hover:bg-blue-600 text-white transition-colors transform hover:scale-105"
                >
                  <a href="https://t.me/YBO_manager" target="_blank" rel="noopener noreferrer">
                    Обсудить ваш проект <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Results in Numbers */}
        <section id="results" className="w-full py-16 sm:py-20 lg:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                Наши результаты в цифрах
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg">
                Мы гордимся показателями, которых достигаем для наших клиентов по всему миру.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-2 gap-4 text-center sm:gap-6 md:grid-cols-4 md:gap-8"
              variants={resultsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {resultsData.map((item) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center justify-center space-y-1 rounded-lg p-2 transition-colors hover:bg-secondary sm:p-4"
                  variants={resultsItemVariants}
                >
                  <h3 className="text-3xl font-bold text-foreground tabular-nums sm:text-4xl md:text-5xl">
                    <AnimatedNumber value={item.value} prefix={item.prefix} postfix={item.postfix} />
                  </h3>
                  <p className="text-center text-xs text-muted-foreground sm:text-sm">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Precision and Efficiency */}
        <section id="precision" className="w-full py-20 lg:py-28 bg-secondary overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="space-y-8" variants={gridItemVariants}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                    Точность и эффективность
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg">
                    Наш data-driven подход позволяет минимизировать риски и максимизировать результат на каждом этапе.
                  </p>
                </div>
                <motion.div
                  role="tablist"
                  aria-orientation="vertical"
                  className="flex flex-col gap-4"
                  variants={tabContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {precisionData.map((tab) => (
                    <motion.button
                      key={tab.id}
                      id={`tab-${tab.id}`}
                      role="tab"
                      aria-selected={activePrecisionTab === tab.id}
                      aria-controls={`tabpanel-${tab.id}`}
                      onClick={() => setActivePrecisionTab(tab.id)}
                      className={cn(
                        "flex items-start text-left gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        activePrecisionTab === tab.id
                          ? "bg-background shadow-md scale-105 border-primary/20"
                          : "hover:bg-background/50 hover:shadow-sm border-transparent",
                      )}
                      variants={tabItemVariants}
                    >
                      <div
                        className={cn(
                          "p-2 rounded-md mt-1 transition-colors",
                          activePrecisionTab === tab.id ? "bg-blue-500 text-white" : "bg-background text-primary",
                        )}
                      >
                        <tab.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{tab.title}</h3>
                        <p className="text-sm text-muted-foreground">{tab.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div className="min-h-[480px] flex items-center" variants={gridItemVariants}>
                <AnimatePresence mode="wait">
                  {activeTabData && (
                    <motion.div
                      key={activeTabData.id}
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -30 }}
                      transition={{ type: "spring", stiffness: 200, damping: 30 }}
                      role="tabpanel"
                      id={`tabpanel-${activeTabData.id}`}
                      aria-labelledby={`tab-${activeTabData.id}`}
                      className="w-full"
                    >
                      <Card className="bg-background shadow-lg">
                        <motion.div
                          variants={cardContentContainerVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-col"
                        >
                          <CardHeader>
                            <motion.div variants={cardContentItemVariants}>
                              <CardTitle className="text-xl md:text-2xl">{activeTabData.content.title}</CardTitle>
                            </motion.div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <motion.p
                              variants={cardContentItemVariants}
                              className="text-muted-foreground min-h-[60px] md:min-h-[80px]"
                            >
                              {activeTabData.content.description}
                            </motion.p>
                            <motion.div variants={cardContentItemVariants} className="space-y-6 pt-4 border-t">
                              {activeTabData.content.stats.map((stat) => (
                                <div key={stat.label} className="space-y-2">
                                  <div className="flex justify-between items-center text-sm font-medium">
                                    <div className="flex items-center gap-2">
                                      <stat.icon className={cn("h-4 w-4", stat.color)} />
                                      <span>{stat.label}</span>
                                    </div>
                                    <AnimatedStat text={stat.text} className={cn("font-bold", stat.color)} />
                                  </div>
                                  <AnimatedProgress value={stat.value} className={cn("h-2", stat.progressColor)} />
                                </div>
                              ))}
                            </motion.div>
                          </CardContent>
                        </motion.div>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cases */}
        <CasesSection caseStudies={caseStudies} />

        {/* Process */}
        <ProcessSection />

        {/* Technologies */}
        <TechSection techStack={techStack} />

        {/* AI Monitoring */}
        <AiMonitoringSection aiMonitoringData={aiMonitoringData} />

        {/* Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Contact Block */}
        <AnimatedSection
          id="contact"
          className="w-full py-20 lg:py-28 bg-neutral-900 text-primary-foreground relative overflow-hidden"
        >
          <DataBackground theme="dark" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Готовы&nbsp;к&nbsp;росту?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Свяжитесь с нами в Telegram для бесплатной консультации или запросите аудит ваших текущих рекламных
                кампаний.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-500 hover:bg-blue-600 text-white transition-colors transform hover:scale-105"
                >
                  <a href="https://t.me/YBO_manager" target="_blank" rel="noopener noreferrer">
                    <Telegram className="mr-2 h-5 w-5" />
                    Записаться на консультацию
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900 transition-colors transform hover:scale-105"
                >
                  <a href="https://t.me/YBO_manager" target="_blank" rel="noopener noreferrer">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Запросить аудит
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-400 pt-8">
                Или напишите нам на почту:{" "}
                <a href="mailto:hello@ybo.agency" className="underline hover:text-blue-400 transition-colors">
                  hello@ybo.agency
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <SiteFooter />
    </div>
  )
}
