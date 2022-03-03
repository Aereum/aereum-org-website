module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'tc0': '#ffbe0b', // textcolors
      'tc1': '#fb5607',
      'tc2': '#ff006e',
      'tc3': '#8338ec',
      'tc4': '#3a86ff',
      'tc5': '#efe7d3',
      'tc6': '#bbe7fe',
      'bc0': '#1572A1',
    },
    // fill: ({theme}) => ({
    //   bg: theme('colors.bc0')
    // }),
    fontFamily: {
      'sans': ['ui-sans-serif'],
      'mono':['SFMono-Regular'],
      'serif':['Georgia'],
    },
    extend: {},
  },
  plugins: [],
}
