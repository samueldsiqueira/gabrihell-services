# Project Structure

## Directory Organization

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tibia animations
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Contact.tsx        # Contact section with social links
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section with animated elements
│   ├── Navbar.tsx         # Navigation bar
│   ├── References.tsx     # Client references/testimonials
│   ├── ServiceDetails.tsx # Detailed service descriptions
│   ├── Services.tsx       # Services overview
│   └── WhatsAppButton.tsx # Floating WhatsApp contact button
├── public/                # Static assets
│   ├── Animated GIFs/     # Tibia creature and effect animations
│   ├── Emotes/           # Tibia emote assets
│   ├── Illustrations/    # Tibia artwork and backgrounds
│   └── Tibia Logo/       # Official Tibia branding
└── .kiro/steering/       # AI assistant guidance documents
```

## Component Architecture

### Page Structure
- **Single-page application** with smooth scrolling navigation
- **Component-based sections** imported into main page
- **Client-side rendering** for interactive elements

### Component Patterns
- **Functional components** with TypeScript
- **Hooks usage** for state management (useState, useEffect)
- **Responsive design** with Tailwind breakpoints
- **Accessibility** with proper ARIA labels and semantic HTML

### Asset Management
- **Next.js Image** component for optimized loading
- **Unoptimized images** for animated GIFs
- **Organized asset folders** by type (creatures, effects, illustrations)
- **Multiple resolutions** available (1x, 2x, 3x scaling)

## Styling Conventions

### Tibia Theme Integration
- **Custom color palette** defined in Tailwind config
- **Tibia-specific classes** (tibia-texture, tibia-texture-dark)
- **Animation classes** for fire effects and particles
- **Drop shadows** with Tibia color glows

### CSS Organization
- **Tailwind utilities** for component styling
- **Custom animations** in globals.css
- **Consistent spacing** and typography scales
- **Responsive breakpoints** (md:, lg: prefixes)

## File Naming
- **PascalCase** for React components
- **camelCase** for TypeScript files
- **kebab-case** for asset files where applicable
- **Descriptive names** reflecting component purpose