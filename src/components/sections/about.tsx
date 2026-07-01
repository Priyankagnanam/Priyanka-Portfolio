"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Shield, Brain, Sparkles, Zap } from "lucide-react"
import Reveal from "@/components/effects/reveal"
import { aboutContent } from "@/data/personal"

const iconMap: Record<string, React.ReactNode> = {
  Passion: <Sparkles className="h-5 w-5" />,
  "Full Stack": <Code2 className="h-5 w-5" />,
  "UI/UX": <Palette className="h-5 w-5" />,
  "Cyber Security": <Shield className="h-5 w-5" />,
  "AI & Learning": <Brain className="h-5 w-5" />,
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Who <span className="text-gradient">I Am</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutContent.intro}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutContent.passion}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutContent.goals}
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="grid gap-4">
              {aboutContent.details.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  whileHover={{ x: 5, scale: 1.01 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {iconMap[item.label] || <Zap className="h-5 w-5" />}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">
                      {item.label}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
