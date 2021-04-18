module.exports = {
  presets: [require('./color-presets.js')],
  theme: {
    extend: {
      spacing: {
        72: '20rem',
        84: '24rem',
        96: '28rem',
        128: '32rem',
        140: '36rem',
        152: '40rem',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
      },
      boxShadow: {
        100: '0 8px 8px 0 rgb(44 50 66 / 1%), 0 1px 1px 0 rgb(44 50 66 / 6%)',
        200: '1px 1px 2px 0 rgb(47 57 78 / 8%)',
        300: '0 0 0.125rem 0.0625rem rgba(44, 50, 66, 0.08)',
        400: '0 0 0.25rem rgba(44, 50, 66, 0.08), 0 0.25rem 1rem rgba(44, 50, 66, 0.08)',
        'brand-error': '0rem 0.0625rem 0.125rem #ffbaba',
        500: '0 8px 8px 0 rgb(44 50 66 / 1%), 0 1px 1px 0 rgb(44 50 66 / 6%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
        mono: ['JetBrains Mono', 'Menlo'],
        display: ['Manrope', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
