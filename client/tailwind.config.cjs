/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#6A7CF6',
        'secondary': '#EB5153',
        'tertiary': '#F6F8FA',
        'secondary': '#222566',
      }
    },
  },
  plugins: [],
}
