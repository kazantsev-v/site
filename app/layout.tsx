import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" }) // Added variable

export const metadata: Metadata = {
  metadataBase: new URL("https://eyecatchers.agency"), // Replace with your actual domain
  title: {
    default: "YBO — AI-маркетинг и Performance-реклама",
    template: "%s | YBO Agency",
  },
  description:
    "YBO: Превращаем идеи в измеримые результаты с помощью AI-маркетинга, data-driven подхода и performance-рекламы. Увеличиваем ROAS и выручку для вашего бизнеса.",
  keywords: [
    "AI-маркетинг",
    "performance-реклама",
    "digital-агентство",
    "YBO",
    "data-driven",
    "ROAS",
    "увеличение продаж",
    "интернет-маркетинг",
    "рекламное агентство",
    "нейросети в маркетинге",
  ],
  authors: [{ name: "YBO Agency", url: "https://eyecatchers.agency" }], // Replace with your actual domain
  creator: "YBO Agency",
  publisher: "YBO Agency",
  alternates: {
    canonical: "/", // Assuming this is the main page
  },
  openGraph: {
    title: "YBO — AI-маркетинг и Performance-реклама",
    description: "Превращаем идеи в результат с помощью AI-маркетинга и data-driven подхода.",
    url: "https://eyecatchers.agency", // Replace with your actual domain
    siteName: "YBO Agency",
    images: [
      {
        url: "/og-image.png", // Ensure this file exists in /public
        width: 1200,
        height: 630,
        alt: "YBO Agency - AI-маркетинг и Performance-реклама",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YBO — AI-маркетинг и Performance-реклама",
    description: "Превращаем идеи в результат с помощью AI-маркетинга и data-driven подхода.",
    siteId: "", // Add your Twitter Site ID if you have one
    creator: "@YBOagency", // Replace with your agency's Twitter handle
    creatorId: "", // Add your Twitter Creator ID if you have one
    images: ["/og-image.png"], // Ensure this file exists in /public
  },
  icons: {
    icon: "/favicon.ico", // Ensure favicon.ico exists in /public
    shortcut: "/favicon-16x16.png", // Ensure these exist in /public
    apple: "/apple-touch-icon.png", // Ensure this exists in /public
  },
  manifest: "/site.webmanifest", // Ensure this file exists in /public
  robots: {
    // Added robots metadata
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
