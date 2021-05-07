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
    backgroundImage: theme => ({
         'main-img': "url('https://api.xygeng.cn/Bing/')",
        })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
