"use client"

import { useState, useEffect, useRef } from "react"

export function useActiveSection(sectionIds: string[], rootMargin = "-50% 0px -50% 0px") {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin },
    )

    const currentObserver = observer.current

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        currentObserver.observe(element)
      }
    })

    return () => {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }
  }, [sectionIds, rootMargin])

  return activeSection
}
