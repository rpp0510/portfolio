"use client"

import { useEffect, useState } from "react"

export const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsPointer(true)
    }

    const handleMouseUp = () => {
      setIsPointer(false)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    const handleMouseLeave = () => {
      setIsPointer(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  return (
    <div className="custom-cursor hidden md:block">
      <div className="cursor-dot" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
      <div
        className={`cursor-outline ${isPointer ? "expanded" : ""}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  )
}
