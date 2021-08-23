module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { 
      roboto: ["Roboto", "sans-serif"],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'main': '#FFEF33',
      'hover': '#FFF68D',
      'click': '#F4CE00',
      'secondary': '#55515D',
      'secondary-hover': '#ADA8B7'
     }),
    backgroundSize: {
     'small': '20px',
    },
    extend: {
      backgroundImage: theme => ({
        'select-arrow': "url('https://www.svgrepo.com/show/7882/down-arrow.svg')",
       })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
