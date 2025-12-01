# Technology Stack

## Framework & Runtime
- **Next.js 14.0.4** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Google Fonts** - Cinzel (headings) and Martel (body text)

## Assets & Media
- **Next.js Image** - Optimized image handling (unoptimized: true for GIFs)
- Extensive Tibia game assets (GIFs, illustrations, emotes)
- Custom CSS animations for Tibia-themed effects

## Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

### Deployment
- **Vercel** - Recommended deployment platform
- Automatic Next.js detection and deployment
- Push to GitHub triggers automatic deployment

## Configuration Notes
- Images are unoptimized to support animated GIFs
- Portuguese (pt-BR) locale configured
- Custom Tailwind theme with Tibia color palette
- CSS animations for fire effects and particle systems