module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'tc0': '#ffc2c7', // textcolors
      'tc1': '#b6e5d8',
      'tc2': '#fbe5c8',
      'tc3': '#8fdde7',
      'tc4': '#d3bbdd',
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
