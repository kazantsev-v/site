"use client"

import { useState } from "react"
import Link from "next/link"
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
import { Button } from "@/components/ui/button"
import { MountainIcon } from "lucide-react"

export default function NavbarDemoPage() {
  const navItems = [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full bg-background">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo>
            <Link href="/" className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6" />
              <span className="font-semibold">Logo</span>
            </Link>
          </NavbarLogo>
          <NavItems items={navItems} onItemClick={handleLinkClick} />
          <div className="relative z-20 flex items-center gap-4">
            <Button variant="secondary">Login</Button>
            <Button className="bg-[#00B54D] hover:bg-[#00A344] text-white">Book a call</Button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <Link href="/" className="flex items-center gap-2">
                <MountainIcon className="h-6 w-6" />
                <span className="font-semibold">Logo</span>
              </Link>
            </NavbarLogo>
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            <nav className="grid gap-2 text-base font-medium">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(item.href)
                  }}
                  className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex w-full flex-col gap-4">
              <Button variant="secondary" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </Button>
              <Button
                className="w-full bg-[#00B54D] hover:bg-[#00A344] text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a call
              </Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />
    </div>
  )
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-32">
      <h1 className="mb-4 text-center text-3xl font-bold">Check the navbar at the top of the container</h1>
      <p className="mb-10 text-center text-sm text-muted-foreground">
        For demo purpose we have kept the position as <span className="font-medium">Sticky</span>. Keep in mind that
        this component is <span className="font-medium">fixed</span> and will not move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          { id: 1, title: "The", width: "md:col-span-1" },
          { id: 2, title: "First", width: "md:col-span-2" },
          { id: 3, title: "Rule", width: "md:col-span-1" },
          { id: 4, title: "Of", width: "md:col-span-3" },
          { id: 5, title: "F", width: "md:col-span-1" },
          { id: 6, title: "Club", width: "md:col-span-2" },
          { id: 7, title: "Is", width: "md:col-span-2" },
          { id: 8, title: "You", width: "md:col-span-1" },
          { id: 9, title: "Do NOT TALK about", width: "md:col-span-2" },
          { id: 10, title: "F Club", width: "md:col-span-1" },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} h-60 bg-secondary flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
