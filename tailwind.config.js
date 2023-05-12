/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      },
      colors:{
        blue:{
          95005: '#233778fa'
        }
      }
    },
  },
  plugins: [ require('@shrutibalasa/tailwind-grid-auto-fit')],
}

