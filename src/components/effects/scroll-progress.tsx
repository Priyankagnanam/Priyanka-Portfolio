"use client"

import { useScrollPosition } from "@/hooks/use-scroll-position"

export default function ScrollProgress() {
  const { scrollProgress } = useScrollPosition()

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9998]">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
