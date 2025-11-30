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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 border-b-2 tibia-texture-dark ${
      scrolled ? 'bg-tibia-bg/95 backdrop-blur-sm shadow-lg border-tibia-bgLight' : 'bg-tibia-bg border-tibia-bgLight'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="relative group">
            <div className="text-2xl font-bold animate-pulse font-cinzel">
              <span className="relative inline-block">
                <span className="relative z-10 text-tibia-yellow drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">
                  Gabrihell Services
                </span>
                {/* Efeito de brilho */}
                <span className="absolute inset-0 blur-sm text-tibia-yellow opacity-50 animate-pulse">
                  Gabrihell Services
                </span>
              </span>
            </div>
            {/* Partículas estilo Tibia */}
            <div className="absolute -top-1 left-0 w-full h-full pointer-events-none overflow-hidden">
              <span className="absolute top-0 left-1/4 w-1 h-1 bg-tibia-orange rounded-full animate-fire-particle-1 opacity-0 shadow-[0_0_5px_rgba(255,140,0,0.8)]"></span>
              <span className="absolute top-0 left-1/2 w-1 h-1 bg-tibia-yellow rounded-full animate-fire-particle-2 opacity-0 shadow-[0_0_5px_rgba(255,255,0,0.8)]"></span>
              <span className="absolute top-0 left-3/4 w-1 h-1 bg-tibia-orange rounded-full animate-fire-particle-3 opacity-0 shadow-[0_0_5px_rgba(255,140,0,0.8)]"></span>
            </div>
          </div>
          <ul className="flex gap-8">
            <li>
              <a href="#home" className="text-tibia-gray hover:text-tibia-purple transition-colors font-semibold">
                Início
              </a>
            </li>
            <li>
              <a href="#services" className="text-tibia-gray hover:text-tibia-purple transition-colors font-semibold">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" className="text-tibia-gray hover:text-tibia-purple transition-colors font-semibold">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
