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
      crawlLinks: true,
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
        'lucide:activity',
        'lucide:align-left',
        'lucide:archive',
        'lucide:award',
        'lucide:badge-check',
        'lucide:building-2',
        'lucide:calendar-clock',
        'lucide:chart-line',
        'lucide:check-check',
        'lucide:circle-help',
        'lucide:clipboard-check',
        'lucide:database',
        'lucide:diff',
        'lucide:factory',
        'lucide:file-output',
        'lucide:file-search',
        'lucide:file-signature',
        'lucide:file-text',
        'lucide:hard-hat',
        'lucide:history',
        'lucide:inbox',
        'lucide:kanban',
        'lucide:layers',
        'lucide:lock',
        'lucide:messages-square',
        'lucide:milestone',
        'lucide:network',
        'lucide:route',
        'lucide:ruler',
        'lucide:scale',
        'lucide:search-check',
        'lucide:send',
        'lucide:sparkles',
        'lucide:table-2',
        'lucide:trending-up',
        'lucide:triangle-alert',
        'lucide:truck',
        'lucide:zap'
      ]
    }
  }
})
