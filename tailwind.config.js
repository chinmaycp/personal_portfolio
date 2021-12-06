module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // 'false' or 'media' or 'class'
  theme: {
    fontFamily: {
      'yellowtail': ['Yellowtail', 'cursive'],
    },
    boxShadow: {
      'custom-light': '0px 0px 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        github: '#24292e',
        linkedin : '#0077b5',
        customGreen: '#00f260',
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      }
    },
    // textColor: theme => theme('colors'),
    // textColor: {
    //   'github': '#24292e',
    //   'linkedin': '#0077b5',
    // },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
}
