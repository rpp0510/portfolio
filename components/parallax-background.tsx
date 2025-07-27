"use client"

import { useEffect } from "react"

export function ParallaxBackground() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 2
      const yPercent = (clientY / innerHeight - 0.5) * 2

      const parallaxBg = document.querySelector(".parallax-bg") as HTMLElement
      const parallaxOverlay = document.querySelector(".parallax-overlay") as HTMLElement

      if (parallaxBg) {
        parallaxBg.style.transform = `translate(${xPercent * 10}px, ${yPercent * 10}px)`
      }

      if (parallaxOverlay) {
        parallaxOverlay.style.transform = `translate(${xPercent * 15}px, ${yPercent * 15}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div className="parallax-bg" />
      <div className="parallax-overlay" />
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
    </>
  )
}
