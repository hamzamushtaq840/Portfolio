/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '1.5rem': '1.5rem',
      '10rem': '10rem',
    },
    screens: {
      'sm': { 'min': '1px', 'max': '540px' },
      'tm': { 'min': '540px', 'max': '860px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': { 'min': '860px', 'max': '950px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': { 'min': '950px', 'max': '1250px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
  },
  plugins: [],
}