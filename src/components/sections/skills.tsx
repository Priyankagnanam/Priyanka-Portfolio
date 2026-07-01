"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/effects/reveal"
import { skills } from "@/data/personal"
import { Code2, Server, Database, Wrench } from "lucide-react"

const categoryMeta = {
  frontend: { icon: Code2, label: "Frontend", color: "from-primary to-secondary" },
  backend: { icon: Server, label: "Backend", color: "from-secondary to-accent" },
  database: { icon: Database, label: "Database", color: "from-accent to-primary" },
  tools: { icon: Wrench, label: "Tools & DevOps", color: "from-primary to-blue-500" },
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted/60 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ delay: index * 0.06, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Skills
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {(["frontend", "backend", "database", "tools"] as const).map(
            (category, catIdx) => {
              const meta = categoryMeta[category]
              const Icon = meta.icon
              return (
                <Reveal key={category} delay={catIdx * 0.08} direction="up">
                  <div className="p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/30">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold">{meta.label}</h3>
                    </div>
                    <div className="space-y-3.5">
                      {skills[category].map((skill, idx) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          index={idx}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            }
          )}
        </div>

        <Reveal delay={0.2}>
          <div className="p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.04] via-secondary/[0.04] to-accent/[0.04] backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-center mb-8">
              <span className="text-gradient">Soft Skills</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.soft.map((skill, idx) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-xl border border-border/40 bg-card/50 text-sm font-medium text-foreground/80"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
