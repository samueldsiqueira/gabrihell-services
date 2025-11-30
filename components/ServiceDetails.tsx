'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const serviceDetails = [
  {
    id: 'hunt-xp',
    creature: '/Animated GIFs/Creatures/Dragon_3x.gif',
    title: 'Hunt XP',
    subtitle: 'Maximize sua Experiência',
    description: 'Oferecemos serviços profissionais de hunt focados em maximizar sua experiência por hora. Utilizamos as melhores rotas e estratégias testadas para garantir o melhor aproveitamento do seu tempo.',
    features: [
      'Hunts otimizadas para seu level e vocação',
      'Rotas eficientes com respawn rápido',
      'Uso estratégico de preys e boosts',
      'Relatórios detalhados de XP/hora',
      'Segurança e discrição garantidas'
    ],
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'bestiary',
    creature: '/Animated GIFs/Creatures/Demon_3x.gif',
    title: 'Hunt Bestiary',
    subtitle: 'Complete seu Bestiário',
    description: 'Serviço especializado em completar entradas do bestiary de forma rápida e eficiente. Focamos nas criaturas que você precisa, otimizando o tempo para alcançar seus objetivos.',
    features: [
      'Foco em criaturas específicas do seu interesse',
      'Estratégias para kills rápidos',
      'Acompanhamento do progresso em tempo real',
      'Conhecimento profundo de spawns',
      'Completion de charms prioritários'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'ks',
    creature: '/Animated GIFs/Creatures/Skeleton_3x.gif',
    title: 'KS (Kill Steal)',
    subtitle: 'Dominação Estratégica',
    description: 'Serviço de KS profissional para diversas finalidades: defesa de território, conquista de spawns, ou simplesmente para atrapalhar rivais. Atuamos com estratégia e eficiência.',
    features: [
      'Planejamento estratégico de ações',
      'Equipe experiente e coordenada',
      'Discrição e profissionalismo',
      'Diferentes níveis de intensidade',
      'Suporte para guerras de guild'
    ],
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 'acessos',
    creature: '/Animated GIFs/Creatures/BlueDjinn_3x.gif',
    title: 'Acessos',
    subtitle: 'Desbloqueie Novas Áreas',
    description: 'Realizamos todos os tipos de acessos do Tibia, desde os mais simples até os mais complexos. Economize tempo e evite frustrações com nossa experiência.',
    features: [
      'Todos os acessos principais do jogo',
      'Postman Missions, Djinn, Oramond, etc',
      'Execução rápida e segura',
      'Conhecimento de todos os requisitos',
      'Suporte para dúvidas pós-acesso'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'tasks',
    creature: '/Animated GIFs/Creatures/Minotaur_3x.gif',
    title: 'Tasks',
    subtitle: 'Conclua suas Missões',
    description: 'Completamos tasks de todos os NPCs do Tibia de forma eficiente. Ganhe pontos de task, acesso a bosses e recompensas valiosas sem perder tempo.',
    features: [
      'Tasks de Grizzly Adams completas',
      'Tasks de Killing in the Name of...',
      'Otimização de rotas para múltiplas tasks',
      'Acesso a boss rooms',
      'Maximização de recompensas'
    ],
    color: 'from-green-500 to-emerald-500'
  }
]

export default function ServiceDetails() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-tibia-bg tibia-texture-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-tibia-yellow font-cinzel drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]">
          Detalhes dos Serviços
        </h2>
        <p className="text-center text-tibia-cyan mb-16 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
          Conheça em detalhes cada um dos nossos serviços profissionais e descubra como podemos ajudar você a alcançar seus objetivos no Tibia.
        </p>

        <div className="space-y-20">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => {
                sectionRefs.current[service.id] = el
              }}
              className={`transition-all duration-700 ${
                visibleSections.has(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Imagem e Título */}
                <div className="lg:w-1/3">
                  <div className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-xl`}>
                    <div className="flex justify-center mb-4">
                      <Image
                        src={service.creature}
                        alt={service.title}
                        width={128}
                        height={128}
                        className="drop-shadow-2xl"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-white text-center mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-center text-lg">{service.subtitle}</p>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="lg:w-2/3">
                  <div className="bg-tibia-bgLight tibia-texture p-8 rounded-lg shadow-lg border-2 border-tibia-bg">
                    <p className="text-tibia-gray text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <h4 className="text-xl font-bold text-tibia-cyan mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
                      O que está incluído:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-tibia-green flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-tibia-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
