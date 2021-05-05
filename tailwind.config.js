module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '25%': '%25',
    },
    transitionDuration: ['hover', 'focus'],
    transitionDuration: {
      '0': '0ms',
      '2000': '2000ms',
      '8000':'8000ms',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
