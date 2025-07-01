"use client"

import Link from "next/link"
// import { MountainIcon } from 'lucide-react' // Removed MountainIcon import

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => {
                // Check if on homepage to avoid unnecessary scroll
                if (typeof window !== "undefined" && window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              <img src="/logo.svg" alt="YBO Logo" className="h-6 w-6 text-neutral-900" />
              <span className="ml-2 text-lg font-semibold text-neutral-900">YBO</span>
            </Link>
            <p className="text-xs text-neutral-500 mt-2 sm:mt-0 sm:ml-2">
              &copy; {new Date().getFullYear()} YBO Agency. <br className="xs:hidden sm:hidden" />
              Все права защищены.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/privacy-policy" // Updated link
              className="text-xs hover:underline underline-offset-4 text-neutral-600 hover:text-blue-500 transition-colors"
            >
              Политика конфиденциальности
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
