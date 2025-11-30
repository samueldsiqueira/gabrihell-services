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
        <div className="flex justify-center mb-6">
          <Image
            src="/Animated GIFs/Creatures/Ferumbras_3x.gif"
            alt="Ferumbras"
            width={192}
            height={192}
            className="drop-shadow-2xl"
            unoptimized
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary drop-shadow-lg">
          Gabrihell Services
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white font-semibold drop-shadow-md">
          Serviços Profissionais de Hunt no Tibia
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
          Experiência, qualidade e segurança para seu personagem
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  )
}
