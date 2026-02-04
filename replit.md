# VendorGate Landing Page

## Overview
A modern landing page for VendorGate (also known as Rysmaan) built with Nuxt 3 and @nuxt/ui-pro. The app helps connect project managers with qualified vendors through competitive bidding.

## Project Architecture

### Tech Stack
- **Framework**: Nuxt 3 with Vue 3
- **UI Library**: @nuxt/ui-pro (includes Tailwind CSS)
- **Build Tool**: Vite

### Directory Structure
```
/
├── components/       # Vue components
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── HeroSection.vue
│   └── ...
├── layouts/          # Nuxt layouts
│   └── default.vue
├── pages/            # File-based routing
│   └── index.vue
├── public/           # Static assets
│   └── screenshots/
├── app.vue           # Root component
├── app.config.ts     # App configuration
└── nuxt.config.ts    # Nuxt configuration
```

## Development

### Running Locally
The dev server runs on port 5000:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

The build outputs to `.output/` directory.

## Configuration

### Port Configuration
- Development server: Port 5000 (configured for Replit proxy compatibility)
- HMR uses WSS protocol on port 443

## Recent Changes
- 2026-02-04: Updated all styling to match Constructable.ai specifications (Inter font, h-16 header, text-4xl/md:text-5xl font-semibold headings, gap-6/8/16/24 spacing, px-4/md:px-8/xl:px-16 container padding)
- 2026-02-04: Added @nuxt/fonts module for Inter font family
- 2025-12-23: Configured for Replit environment (port 5000, HMR settings)
