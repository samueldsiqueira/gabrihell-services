import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
