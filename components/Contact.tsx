import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-tibia-bg tibia-texture-dark">
      {/* Gradiente superior suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-tibia-bgLight via-tibia-bgLight/50 to-transparent pointer-events-none z-20"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Illustrations/Artworks/WebsiteArtworkWinter2024.jpg"
          alt="Tibia Background"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-tibia-bg/90 tibia-texture-dark" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tibia-yellow drop-shadow-[0_0_15px_rgba(255,255,0,0.6)] font-cinzel">
          Entre em Contato
        </h2>
        <p className="text-xl mb-8 text-tibia-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
          Escolha a melhor forma de falar conosco
        </p>
        
        {/* Criaturas decorativas */}
        <div className="flex justify-center gap-8 mb-8">
          <Image
            src="/Animated GIFs/Creatures/Demon_2x.gif"
            alt="Demon"
            width={64}
            height={64}
            className="drop-shadow-lg"
            unoptimized
          />
          <Image
            src="/Animated GIFs/Creatures/Dragon_2x.gif"
            alt="Dragon"
            width={64}
            height={64}
            className="drop-shadow-lg"
            unoptimized
          />
        </div>

        <div className="flex gap-6 justify-center items-center">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5537984010698"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-16 h-16 bg-tibia-green hover:bg-tibia-green/80 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-tibia-green/50 border-2 border-tibia-green/50"
            aria-label="WhatsApp"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-tibia-gray text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              WhatsApp
            </span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/seu-servidor"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-16 h-16 bg-tibia-purple hover:bg-tibia-purple/80 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-tibia-purple/50 border-2 border-tibia-purple/50"
            aria-label="Discord"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-tibia-gray text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Discord
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-16 h-16 bg-gradient-to-br from-tibia-purple via-tibia-red to-tibia-orange hover:opacity-80 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-tibia-purple/50 border-2 border-tibia-purple/50"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-tibia-gray text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
