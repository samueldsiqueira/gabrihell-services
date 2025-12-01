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
    <section className="relative py-24 bg-tibia-bg tibia-texture-dark">
      {/* Gradiente superior suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-tibia-bgLight via-tibia-bgLight/50 to-transparent pointer-events-none"></div>
      {/* Gradiente inferior suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tibia-bgLight via-tibia-bgLight/50 to-transparent pointer-events-none"></div>
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
                    <ul className="space-y-3 mb-6">
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
                    
                    {/* Botão WhatsApp personalizado */}
                    <div className="flex justify-center mt-6">
                      <a
                        href={`https://wa.me/5537984010698?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-tibia-green hover:bg-tibia-green/80 text-tibia-bg px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-tibia-green/50 border-2 border-tibia-green/50"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Solicitar {service.title}
                      </a>
                    </div>
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
