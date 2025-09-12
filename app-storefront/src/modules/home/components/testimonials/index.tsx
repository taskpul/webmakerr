'use client'

import { useEffect, useState } from 'react'
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

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center py-12">
        <div className="flex items-center gap-x-1 rounded-full border border-ui-border-base px-3 py-1">
          <Text className="text-small-regular text-ui-fg-subtle">Testimonials</Text>
        </div>
        <Heading
          level="h2"
          className="mt-4 text-center text-3xl font-medium"
        >
          Don't just take our word for it
        </Heading>
        <Text className="mt-6 max-w-2xl text-center text-base text-ui-fg-subtle">
          Our users are our best ambassadors. Discover why we're the top choice for scheduling meetings.
        </Text>
        <div className="relative mt-8 w-full max-w-3xl overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="rounded-lg border border-ui-border-base bg-ui-bg-subtle p-6 shadow-none">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

