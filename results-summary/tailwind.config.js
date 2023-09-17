/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Hanken-grotesk': ['Hanken Grotesk',  'sans-serif']
      },
      colors: {
        'clr-light-red': 'hsl(0, 100%, 67%)',
        'clr-orange-yellow': 'hsl(39, 100%, 56%)',
        'clr-green-teal': 'hsl(166, 100%, 37%)',
        'clr-cobalt-blue': 'hsl(234, 85%, 45%)'
      },
    },
  },
  plugins: [],
}

