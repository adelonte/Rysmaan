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

All page copy lives in `content/`:

- [`content/index.yml`](./content/index.yml) — the landing page: hero, activity
  panel, solutions grid, metrics and CTA.
- [`content/solutions/*.yml`](./content/solutions) — one file per solution page,
  rendered by `app/pages/solutions/[slug].vue` at `/solutions/<filename>`.

The shape of both is enforced by the Zod schemas in
[`content.config.ts`](./content.config.ts), so adding a field means adding it
there too.

### Adding a solution

Drop a new file in `content/solutions/`. Its `order` places it in the header
dropdown, which is generated from the collection — there is no second list to
update. Then add its icons to `icon.clientBundle.icons` in
[`nuxt.config.ts`](./nuxt.config.ts), or they will be fetched at runtime and
pop in after hydration.

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
└── pages/
    ├── index.vue
    └── solutions/[slug].vue    # One template, six content files
content/
├── index.yml            # Landing page copy
└── solutions/*.yml      # One file per solution page
```

## Version 3

The engineering data pipeline landing site is available at `/v3`. It was
integrated from the standalone `landing/` site with its pipeline animation,
comparison, pilot application, FAQ, and captioned overview video.

- Page: `app/pages/v3/index.vue`; standalone layout: `app/layouts/v3.vue`.
- Components: `app/components/v3/`; scoped theme: `app/assets/css/v3.css`.
- Contact email and pilot link: `v3` in `app/app.config.ts`.
- Video, captions, poster, favicon, and licensed Figtree font: `public/v3/`.
- Reveal animations: `app/plugins/v3-reveal.ts`, registered as `v-v3-reveal`.

The route is prerendered and marked `noindex, nofollow` while it is an alternate
version. Its theme is scoped to the v3 layout; `/`, `/v2`, and the solution pages
continue using their existing layouts.

### Pilot applications

The imported form uses Netlify Forms. Online submission is disabled by default,
with an email fallback, to avoid reporting success from an unconfigured server.
Development mode always uses this fallback.

For a Netlify deployment, enable form detection and set
`NUXT_PUBLIC_V3_FORMS_ENABLED=true` **before building** (the form is prerendered).
The generated `/v3` HTML includes the `pilot` form, hidden form name, and honeypot.
Enhanced submissions POST to `/v3`; native submissions use `/v3/thanks/`.
The thank-you page links back to `/v3`.

Confirm `hello@rysmaan.com`, then verify a real application arrives in Netlify
Forms before sharing publicly. Other hosts need a form backend before enabling
submission. Keep the flag disabled until that integration is in place.
