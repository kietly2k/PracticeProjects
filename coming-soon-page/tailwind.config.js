/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['Josefin Sans',  'sans-serif']
      },
      colors: {
        'clr-desaturate-red': 'hsl(0, 36%, 70%)',
        'clr-soft-red':'hsl(0, 93%, 68%)',
        'clr-dark-grayish-red': 'hsl(0, 6%, 24%)'
      },
      boxShadow: {
        '3xl': '0 10px 35px 0 hsl(0, 36%, 70%)'
      }
    },
    
  },
  plugins: [],
}

