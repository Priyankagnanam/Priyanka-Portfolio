"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import ThemeToggle from "@/components/effects/theme-toggle"
import { navLinks } from "@/data/personal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 px-4 md:px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold"
        >
          <span className="text-gradient">PG</span>
          <span className="text-muted-foreground">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <a
            href="/resume.pdf"
            download="Priyanka_G_Resume.pdf"
            className="ml-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-200 shadow-sm shadow-primary/20"
          >
            Resume ↓
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="h-10 w-10 rounded-xl border border-border flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
