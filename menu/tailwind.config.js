module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-secondary': '#2b2b2b',
        'tan-accent': '#d4af9a',
        'tan-light': '#f5e6d3',
        'coffee-dark': '#3d2d1d',
        'coffee-medium': '#8b6f47',
        'coffee-light': '#c9a876',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
