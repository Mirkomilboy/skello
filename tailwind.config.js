module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '500': '500px',
      },
      colors: {
        brand: {
          'blue': '#2e26f1',
          'light-blue': '#ebf0f5'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
