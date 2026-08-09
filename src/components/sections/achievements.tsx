"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/effects/reveal"
import { achievements } from "@/data/personal"

const iconMap: Record<string, string> = {
  "graduation-cap": "🎓",
  "award": "⭐",
  "briefcase": "💼",
  "folder-git": "🚀",
  "book-open": "📚",
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Academic milestones, industry recognitions, and personal wins from my engineering journey.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.12} direction="up">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-400 backdrop-blur-sm">
                  {/* Icon + Stat */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {iconMap[item.icon] || "✨"}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient leading-none">{item.stat}</div>
                      <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
