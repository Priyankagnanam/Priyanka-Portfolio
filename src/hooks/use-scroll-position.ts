"use client"

import { useEffect, useState } from "react"

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0

      setScrollY(currentScrollY)
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrollY, scrollProgress }
}
