export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  ui: {
    colors: {
      primary: '#004B8D'
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
