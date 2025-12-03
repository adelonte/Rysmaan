# VendorGate Landing Page

A modern landing page for VendorGate built with Nuxt UI and Nuxt Content.

## Features

- Hero section with dual CTAs (PM and Vendor signup)
- Value propositions for both user types
- Feature showcase with icons
- How It Works workflows for PMs and Vendors
- Testimonials section
- Responsive design with dark mode
- YAML-based content management

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:3001`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Management

All content is managed through YAML files in the `/content` directory:

- `landing.yml` - Main landing page content (hero, features, testimonials, etc.)

Edit these files to update the landing page content without touching the code.

## Tech Stack

- Nuxt 4.1.0 - Full-stack Vue framework
- Nuxt UI 4.1.0 - Component library
- Nuxt Content 4.1.0 - File-based CMS
- TypeScript - Type safety
- Tailwind CSS - Styling

## Color Scheme

The landing page uses VendorGate's brand colors:
- Primary: Green
- Neutral: Slate

These can be customized in `nuxt.config.ts`.
