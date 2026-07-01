"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Briefcase, FolderGit, BookOpen } from "lucide-react"
import Reveal from "@/components/effects/reveal"
import { achievements } from "@/data/personal"

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  briefcase: <Briefcase className="h-6 w-6" />,
  "folder-git": <FolderGit className="h-6 w-6" />,
  "book-open": <BookOpen className="h-6 w-6" />,
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
              Achievements
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Milestones</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} direction="up">
              <motion.div
                className="p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {iconMap[item.icon] || <Award className="h-6 w-6" />}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
