import { Target, TestTube, TrendingUp, TrendingDown, Compass, Zap } from "lucide-react"

export const precisionData = [
  {
    id: "budget",
    icon: Target,
    title: "Оптимизация бюджета",
    description: "Предиктивное управление для максимальной отдачи.",
    content: {
      title: "Предиктивное управление бюджетом",
      description:
        "Наши AI-алгоритмы анализируют тысячи точек данных для прогнозирования CPA и перераспределения бюджета в реальном времени на самые эффективные каналы.",
      stats: [
        {
          label: "Снижение CPA",
          value: 35,
          text: "-35%",
          icon: TrendingDown,
          color: "text-blue-500",
          progressColor: "[&>div]:bg-blue-500",
        },
        {
          label: "Точность прогноза бюджета",
          value: 92,
          text: "92%",
          icon: Compass,
          color: "text-blue-500",
          progressColor: "[&>div]:bg-blue-500",
        },
      ],
    },
  },
  {
    id: "testing",
    icon: TestTube,
    title: "A/B Тестирование",
    description: "Автоматизированный поиск лучших креативов.",
    content: {
      title: "Автоматизированное тестирование креативов",
      description:
        "Мы используем генеративные нейросети для создания сотен вариантов креативов и автоматически тестируем их на микро-аудиториях, масштабируя только победителей.",
      stats: [
        {
          label: "Скорость тестирования",
          value: 100,
          text: "x4",
          icon: Zap,
          color: "text-blue-500",
          progressColor: "[&>div]:bg-blue-500",
        },
        {
          label: "Отсев неэффективных гипотез",
          value: 80,
          text: "80%",
          icon: TrendingDown,
          color: "text-blue-500",
          progressColor: "[&>div]:bg-blue-500",
        },
      ],
    },
  },
  {
    id: "conversion",
    icon: TrendingUp,
    title: "Рост конверсии",
    description: "Оптимизация воронки для увеличения LTV.",
    content: {
      title: "Оптимизация воронки конверсии",
      description:
        "Анализируя поведение пользователей на каждом этапе, мы выявляем и устраняем 'узкие места', повышая конверсию от первого клика до покупки.",
      stats: [
        {
          label: "Рост конверсии (CR)",
          value: 22,
          text: "+22%",
          icon: TrendingUp,
          color: "text-blue-500",
          progressColor: "[&>div]:bg-blue-500",
        },
        {
          label: "Увеличение LTV",
          value: 15,
          text: "+15%",
          icon: TrendingUp,
          color: "text-blue-500",
          progressColor: "[&>div]:bg-blue-500",
        },
      ],
    },
  },
]
