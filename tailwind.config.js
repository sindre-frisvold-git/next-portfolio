module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      cursor: {
        'chrome-grab': '-webkit-grab',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  variants: {
    extend: {
      flex: ['hover', 'focus'],
    },
  },
}
