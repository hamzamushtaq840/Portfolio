/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', "sans-serif"],
    },
    fontSize: {
      'custom-10': 'clamp(9px,0.5208333333333334vw,10px)',
      'custom-12': 'clamp(12px,0.625vw,12px)',
      'custom-14': 'clamp(12px,0.7291666666666666vw,14px)',
      'custom-16': 'clamp(13px,0.8333333333333334vw,16px)',
      'custom-18': 'clamp(15.5px,0.9375vw,18px)',
      'custom-20': 'clamp(16px,1.0416666666666667vw,20px)',
      'custom-22': 'clamp(18px,1.1458333333333333vw,22px)',
      'custom-24': 'clamp(20px,1.25vw,24px)',
      'custom-26': 'clamp(24px,1.3541666666666667vw,26px)',
      'custom-28': 'clamp(26px,1.4583333333333333vw,28px)',
      'custom-30': 'clamp(28px,1.5625vw,30px)',
      'custom-32': 'clamp(30px,1.6666666666666667vw,32px)',
      'custom-34': 'clamp(32px,1.7708333333333333vw,34px)',
      'custom-36': 'clamp(34px,1.875vw,36px)',
      'custom-38': 'clamp(36px,1.9791666666666667vw,38px)',
      'custom-38': 'clamp(36px,1.9791666666666667vw,39px)',
      'custom-38': 'clamp(36px,1.9791666666666667vw,40px)',
      'custom-38': 'clamp(36px,1.9791666666666667vw,41px)',
      'custom-38': 'clamp(36px,1.9791666666666667vw,42px)',
    },
    screens: {
      'sm': { 'min': '1px', 'max': '540px' },
      'tm': { 'min': '540px', 'max': '860px' },
      'md': { 'min': '860px', 'max': '950px' },
      'lg': { 'min': '950px', 'max': '1250px' },
    },
  },
  plugins: [],
}