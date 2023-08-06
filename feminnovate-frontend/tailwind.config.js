/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      tall: {'raw': '(min-height: 768px) and (min-width: 768px)'}
    },
    colors: {
      'white': '#FEFEFE',
      'pink': '#FFB5C6',
      'blue': '#97B4FF',
      'green': '#9CFFCA',
      'yellow': '#FFDD86',
      'black': '#1E1E1E',
      'purple': '#D5A0FF',
      'grey': '#D9D9D9',
      'hyperlink': '#256EFF',
      'dark-grey': '#656565',
      'blue-accent': '#7A92CF',
      'yellow-accent': '#CEB36C',
      'pink-accent': '#CF8C9C',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
