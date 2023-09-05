/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: [
    "./index.html",
    "./pages/sourcers.html",
    "./pages/createListing.html",
  ],
  theme: {
    fontFamily: {
      "stolzl": ["stolzl", "sans-serif"]
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

