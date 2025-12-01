'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const services = [
  {
    id: 'hunt-xp',
    creature: '/Animated GIFs/Creatures/Dragon_3x.gif',
    title: 'Hunt XP',
    description: 'Maximize sua experiência com hunts eficientes e seguras'
  },
  {
    id: 'bestiary',
    creature: '/Animated GIFs/Creatures/Demon_3x.gif',
    title: 'Hunt Bestiary',
    description: 'Complete seu bestiary com hunts focadas e estratégicas'
  },
  {
    id: 'ks',
    creature: '/Animated GIFs/Creatures/Skeleton_3x.gif',
    title: 'KS',
    description: 'Atrapalhe hunteds, suba de rank ou conquiste seu planilhado'
  },
  {
    id: 'acessos',
    creature: '/Animated GIFs/Creatures/BlueDjinn_3x.gif',
    title: 'Acessos',
    description: 'Desbloqueie áreas importantes do jogo com segurança'
  },
  {
    id: 'tasks',
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
    <section id="services" ref={sectionRef} className="relative py-24 bg-tibia-bgLight tibia-texture">
      {/* Gradiente superior suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-tibia-bg via-tibia-bg/50 to-transparent pointer-events-none"></div>
      {/* Gradiente inferior suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tibia-bg via-tibia-bg/50 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-tibia-yellow font-cinzel drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={`#${service.id}`}
              className={`bg-tibia-bg tibia-texture-dark p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-tibia-purple/30 transition-all duration-500 hover:-translate-y-2 border-2 border-tibia-bgLight hover:border-tibia-purple cursor-pointer ${
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
              <h3 className="text-2xl font-bold mb-3 text-tibia-yellow text-center font-cinzel">
                {service.title}
              </h3>
              <p className="text-tibia-gray text-center">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
