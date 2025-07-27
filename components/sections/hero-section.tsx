"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Brain } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-purple-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-800/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="relative w-32 h-44 md:w-40 md:h-52 mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <Image
                src="/images/ritesh-photo.jpg"
                alt="Ritesh Patil"
                width={160}
                height={208}
                className="relative z-10 w-full h-full object-cover object-top rounded-full border-4 border-purple-500/30 shadow-2xl"
                priority
                style={{ borderRadius: "50%" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              <span className="glow-text">Ritesh Patil</span>
            </h1>

            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight">
              Aspiring AI/ML Engineer & Data Scientist
            </h2>

            <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl mx-auto leading-relaxed">
              Passionate about AI innovation, seeking opportunities to apply machine learning expertise and create
              intelligent solutions that drive business impact
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="default"
                size="default"
                onClick={() => scrollToSection("projects")}
                className="group glow-button bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Code className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={() => scrollToSection("contact")}
                className="group border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
              >
                <Brain className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-purple-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
