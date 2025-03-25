"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface AutoCarouselProps {
  children: React.ReactNode[]
  speed?: number // 픽셀/초
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function AutoCarousel({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: AutoCarouselProps) {
  const [width, setWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // 컨테이너 너비 계산
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [children])

  // 애니메이션 속성 계산
  const duration = width / speed // 초 단위
  const directionFactor = direction === "left" ? -1 : 1

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={{
          x: isPaused ? "0%" : `${directionFactor * width}px`,
        }}
        transition={{
          duration: isPaused ? 0 : duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

