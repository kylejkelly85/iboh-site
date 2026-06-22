/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkTeal: '#234e52',
          teal: '#319795',
        }
      }
    },
  },
  plugins: [],
}