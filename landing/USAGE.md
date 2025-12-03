# VendorGate Landing Page - Usage Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   cd landing
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   The landing page will be available at `http://localhost:3001`

3. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

## Structure

```
landing/
├── app/
│   ├── components/       # Vue components
│   │   ├── AppHeader.vue         # Navigation header
│   │   ├── AppFooter.vue         # Footer with links
│   │   ├── HeroSection.vue       # Hero banner
│   │   ├── ValuePropsSection.vue # PM vs Vendor value props
│   │   ├── FeaturesSection.vue   # Feature grid
│   │   ├── HowItWorksSection.vue # Workflow steps
│   │   ├── TestimonialsSection.vue # Customer quotes
│   │   └── CTASection.vue        # Call-to-action
│   ├── layouts/
│   │   └── default.vue          # Main layout
│   └── pages/
│       └── index.vue            # Homepage
├── content/
│   └── landing.yml      # Content data (not currently used)
└── public/              # Static assets

```

## Customization

### Updating Content

Content is currently embedded in [app/pages/index.vue](app/pages/index.vue:4-154). To update:

1. Open `app/pages/index.vue`
2. Modify the `landingData` object (lines 4-154)
3. Save and the page will hot-reload

**Sections you can customize:**
- **hero**: Main headline, description, and CTA buttons
- **valueProps**: PM and Vendor value propositions
- **features**: 6 feature cards with icons
- **howItWorks**: Step-by-step workflows for PM and Vendor
- **testimonials**: Customer quotes (3 shown)
- **cta**: Bottom call-to-action section

### Updating Styles

Colors are configured in [nuxt.config.ts](nuxt.config.ts:11-14):
```typescript
ui: {
  colors: {
    primary: 'green',    // Matches VendorGate brand
    neutral: 'slate'     // Used for text and backgrounds
  }
}
```

### Adding New Sections

1. Create a new component in `app/components/`
2. Import and use it in `app/pages/index.vue`
3. Add the data to the `landingData` object

## Components

All components use Nuxt UI 4.x components:

- **UContainer**: Max-width container
- **UButton**: CTA buttons
- **UIcon**: Lucide icons
- **UHeader**: Navigation header
- **UFooter**: Footer layout
- **UAvatar**: User avatars in testimonials
- **UColorModeButton**: Dark/light mode toggle

## Icons

Icons use the Lucide icon library via `@iconify`. Format: `i-lucide-{icon-name}`

Examples:
- `i-lucide-building-2`
- `i-lucide-briefcase`
- `i-lucide-file-text`

Browse icons: https://lucide.dev/icons/

## Deployment

This is a standalone Nuxt app that can be deployed independently:

### Netlify (Recommended)
1. Push the `landing/` folder to a Git repository
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.output/public`

### Vercel
1. Push to Git
2. Connect to Vercel
3. Build command: `npm run build`
4. Output directory: `.output/public`

### Static Hosting
```bash
npm run build
# Upload .output/public folder to any static host
```

## Notes

- The landing page runs on **port 3001** to avoid conflicts with the main VendorGate app (port 3000)
- Links to `/auth/login` and `/auth/signup` will need to point to your main app in production
- The YAML content file (`content/landing.yml`) is included but not currently used - it's there for future migration to Nuxt Content
- Dark mode is supported automatically via Nuxt UI

## Troubleshooting

**Port already in use:**
```bash
# Change port in package.json
"dev": "nuxt dev --port 3002"
```

**Build errors:**
```bash
# Clean install
rm -rf node_modules .nuxt
npm install
```

**Icons not showing:**
- Check that the icon name is correct (format: `i-lucide-{name}`)
- Icons are auto-imported, no need to install separately
