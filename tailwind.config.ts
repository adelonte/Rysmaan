import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      },
      colors: {
        // Rysmaan navy. #004B8D sits at 500 so Nuxt UI's solid variants render
        // the brand colour exactly; 50-400 are a continuous ramp up to it.
        brand: {
          50: '#f2f8fd',
          100: '#e2eff9',
          200: '#b7d5ee',
          300: '#7ab0dd',
          400: '#2f7ebc',
          500: '#004b8d',
          600: '#004078',
          700: '#003563',
          800: '#002a4e',
          900: '#00203b',
          950: '#001527'
        },
        // The teal end of the logo gradient. Used sparingly, for accents only.
        accent: {
          50: '#effcfd',
          100: '#d3f5f9',
          200: '#ace9f2',
          300: '#72d7e7',
          400: '#38bcd4',
          500: '#2ab5c9',
          600: '#178599',
          700: '#166b7c',
          800: '#185866',
          900: '#184a57',
          950: '#08303b'
        }
      }
    }
  }
}
