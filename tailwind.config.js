/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme/**/*.{html,js,liquid,json}",
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      screens: {
        xxldn: { max: '1600px' },
        xldn: { max: '1399px' },
        xxl: '1400px',
        lgdn: { max: '1199px' },
        xl: '1200px',
        mddn: { max: '991px' },
        lg: '992px',
        smdn: { max: '767px' },
        md: '768px',
        xsdn: { max: '575px' },
        sm: '576px',
        xxdn: { max: '480px' },
        xs: '481px'
      },
      fontFamily: {
        heading: 'Agharti',
        body: 'Montserrat'
      },
      fontSize: {
        sm: ['var(--font-size-sm)', '1.428'],
        base: ['var(--font-size-base)', '1.5'],
        lg: ['var(--font-size-lg)', '1.555'],
        xl: ['var(--font-size-xl)', '1.4']
      },
      colors: {
        accent: '#f99d1c',
        surface: 'hsla(var(--color-surface) / <alpha-value>)',
        primary: '#000',
        contrast: 'hsla(var(--color-contrast) / <alpha-value>)',
        secondary: '#fff',
        tertiary: '#372e2c',
        muted: '#adadad'
      },
      transitionTimingFunction: {
        wiggle: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  }
}
