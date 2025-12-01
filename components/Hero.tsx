import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-tibia-bg tibia-texture-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Illustrations/Artworks/ClientArtworkWinter2021.jpg"
          alt="Tibia Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tibia-bg/95 to-tibia-bgLight/95 tibia-texture-dark" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-6 relative">
          <div className="relative animate-float">
            <Image
              src="/Animated GIFs/Creatures/Ferumbras_3x.gif"
              alt="Ferumbras"
              width={192}
              height={192}
              className="drop-shadow-2xl relative z-10"
              unoptimized
            />
            {/* Aura estilo Tibia */}
            <div className="absolute inset-0 blur-xl bg-tibia-orange opacity-40 animate-pulse rounded-full"></div>
          </div>
        </div>
        
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-7xl font-bold relative font-cinzel">
            <span className="relative inline-block">
              {/* Texto principal amarelo Tibia */}
              <span className="relative z-10 text-tibia-yellow drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]">
                Gabrihell Services
              </span>
              {/* Camada de brilho */}
              <span className="absolute inset-0 blur-md text-tibia-yellow opacity-60 animate-pulse">
                Gabrihell Services
              </span>
            </span>
          </h1>
          
          {/* Partículas estilo Tibia */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <span className="absolute top-0 left-1/4 w-2 h-2 bg-tibia-orange rounded-full animate-fire-float-1 opacity-0 shadow-[0_0_10px_rgba(255,140,0,0.8)]"></span>
            <span className="absolute top-1/4 right-1/4 w-2 h-2 bg-tibia-yellow rounded-full animate-fire-float-2 opacity-0 shadow-[0_0_10px_rgba(255,255,0,0.8)]"></span>
            <span className="absolute top-1/2 left-1/3 w-2 h-2 bg-tibia-orange rounded-full animate-fire-float-3 opacity-0 shadow-[0_0_10px_rgba(255,140,0,0.8)]"></span>
            <span className="absolute bottom-0 right-1/3 w-2 h-2 bg-tibia-yellow rounded-full animate-fire-float-4 opacity-0 shadow-[0_0_10px_rgba(255,255,0,0.8)]"></span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-4 text-tibia-cyan font-semibold drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          Serviços Profissionais de Hunt no Tibia
        </p>
        <p className="text-lg md:text-xl mb-8 text-tibia-gray drop-shadow-md">
          Experiência, qualidade e segurança para seu personagem
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-tibia-green hover:bg-tibia-green/80 text-tibia-bg px-8 py-3 rounded-lg font-bold hover:scale-105 transition-all shadow-lg shadow-tibia-green/50 hover:shadow-tibia-green/70 border-2 border-tibia-green/50"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  )
}
