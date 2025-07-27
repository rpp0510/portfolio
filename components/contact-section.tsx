"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Card, CardContent } from "./ui/card"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

interface ContactSectionProps {
  data: {
    name: string
    location: string
    phone: string
    email: string
    linkedin: string
    github: string
  }
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const sectionRef = useRef(null)
  const contactItemRefs = useRef<(HTMLDivElement | null)[]>([])

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

    contactItemRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
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
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-background text-foreground"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <Card className="p-6 md:p-8">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div ref={(el) => (contactItemRefs.current[0] = el)} className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href={`mailto:${data.email}`} className="text-muted-foreground hover:underline">
                  {data.email}
                </a>
              </div>
            </div>
            <div ref={(el) => (contactItemRefs.current[1] = el)} className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a href={`tel:${data.phone}`} className="text-muted-foreground hover:underline">
                  {data.phone}
                </a>
              </div>
            </div>
            <div ref={(el) => (contactItemRefs.current[2] = el)} className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground">{data.location}</p>
              </div>
            </div>
            <div ref={(el) => (contactItemRefs.current[3] = el)} className="flex items-center gap-4">
              <Linkedin className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">LinkedIn</h3>
                <a
                  href={`https://linkedin.com/in/${data.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline"
                >
                  {data.linkedin}
                </a>
              </div>
            </div>
            <div ref={(el) => (contactItemRefs.current[4] = el)} className="flex items-center gap-4">
              <Github className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">GitHub</h3>
                <a
                  href={`https://github.com/${data.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline"
                >
                  {data.github}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
