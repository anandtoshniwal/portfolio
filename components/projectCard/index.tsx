'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const ProjectCard = ({ src, alt, title }: { src: string; alt: string; title: string }) => {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 })
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="relative w-full h-64 group"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-lg object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  )
}

export default ProjectCard;