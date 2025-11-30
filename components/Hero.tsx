import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Illustrations/Artworks/ClientArtworkSummer2024.jpg"
          alt="Tibia Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-accent/90" />
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
            {/* Aura de fogo ao redor do Ferumbras */}
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 opacity-50 animate-pulse rounded-full"></div>
          </div>
        </div>
        
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-7xl font-bold relative font-cinzel">
            <span className="relative inline-block">
              {/* Texto principal com gradiente animado */}
              <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent animate-gradient-slow drop-shadow-2xl">
                Gabrihell Services
              </span>
              {/* Camada de brilho */}
              <span className="absolute inset-0 blur-md bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent opacity-60 animate-pulse">
                Gabrihell Services
              </span>
              {/* Camada de sombra com fogo */}
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent opacity-40">
                Gabrihell Services
              </span>
            </span>
          </h1>
          
          {/* Partículas de fogo flutuantes */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <span className="absolute top-0 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-fire-float-1 opacity-0 shadow-lg shadow-orange-500"></span>
            <span className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-fire-float-2 opacity-0 shadow-lg shadow-red-500"></span>
            <span className="absolute top-1/2 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-fire-float-3 opacity-0 shadow-lg shadow-yellow-500"></span>
            <span className="absolute bottom-0 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-fire-float-4 opacity-0 shadow-lg shadow-orange-600"></span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-4 text-white font-semibold drop-shadow-md">
          Serviços Profissionais de Hunt no Tibia
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
          Experiência, qualidade e segurança para seu personagem
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 animate-gradient"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  )
}
