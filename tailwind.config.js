module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      fontFamily: {
        'firacode': ['Fira Code', 'monospace'],
        'gorditas': ['Gorditas', 'cursive'],
        'hubballi': ['Hubballi', 'cursive'],
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridTemplateRows: {
          '12': 'repeat(12, minmax(0, 1fr))'
        }
    }
  },
  plugins: [],
}
