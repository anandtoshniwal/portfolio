'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function ProjectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-xs mx-auto"> {/* Center and limit the width */}
      <Card
        className="relative overflow-hidden cursor-pointer rounded-2xl w-full" // Use w-full for responsiveness
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64 w-full"> {/* Use relative height */}
          <Image
            src="https://picsum.photos/id/287/250/300"
            alt="Mountains with trees in the foreground"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-400 ease-in-out"
            style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
          />
        </div>
        <div
          className="absolute inset-0 flex items-end p-3 bg-black/60 transition-[clip-path] duration-400 ease-in-out"
          style={{
            clipPath: isHovered ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
          }}
        >
          <p
            className="text-2xl font-bold font-sans"
            style={{
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(to right, white, white)',
            }}
          >
            The Day
          </p>
        </div>
      </Card>
    </div>
  );
}
