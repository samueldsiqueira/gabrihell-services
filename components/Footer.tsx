export default function Footer() {
  return (
    <footer className="bg-tibia-bg tibia-texture-dark text-tibia-gray py-8 border-t-2 border-tibia-bgLight">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-tibia-yellow">&copy; 2024 Gabrihell Services. Todos os direitos reservados.</p>
        <p className="text-sm text-tibia-gray mb-3">
          Serviço não oficial. Tibia é marca registrada da CipSoft GmbH.
        </p>
        <p className="text-sm text-tibia-cyan">
          Site desenvolvido por{' '}
          <a
            href="https://my-landing-olive.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tibia-purple hover:text-tibia-yellow transition-colors font-semibold drop-shadow-[0_0_5px_rgba(200,100,255,0.5)]"
          >
            Samuel D' Siqueira
          </a>
        </p>
      </div>
    </footer>
  )
}
