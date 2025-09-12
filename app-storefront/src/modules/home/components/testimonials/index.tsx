'use client'

import { useEffect, useRef, useState } from 'react'
import { Heading, Text } from '@medusajs/ui'
import { User } from '@medusajs/icons'

const testimonials = [
  {
    quote:
      "Just gave it a go and it's definitely the easiest meeting I've ever scheduled!",
    name: 'Avi Minisri',
    title: 'CEO, Tweets',
    avatar: '',
  },
  {
    quote:
      "I finally made the move to Cal after I couldn't find how to run a report on the Calendly dashboard.",
    name: 'Alex Wilson',
    title: 'Co-founder, CX Studios',
    avatar: '',
  },
  {
    quote:
      'Cal makes scheduling with clients painless. The automation saves us hours each week.',
    name: 'Morgan Reed',
    title: 'Head of Operations, Flowbase',
    avatar: '',
  },
]

const GAP = 32

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [slideHeight, setSlideHeight] = useState(0)

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth)
        setSlideHeight(slideRef.current.offsetHeight)
      }
    }

    resize()

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const baseTranslate = containerWidth / 2 - slideWidth / 2

  const getTranslate = (i: number) => {
    const position = (i - index + testimonials.length) % testimonials.length
    if (position === 0) {
      return baseTranslate
    }
    if (position === 1) {
      return baseTranslate + slideWidth + GAP
    }
    if (position === testimonials.length - 1) {
      return baseTranslate - (slideWidth + GAP)
    }
    return baseTranslate
  }

  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center py-12">
        <div className="flex items-center gap-x-1 rounded-full border border-ui-border-base px-3 py-1">
          <Text className="text-small-regular text-ui-fg-subtle">Testimonials</Text>
        </div>
        <Heading
          level="h2"
          className="mt-4 text-center text-3xl font-bold leading-10"
        >
          Don't just take our word for it
        </Heading>
        <Text className="mt-6 max-w-2xl text-center text-base text-ui-fg-subtle">
          Our users are our best ambassadors. Discover why we're the top choice for scheduling meetings.
        </Text>
        <div
          ref={containerRef}
          className="relative mt-8 w-full max-w-5xl overflow-hidden"
          style={{ height: slideHeight }}
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-ui-bg-base to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-ui-bg-base to-transparent" />
          {testimonials.map((t, i) => {
            const translate = getTranslate(i)
            return (
              <div
                key={i}
                ref={i === 0 ? slideRef : undefined}
                className={`absolute top-0 w-[360px] transition-transform duration-500 ${
                  i === index ? 'z-10' : 'z-0'
                }`}
                style={{ transform: `translateX(${translate}px)` }}
              >
                <div
                  className={`h-full rounded-lg border border-ui-border-base p-6 transition-all ${
                    i === index
                      ? 'bg-ui-bg-base shadow-md'
                      : 'bg-ui-bg-subtle opacity-50'
                  }`}
                >
                  <Text className="text-base">"{t.quote}"</Text>
                  <div className="mt-4 flex items-center gap-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-ui-border-base bg-ui-bg-subtle">
                      <User className="h-5 w-5 text-ui-fg-subtle" />
                    </div>
                    <div className="flex flex-col">
                      <Text className="text-small-regular font-medium">{t.name}</Text>
                      <Text className="text-small-regular text-ui-fg-subtle">
                        {t.title}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonials

