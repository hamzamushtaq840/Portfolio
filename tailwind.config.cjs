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
      'tm': { 'min': '540px', 'max': '844px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': { 'min': '844px', 'max': '950px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': { 'min': '951px', 'max': '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
  },
  plugins: [],
}