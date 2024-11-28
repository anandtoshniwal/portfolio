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
    <div className="w-full   mx-auto  py-12">
      <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="p-8">
          <div className="relative">
            <div className="flex flex-col items-center text-center space-y-6">
              <blockquote className="text-lg font-medium text-muted-foreground max-w-2xl">
                "{testimonials[currentIndex]?.content}"
              </blockquote>
              <p className="text-primary font-semibold">{testimonials[currentIndex]?.author}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm shadow-md pointer-events-auto"
                onClick={handlePrevious}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm shadow-md pointer-events-auto"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-4' : 'bg-primary/30'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}