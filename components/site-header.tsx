"use client"

import { useState } from "react"
import { useActiveSection } from "@/hooks/use-active-section"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { cn } from "@/lib/utils"

interface NavLink {
  href: string
  label: string
}

interface SiteHeaderProps {
  navLinks: NavLink[]
}

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  const sectionIds = isHomePage ? navLinks.map((link) => link.href.substring(1)) : []
  const activeSection = useActiveSection(sectionIds)

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (isHomePage && href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="flex items-center gap-6">
          <NavbarLogo>
            <Link href="/" className="flex items-center justify-center">
              <img src="/logo.svg" alt="YBO Logo" className="h-6 w-6" />
              <span className="ml-2 font-semibold text-foreground">YBO</span>
            </Link>
          </NavbarLogo>
          {isHomePage && (
            <NavItems
              items={navLinks}
              onItemClick={handleLinkClick}
              renderItem={(item) => (
                <span
                  className={cn(
                    "relative z-20",
                    activeSection === item.href.substring(1) ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </span>
              )}
            />
          )}
        </div>
        <div className="relative z-20 flex items-center gap-2">
          <Button asChild className="bg-blue-500 hover:bg-blue-600 transition-colors rounded-full px-6 py-3 text-white">
            <a href="https://t.me/YBO_manager" target="_blank" rel="noopener noreferrer">
              <Menu className="mr-2 h-5 w-5" />
              Записаться
            </a>
          </Button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo>
            <Link href="/" className="flex items-center justify-center">
              <img src="/logo.svg" alt="YBO Logo" className="h-6 w-6" />
              <span className="ml-2 font-semibold text-foreground">YBO</span>
            </Link>
          </NavbarLogo>
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          <nav className="grid gap-2 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className={cn(
                  "px-3 py-2 rounded-md hover:text-foreground hover:bg-secondary transition-colors",
                  activeSection === link.href.substring(1) && isHomePage
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex w-full flex-col gap-4">
            <Button asChild size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors">
              <a href="https://t.me/YBO_manager" target="_blank" rel="noopener noreferrer">
                Записаться в Telegram
              </a>
            </Button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}

export default SiteHeader
