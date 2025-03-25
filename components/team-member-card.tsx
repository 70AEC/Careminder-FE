"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface TeamMemberProps {
  name: string
  position: string
  image: string
  bio: string[]
}

export default function TeamMemberCard({ name, position, image, bio }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="aspect-square w-full max-w-[240px] mx-auto rounded-lg overflow-hidden shadow-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={240}
          height={240}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay with info */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-careminder-800/90 to-careminder-800/70 flex flex-col justify-end p-4 text-white"
            >
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-careminder-200 mb-2">{position}</p>
              <div className="overflow-y-auto max-h-[120px] text-sm">
                <ul className="space-y-1">
                  {bio.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-careminder-300 mt-1.5 mr-1.5 flex-shrink-0"></span>
                      <span className="text-careminder-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Name and position outside the image */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-careminder-800">{name}</h3>
        <p className="text-careminder-600">{position}</p>
      </div>
    </div>
  )
}

