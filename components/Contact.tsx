import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Illustrations/Artworks/WebsiteArtworkWinter2024.jpg"
          alt="Tibia Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary drop-shadow-lg">
          Entre em Contato
        </h2>
        <p className="text-xl mb-8 text-gray-300">
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

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/5537984010698"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-3 w-64"
          >
            <span className="text-2xl">📱</span>
            WhatsApp
          </a>
          <a
            href="https://discord.gg/seu-servidor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-3 w-64"
          >
            <span className="text-2xl">💬</span>
            Discord
          </a>
        </div>
      </div>
    </section>
  )
}
