/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      colors: {
        primary: '#232946',
        secondary: '#B8C1EC',
        tertiary: '#EEBBC3',
        bgl: '#EFF1F6',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
