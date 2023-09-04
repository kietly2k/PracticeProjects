/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "clr-cyan": "hsl(179, 62%, 43%)",
        "clr-bright-yellow": "#b7d343", 
        "clr-light-gray": "hsl(204, 43%, 93%)",
        "clr-grayish-blue": "hsl(218, 22%, 67%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
