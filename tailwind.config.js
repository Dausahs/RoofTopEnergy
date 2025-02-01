/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fcd913',
        secondary: '#f4f4f4'
      },
      fontFamily: {
        sans: ['Corbel Light', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};