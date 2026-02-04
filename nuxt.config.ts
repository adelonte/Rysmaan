export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  devtools: { enabled: true },
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
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 5000
  }
})
