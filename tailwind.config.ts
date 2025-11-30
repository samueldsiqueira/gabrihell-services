import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4af37',
        secondary: '#1a1a2e',
        accent: '#16213e',
        // Cores do Tibia
        tibia: {
          bg: '#2b2b2b',
          bgLight: '#3a3a3a',
          yellow: '#ffff00',
          cyan: '#00ffff',
          purple: '#c864ff',
          green: '#00ff00',
          orange: '#ff8c00',
          red: '#ff0000',
          white: '#ffffff',
          gray: '#c0c0c0',
        },
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        martel: ['var(--font-martel)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
