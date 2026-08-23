# Rysmaan — Landing

Marketing site for Rysmaan, a construction technology platform covering
tendering, vendor qualification, contracts and project delivery.

Built on the [Nuxt UI landing template](https://github.com/nuxt-ui-templates/landing)
(Nuxt 4 · Nuxt UI 4 · Nuxt Content 3 · Tailwind CSS 4 · motion-v).

## Setup

The project uses pnpm, available through Corepack (bundled with Node 20+):

```bash
corepack pnpm install
```

## Development

```bash
corepack pnpm dev
```

The dev server listens on <http://localhost:3000>.

## Production

```bash
corepack pnpm build
corepack pnpm preview
```

## Editing content

All page copy lives in [`content/index.yml`](./content/index.yml) — hero,
platform services, metrics and CTA. The shape of that file is enforced by the
Zod schema in [`content.config.ts`](./content.config.ts), so adding a field
means adding it there too.

## Branding

- Palette: Rysmaan navy (`brand`, pinned to `#004B8D` at shade 500) and the
  teal from the logo gradient (`ocean`). Both are defined in
  [`app/assets/css/main.css`](./app/assets/css/main.css) and mapped onto Nuxt
  UI's semantic colours in [`app/app.config.ts`](./app/app.config.ts).
- Logo files live in `public/` and are knocked out to white in dark mode by
  [`app/components/AppLogo.vue`](./app/components/AppLogo.vue).
- The landing page is pinned to dark mode via `definePageMeta` in
  [`app/pages/index.vue`](./app/pages/index.vue).

## Layout

```
app/
├── app.config.ts        # Nuxt UI theme (colours, button overrides)
├── app.vue              # Shell: header, page, footer, head/SEO defaults
├── assets/css/main.css  # Brand palette, fonts, dark-mode surface overrides
├── components/
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   ├── AppLogo.vue
│   ├── GradientGlow.vue
│   ├── HeroActivity.vue        # Hero "live package feed" panel
│   └── HeroShaders.client.vue  # WebGL plasma wash behind the hero
└── pages/index.vue
content/index.yml        # All page copy
```
