/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#232946',
        secondary: '#B8C1EC',
        tertiary: '#EEBBC3',
        bgl: '#EFF1F6'
      }
    },
  },
  plugins: [],
}
