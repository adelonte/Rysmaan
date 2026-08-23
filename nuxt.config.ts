// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  // Nitro serves its own placeholder at /favicon.ico when the file is absent;
  // the Rysmaan mark is a PNG, so point that request at it.
  routeRules: {
    '/favicon.ico': {
      redirect: { to: '/favicon-48x48.png', statusCode: 301 }
    }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // Icons that only exist as strings inside content/index.yml are invisible to
  // Nuxt Icon's source scanner, so each one would cost a runtime fetch and pop
  // in after hydration. Listing them bundles them with the client instead.
  icon: {
    clientBundle: {
      icons: [
        'lucide:badge-check',
        'lucide:building-2',
        'lucide:calendar-range',
        'lucide:factory',
        'lucide:file-search',
        'lucide:file-signature',
        'lucide:file-text',
        'lucide:hard-hat',
        'lucide:inbox',
        'lucide:kanban',
        'lucide:network',
        'lucide:route',
        'lucide:scale',
        'lucide:truck',
        'lucide:zap'
      ]
    }
  }
})
