"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface LocomotiveScrollOptions {
  smooth?: boolean
  direction?: "vertical" | "horizontal"
  multiplier?: number
  lerp?: number
  class?: string
  initOnLoad?: boolean
  getDirection?: boolean
  getSpeed?: boolean
  tablet?: {
    smooth?: boolean
    direction?: "vertical" | "horizontal"
    breakpoint?: number
  }
  smartphone?: {
    smooth?: boolean
    direction?: "vertical" | "horizontal"
  }
}

export const useLocomotiveScroll = (options: LocomotiveScrollOptions = {}, deps: React.DependencyList = []) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null)

  useEffect(() => {
    // For now, we'll just return the ref without locomotive scroll
    // since it's causing issues in the preview environment
    return () => {}
  }, [scrollRef, ...deps])

  return { scrollRef, locomotiveScroll }
}
