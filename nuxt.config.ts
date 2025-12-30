export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  ui: {
    colors: {
      primary: '#002B49'
    }
  },
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
