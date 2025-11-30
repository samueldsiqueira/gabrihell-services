import type { Metadata } from 'next'
import { Cinzel, Martel } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const martel = Martel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-martel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gabrihell Services - Hunt Profissional no Tibia',
  description: 'Serviços profissionais de Hunt XP, Bestiary, Acessos e Tasks no Tibia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${martel.variable}`}>
      <body className={martel.className}>{children}</body>
    </html>
  )
}
