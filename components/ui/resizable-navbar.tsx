"use client"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import React, { useState } from "react"

// Main Navbar container
export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Pass 'scrolled' state to children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<{ scrolled?: boolean }>, { scrolled })
    }
    return child
  })

  return <motion.div className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>{childrenWithProps}</motion.div>
}

// Desktop Navbar Body
export const NavBody = ({
  children,
  className,
  scrolled,
}: {
  children: React.ReactNode
  className?: string
  scrolled?: boolean
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: scrolled ? "blur(16px)" : "none",
        backgroundColor: scrolled ? "hsla(var(--background) / 0.8)" : "hsla(var(--background) / 0)",
        borderColor: scrolled ? "hsl(var(--border))" : "hsla(var(--background) / 0)",
        width: scrolled ? "auto" : "100%", // Adjust width to content
        y: scrolled ? 16 : 0,
        paddingLeft: scrolled ? "1.5rem" : "1rem",
        paddingRight: scrolled ? "1.5rem" : "1rem",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className={cn(
        "relative z-10 mx-auto hidden max-w-7xl flex-row items-center justify-between rounded-full border bg-transparent py-2 lg:flex",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

// Desktop Nav Items
export const NavItems = ({
  items,
  onItemClick,
  renderItem,
  className,
}: {
  items: { label: string; href: string }[]
  onItemClick: (href: string) => void
  renderItem?: (item: { label: string; href: string }) => React.ReactNode
  className?: string
}) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn("flex flex-row items-center justify-center gap-1 text-sm font-medium", className)}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.href}
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => {
            e.preventDefault() // Prevent default jump
            onItemClick(item.href)
          }}
          className="relative px-3 py-2 transition-colors hover:text-foreground"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered-backdrop"
              className="absolute inset-0 h-full w-full rounded-full bg-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          {renderItem ? renderItem(item) : <span className="relative z-20">{item.label}</span>}
        </a>
      ))}
    </div>
  )
}

// Mobile Navbar Container
export const MobileNav = ({
  children,
  className,
  scrolled,
}: {
  children: React.ReactNode
  className?: string
  scrolled?: boolean
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: scrolled ? "blur(16px)" : "none",
        backgroundColor: scrolled ? "hsla(var(--background) / 0.8)" : "hsla(var(--background) / 0)",
        borderColor: scrolled ? "hsl(var(--border))" : "hsla(var(--background) / 0)",
        y: scrolled ? 8 : 0, // A bit less vertical movement for mobile
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className={cn(
        "relative z-50 mx-auto flex w-[calc(100%-2rem)] flex-col items-center justify-between rounded-2xl border bg-transparent lg:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

// Mobile Navbar Header (the visible part)
export const MobileNavHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex w-full flex-row items-center justify-between p-2", className)}>{children}</div>
}

// Mobile Navbar Menu (the dropdown part)
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode
  className?: string
  isOpen: boolean
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={cn(
            "absolute inset-x-0 top-full z-50 mt-2 flex w-full flex-col items-start justify-start gap-4 rounded-2xl border bg-background p-4 shadow-xl",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Mobile Menu Toggle Button
export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button onClick={onClick} className="p-2 -mr-2">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={isOpen ? "x" : "menu"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

// Logo Component
export const NavbarLogo = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative z-20 flex items-center space-x-2 text-sm font-normal text-foreground">{children}</div>
}
