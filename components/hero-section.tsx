"use client"

import type React from "react"
import { useRef, useState, Suspense, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Html } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"
import { gsap } from "gsap"

function Particles(props: any) {
  const ref = useRef<any>()
  // Corrected: 5000 points * 3 coordinates per point = 15000 elements
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffffff" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

interface HeroSectionProps {
  data: {
    name: string
    tagline: string
    description: string
  }
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 },
    )
    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 },
    )
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 },
    )
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.1 },
    )
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Particles />
          {/* <OrbitControls enableZoom={false} /> */}
        </Suspense>
        <Html fullscreen>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black/30 dark:bg-black/50">
            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
              Hi, I&apos;m {data.name}
            </h1>
            <p ref={taglineRef} className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 drop-shadow-md">
              {data.tagline}
            </p>
            <p ref={descriptionRef} className="max-w-2xl text-base md:text-lg lg:text-xl mb-8 drop-shadow-sm">
              {data.description}
            </p>
            <div ref={buttonsRef} className="flex space-x-4">
              <Button
                className="px-6 py-3 text-lg md:text-xl rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                className="px-6 py-3 text-lg md:text-xl rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </Html>
      </Canvas>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="text-white animate-bounce"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </Button>
      </div>
    </section>
  )
}
