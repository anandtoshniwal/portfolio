"use client"

import ProjectCard from "../projectCard"
import useEmblaCarousel from 'embla-carousel-react'
import React from "react"

export default function ProjectSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  
    const scrollPrev = React.useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = React.useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
  
    return (
      <div className="relative  sm:px-0">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            <div className="flex-[0_0_75.666%] min-w-0 pl-4 sm:pl-0 sm:flex-none sm:w-1/2 md:w-1/4">
              <ProjectCard />
            </div>
            <div className="flex-[0_0_75.666%] min-w-0 pl-4 sm:pl-0 sm:flex-none sm:w-1/2 md:w-1/4">
              <ProjectCard />
            </div>
            <div className="flex-[0_0_75.666%] min-w-0 pl-4 sm:pl-0 sm:flex-none sm:w-1/2 md:w-1/4">
              <ProjectCard />
            </div>
            <div className="flex-[0_0_75.666%] min-w-0 pl-4 sm:pl-0 sm:flex-none sm:w-1/2 md:w-1/4">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    )
  }