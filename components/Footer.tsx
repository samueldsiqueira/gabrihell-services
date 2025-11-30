import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <Image
            src="/Animated GIFs/Creatures/Slime_2x.gif"
            alt="Slime"
            width={48}
            height={48}
            unoptimized
          />
          <Image
            src="/Animated GIFs/Creatures/Chicken_2x.gif"
            alt="Chicken"
            width={48}
            height={48}
            unoptimized
          />
          <Image
            src="/Animated GIFs/Creatures/Squirrel_2x.gif"
            alt="Squirrel"
            width={48}
            height={48}
            unoptimized
          />
        </div>
        <p className="mb-2">&copy; 2024 Gabrihell Services. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-400">
          Serviço não oficial. Tibia é marca registrada da CipSoft GmbH.
        </p>
      </div>
    </footer>
  )
}
