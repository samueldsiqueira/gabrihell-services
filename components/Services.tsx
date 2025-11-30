'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const services = [
  {
    creature: '/Animated GIFs/Creatures/Dragon_3x.gif',
    title: 'Hunt XP',
    description: 'Maximize sua experiência com hunts eficientes e seguras'
  },
  {
    creature: '/Animated GIFs/Creatures/Demon_3x.gif',
    title: 'Hunt Bestiary',
    description: 'Complete seu bestiary com hunts focadas e estratégicas'
  },
  {
    creature: '/Animated GIFs/Creatures/Skeleton_3x.gif',
    title: 'KS',
    description: 'Atrapalhe hunteds, suba de rank ou conquiste seu planilhado'
  },
  {
    creature: '/Animated GIFs/Creatures/BlueDjinn_3x.gif',
    title: 'Acessos',
    description: 'Desbloqueie áreas importantes do jogo com segurança'
  },
  {
    creature: '/Animated GIFs/Creatures/Minotaur_3x.gif',
    title: 'Tasks',
    description: 'Conclua suas tasks com eficiência e rapidez'
  }
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.creature}
                  alt={service.title}
                  width={96}
                  height={96}
                  className="drop-shadow-lg"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-secondary text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
