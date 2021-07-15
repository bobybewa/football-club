module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        '400' : '#dfeeea',
        '500' : '#3a7865',
        '600' : '#3e7075'
      },
      yellow: {
        '400' : '#ffa'
      }
    },
    extend: {
      
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '990px',
      'desktop': '1710px',
    },
  },
  variants: { 
    extend: {},
  },
  plugins: [],
}
