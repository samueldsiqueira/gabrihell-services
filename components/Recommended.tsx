import Image from 'next/image'

export default function Recommended() {
  return (
    <section id="recommended" className="relative py-24 overflow-hidden bg-tibia-bgLight tibia-texture-dark">
      {/* Gradiente superior suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-tibia-bgLight via-tibia-bgLight/50 to-transparent pointer-events-none z-20"></div>
      {/* Gradiente inferior suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tibia-bg via-tibia-bg/50 to-transparent pointer-events-none z-20"></div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Illustrations/Artworks/WebsiteArtworkSummer2023.jpg"
          alt="Tibia Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-tibia-bgLight/90 tibia-texture-dark" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tibia-yellow drop-shadow-[0_0_15px_rgba(255,255,0,0.6)] font-cinzel">
            Serviços Recomendados
          </h2>
          <p className="text-xl text-tibia-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
            Parceiros de confiança para suas necessidades digitais
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {/* Card do Site */}
            <div className="relative group bg-tibia-bg/80 backdrop-blur-sm rounded-lg border-2 border-tibia-yellow/30 hover:border-tibia-yellow/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-tibia-yellow/20">
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-tibia-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 relative z-10">
                {/* Ícone/Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-tibia-purple to-tibia-cyan rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold font-mono">&lt;/&gt;</span>
                    </div>
                    {/* Partículas decorativas */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-tibia-yellow rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,0,0.8)]"></div>
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-tibia-yellow mb-2 text-center font-cinzel drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">
                  Desenvolvedor Fullstack
                </h3>

                {/* Descrição */}
                <p className="text-tibia-gray text-center mb-6 leading-relaxed">
                  Sites profissionais, landing pages e aplicações web completas. 
                  Desenvolvimento frontend e backend com qualidade e modernidade.
                </p>

                {/* Botão */}
                <div className="text-center">
                  <a
                    href="https://my-landing-olive.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-tibia-purple to-tibia-cyan hover:from-tibia-purple/80 hover:to-tibia-cyan/80 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-tibia-purple/30"
                  >
                    <span>Visitar Site</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Nota informativa */}
        <div className="text-center mt-8">
          <p className="text-tibia-gray/80 text-sm">
            Tem um serviço de qualidade? Entre em contato para ser recomendado aqui!
          </p>
        </div>
      </div>
    </section>
  )
}