'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

interface Project {
  teaser_image: string
  teaser_desc: string
  image?: string
  altText: string
  title: string
  href: string
  description?: string
  featured: boolean
}
const ProjectCard = ({ project }: { project: Project }) => {
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
    <Link href={project.href}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="relative w-full h-64 group cursor-pointer"
      >
        <Image
          src={project.teaser_image}
          alt={project.altText}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
          <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mb-2">
            {project.title}
          </h3>
          <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            {project.teaser_desc}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProjectCard;
