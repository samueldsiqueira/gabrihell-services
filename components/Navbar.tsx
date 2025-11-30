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
          <div className="text-2xl font-bold text-primary">
            Gabrihell Services
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
