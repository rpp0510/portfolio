"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

interface AboutSectionProps {
  data: {
    title: string
    content: string
    stats: { value: string; label: string }[]
  }
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const sectionRef = useRef(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    statsRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    })
  }, [])

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-background text-foreground"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{data.title}</h2>
        <p className="text-lg md:text-xl text-center leading-relaxed mb-12">{data.content}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center p-6 border rounded-lg shadow-sm bg-card"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-lg md:text-xl text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
