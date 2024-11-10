"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  author: string
  content: string
}

interface Testimonials {
    testimonials: Testimonial[]
}

export const Testimonial = ({testimonials}: Testimonials) => {
  const [currentIndex, setCurrentIndex] = useState(0)


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
   
      <div className="relative">
        <Card className="border-none shadow-none">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <p className="text-muted-foreground max-w-2xl mb-4">{testimonials[currentIndex].content}</p>
            {/* <h3 className="text-xl font-semibold mb-1">{testimonials[currentIndex].name}</h3> */}
            <p className="text-sm text-muted-foreground mb-4">{testimonials[currentIndex].author}</p>
          </CardContent>
        </Card>
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}