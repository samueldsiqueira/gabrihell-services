'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const stats = [
  { number: '500+', label: 'Clientes Satisfeitos', icon: '👥' },
  { number: '1000+', label: 'Serviços Realizados', icon: '⚔️' },
  { number: '99%', label: 'Taxa de Satisfação', icon: '⭐' },
  { number: '24/7', label: 'Suporte Disponível', icon: '💬' }
]

export default function References() {
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
    <section id="references" ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary to-accent">
      <div className="container mx-auto px-4">
        {/* Estatísticas */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Nossos Números
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Resultados que comprovam nossa excelência e compromisso com cada cliente
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center transition-all duration-500 hover:bg-white/20 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grupo de Referências */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Referências e Comunidade
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Entre no nosso grupo do WhatsApp e veja depoimentos reais de clientes satisfeitos
          </p>
          <div
            className={`max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-500 p-6 rounded-full">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Grupo de Referências no WhatsApp
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Junte-se ao nosso grupo exclusivo e converse com outros clientes, veja avaliações reais, tire dúvidas e acompanhe promoções especiais.
              </p>
              <a
                href="https://chat.whatsapp.com/SEU_LINK_DE_CONVITE_AQUI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Entrar no Grupo de Referências
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Mais de 200 membros ativos compartilhando experiências
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para Evoluir no Tibia?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Junte-se a centenas de jogadores satisfeitos e alcance seus objetivos com nossos serviços profissionais.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
