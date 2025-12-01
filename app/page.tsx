'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ServiceDetails from '@/components/ServiceDetails'
import References from '@/components/References'
import Recommended from '@/components/Recommended'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ServiceDetails />
      <References />
      <Recommended />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
