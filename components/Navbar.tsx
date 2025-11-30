'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg' : 'bg-secondary'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="relative group">
            <div className="text-2xl font-bold text-primary animate-pulse font-cinzel">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient">
                  Gabrihell Services
                </span>
                {/* Efeito de brilho */}
                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent opacity-50 animate-pulse">
                  Gabrihell Services
                </span>
              </span>
            </div>
            {/* Partículas de fogo */}
            <div className="absolute -top-1 left-0 w-full h-full pointer-events-none overflow-hidden">
              <span className="absolute top-0 left-1/4 w-1 h-1 bg-orange-500 rounded-full animate-fire-particle-1 opacity-0"></span>
              <span className="absolute top-0 left-1/2 w-1 h-1 bg-red-500 rounded-full animate-fire-particle-2 opacity-0"></span>
              <span className="absolute top-0 left-3/4 w-1 h-1 bg-yellow-500 rounded-full animate-fire-particle-3 opacity-0"></span>
            </div>
          </div>
          <ul className="flex gap-8">
            <li>
              <a href="#home" className="text-white hover:text-primary transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-primary transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-primary transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
