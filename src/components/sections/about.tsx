"use client"

import { motion } from "framer-motion"
import { Code2, Shield, Brain, GraduationCap, Zap } from "lucide-react"
import Reveal from "@/components/effects/reveal"
import { aboutContent, personalInfo } from "@/data/personal"

const iconMap: Record<string, React.ReactNode> = {
  "Academic Standing": <GraduationCap className="h-5 w-5" />,
  "Computer Vision & AI": <Brain className="h-5 w-5" />,
  "Cloud & Full-Stack": <Code2 className="h-5 w-5" />,
  "Cybersecurity": <Shield className="h-5 w-5" />,
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
              {/* Profile Summary Card */}
              <div className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    PG
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Priyanka G</div>
                    <div className="text-xs text-primary font-medium">{personalInfo.role}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {aboutContent.intro}
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                {aboutContent.passion}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {aboutContent.goals}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Location", value: "Tamil Nadu, India", icon: "📍" },
                  { label: "Degree", value: "B.Tech IT (2027)", icon: "🎓" },
                  { label: "CGPA", value: "8.57 / 10.0", icon: "⭐" },
                  { label: "Focus", value: "AI, Cloud & Security", icon: "🎯" },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-2.5 p-3 rounded-xl bg-card/50 border border-border/50">
                    <span className="text-lg">{info.icon}</span>
                    <div>
                      <div className="text-xs text-muted-foreground">{info.label}</div>
                      <div className="text-xs font-semibold text-foreground">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
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
                    <h4 className="font-semibold mb-1 text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
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
