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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto min-h-[80vh]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-left lg:pr-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="glow-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                    Ritesh Patil
                  </span>
                </h1>

                <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-white/90 leading-tight">
                  Aspiring AI/ML Engineer & Data Scientist
                </h2>
              </div>

              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"></div>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                Passionate about AI innovation, seeking opportunities to apply machine learning expertise and create
                intelligent solutions that drive business impact
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="group glow-button bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="group border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 backdrop-blur-sm transition-all duration-300"
                >
                  <Brain className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Middle Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-96 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Main photo container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-purple-800/30 rounded-full blur-xl opacity-60 animate-pulse"></div>

                {/* Photo frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/40 shadow-2xl shadow-purple-500/20">
                  <Image
                    src="/images/ritesh-photo.jpg"
                    alt="Ritesh Patil"
                    width={384}
                    height={480}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full blur-sm"
                ></motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400/40 rounded-full blur-sm"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-purple-500/60 rounded-full flex justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
