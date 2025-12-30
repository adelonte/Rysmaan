export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  ui: {
    primary: 'blue'
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            blue: {
              50: '#e0f2ff',
              100: '#c2e5ff',
              200: '#8fccff',
              300: '#52a9ff',
              400: '#217dff',
              500: '#004B8D',
              600: '#003d73',
              700: '#002f5a',
              800: '#002241',
              900: '#001427',
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
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0f7ff',
              100: '#e0effe',
              200: '#bae0fd',
              300: '#7cc8fb',
              400: '#38acf8',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#004B8D',
              950: '#082f49',
              DEFAULT: '#004B8D'
            }
          }
        }
      }
    }
  }
})
