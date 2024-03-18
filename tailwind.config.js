/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend : {
    colors: {
      'dark-green': '#185a46',
    },
    backgroundColor: {
      'violet': '#8A2BE2',
    },
  },
  plugins: [],
}
}

