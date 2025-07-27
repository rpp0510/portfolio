"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Card, CardContent } from "./ui/card"
import { CheckCircle } from "lucide-react"

interface CertificationsSectionProps {
  data: string[]
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ data }) => {
  const sectionRef = useRef(null)
  const certRefs = useRef<(HTMLLIElement | null)[]>([])

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

    certRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
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
      id="certifications"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-muted text-foreground"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-4">
              {data.map((cert, index) => (
                <li
                  key={cert}
                  ref={(el) => (certRefs.current[index] = el)}
                  className="flex items-start gap-3 text-lg md:text-xl"
                >
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
