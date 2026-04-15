const useTunnelHmr =
  process.env.NUXT_DEV_TUNNEL === '1' || process.env.NUXT_DEV_HMR_WSS === '1'

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  devtools: { enabled: true },
  runtimeConfig: {
    supabaseUrl: process.env.NUXT_SUPABASE_URL || process.env.SUPABASE_URL || '',
    supabaseAnonKey:
      process.env.NUXT_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''
  },
  ui: {
    primary: 'blue'
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' }
    ]
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
          },
          colors: {
            primary: {
              50: '#f0f7ff',
              100: '#e0effe',
              200: '#bae0fd',
              300: '#7cc8fb',
              400: '#38acf8',
              500: '#004B8D',
              600: '#003d73',
              700: '#002f5a',
              800: '#002241',
              900: '#001427',
              950: '#082f49',
              DEFAULT: '#004B8D'
            }
          }
        }
      }
    }
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
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
