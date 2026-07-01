"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Shape {
  id: number
  type: "circle" | "square" | "triangle"
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

const colors = [
  "rgba(99, 102, 241, 0.15)",
  "rgba(139, 92, 246, 0.15)",
  "rgba(236, 72, 153, 0.12)",
  "rgba(59, 130, 246, 0.12)",
  "rgba(168, 85, 247, 0.1)",
]

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const generated: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: (["circle", "square", "triangle"] as const)[
        Math.floor(Math.random() * 3)
      ],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }))
    setShapes(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && (
            <div
              className="w-full h-full rounded-full"
              style={{ background: shape.color }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="w-full h-full rounded-2xl"
              style={{ background: shape.color, transform: "rotate(45deg)" }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${shape.color}`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
