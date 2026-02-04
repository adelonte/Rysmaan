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

## Design Specifications (Constructable.ai-inspired)

### Typography
- **H1 (Hero)**: `text-[32px] md:text-[48px]`, `font-bold`, `leading-[1.15]`, `tracking-[-0.02em]`
- **H2 (Sections)**: `text-[28px] md:text-[40px]`, `font-bold`, `leading-[1.2]`
- **Feature Titles**: `text-[24px] md:text-[32px]`, `font-bold`
- **Card Titles**: `text-[16px]`, `font-bold`
- **Body Text**: `text-[15px]-[18px]`, `leading-[1.6]`, `text-gray-500`
- **Font Family**: Inter (via @nuxt/fonts)

### Spacing
- **Section Gaps**: `gap-12 md:gap-20 lg:gap-32`
- **Container Padding**: `px-4 md:px-8 xl:px-16`
- **Section Padding**: `py-20 md:py-28`

### Colors
- **Primary**: Navy blue RGB(0, 75, 141) - `#004B8D`
- **Highlighted Text**: `text-primary-500` for accent words
- **Body Text**: `text-gray-500`

### Sticky Scroll Feature (Offerland-style)
- Desktop: Full-viewport sections with text (2/5 width) and images (3/5 width, 70vh height)
- Each feature section takes up full screen height (h-screen)
- **JavaScript-based scroll locking**: Sections stay completely still when scrolling
- **Scroll threshold**: Requires accumulated scroll effort (500px delta) before transitioning
- Progress indicators (dots) show current feature and allow click navigation
- IntersectionObserver tracks which section is visible
- Alternating left/right layout for visual variety
- Mobile: Falls back to regular stacked layout

## Recent Changes
- 2026-02-04: Implemented JavaScript-based scroll locking (offerland-style) with 150px scroll threshold and edge case handling
- 2026-02-04: Resized feature proportions: images take 3/5 width (col-span-3), text takes 2/5 width (col-span-2) using 5-column grid
- 2026-02-04: Refined all typography with precise pixel values to match Constructable.ai exactly (48px H1 font-bold, 18px subheading, tracking-[-0.02em])
- 2026-02-04: Added black "See it in action" CTA button with arrow in hero section
- 2026-02-04: Added blue highlight to "Simplified" word in H1
- 2026-02-04: Updated all styling to match Constructable.ai specifications (Inter font, h-16 header)
- 2026-02-04: Added @nuxt/fonts module for Inter font family
- 2025-12-23: Configured for Replit environment (port 5000, HMR settings)
