"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/effects/reveal"
import { skills } from "@/data/personal"
import { Code2, Server, Database, Wrench, Brain } from "lucide-react"

const categoryMeta = {
  frontend: { icon: Code2, label: "Frontend & UI", color: "from-primary to-secondary", desc: "Web interfaces & design systems" },
  backend: { icon: Server, label: "Backend & Languages", color: "from-secondary to-accent", desc: "Server-side logic & algorithms" },
  database: { icon: Database, label: "Databases & Cloud", color: "from-accent to-primary", desc: "Data persistence & cloud infra" },
  tools: { icon: Wrench, label: "AI, Tools & DevOps", color: "from-primary to-blue-500", desc: "Dev tools, AI libraries & ops" },
}

function SkillBar({ name, level, index, color }: { name: string; level: number; index: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted/60 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
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
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              A versatile skill set spanning AI/ML, full-stack development, databases, and cybersecurity — built through coursework, internships, and independent projects.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {(["frontend", "backend", "database", "tools"] as const).map(
            (category, catIdx) => {
              const meta = categoryMeta[category]
              const Icon = meta.icon
              return (
                <Reveal key={category} delay={catIdx * 0.08} direction="up">
                  <div className="p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/30">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${meta.color} bg-opacity-20 flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{meta.label}</h3>
                        <p className="text-xs text-muted-foreground">{meta.desc}</p>
                      </div>
                    </div>
                    <div className="space-y-3.5">
                      {skills[category].map((skill, idx) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          index={idx}
                          color={meta.color}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            }
          )}
        </div>

        {/* Soft Skills */}
        <Reveal delay={0.2}>
          <div className="p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.04] via-secondary/[0.04] to-accent/[0.04] backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">
                <span className="text-gradient">Research & Professional Skills</span>
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.soft.map((skill, idx) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-sm font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-all"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
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
