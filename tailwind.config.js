/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**.*{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      black: {
        0: '#000000',
      },
      red:
      {
        0: '#aa0000',
        100: '#f1433c',
        200: '#ed313b',
        300: '#ee212d',
      },
      blue: {
        0: '#2a3378',
      },
      indigo:{
        900: '#2a3378'
      },
      grey: {
        0: '#d3eefd',
        100: '#a5a5a5',
      },
      white: '#FFFFFF',
      yellow: {
        100: '#fdd600',
      },
      sky: {
        700: '#447ea2',
        800: '#447ea2',
      }
    }
  },
  plugins: [],
}
