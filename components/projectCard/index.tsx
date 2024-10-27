'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const ProjectCard = ({ src, alt }: { src: string; alt: string }) => {
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
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="rounded-lg object-cover w-full h-64"
      />
    </motion.div>
  )
}

export default ProjectCard;