const useTunnelHmr =
  process.env.NUXT_DEV_TUNNEL === '1' || process.env.NUXT_DEV_HMR_WSS === '1'

const siteTitle =
  'Rysmaan — Streamlined procurement for engineering firms and service providers'
const siteDescription =
  'The next-generation system for modern project management and project discovery. Run RFQs, keep vendor qualifications current, and centralise contracts in one platform.'

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  // Override Nitro default /favicon.ico when public/favicon.ico is absent.
  routeRules: {
    '/favicon.ico': {
      redirect: { to: '/favicon-48x48.png', statusCode: 301 }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: '/logo.png', sizes: '1024x1024' },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
          type: 'application/manifest+json'
        }
      ],
      meta: [
        { name: 'theme-color', content: '#004B8D' },
        { name: 'apple-mobile-web-app-title', content: 'Rysmaan' },
        { name: 'description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Rysmaan' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:image', content: '/screenshots/Dashboard.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: '/screenshots/Dashboard.png' }
      ],
      htmlAttrs: { lang: 'en' },
      title: siteTitle
    }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    supabaseUrl: process.env.NUXT_SUPABASE_URL || process.env.SUPABASE_URL || '',
    supabaseAnonKey:
      process.env.NUXT_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''
  },
  // Palette lives in tailwind.config.ts; Nuxt UI maps `brand` onto `primary`
  // via app.config.ts, which is what generates the full set of CSS variables.
  fonts: {
    families: [{ name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] }]
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    // Bump key so previously persisted dark preferences do not override new default.
    storageKey: 'nuxt-color-mode-v2'
  },
  css: ['~/assets/css/main.css'],
  // wss:443 HMR only for reverse-proxy / tunnel setups; it breaks normal http://localhost dev.
  vite: useTunnelHmr
    ? {
        server: {
          hmr: {
            protocol: 'wss',
            clientPort: 443
          }
        }
      }
    : {},
  devServer: {
    host: '0.0.0.0',
    port: 5000
  }
})
