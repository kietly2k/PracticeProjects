/** @type {import('tailwindcss').Config} */
export const content = [
  "./results-summary/src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      'Hanken-grotesk': ['Hanken Grotesk', 'sans-serif']
    },
    colors: {
      'clr-light-red': 'hsl(0, 100%, 67%)',
      'clr-orange-yellow': 'hsl(39, 100%, 56%)',
      'clr-green-teal': 'hsl(166, 100%, 37%)',
      'clr-cobalt-blue': 'hsl(234, 85%, 45%)',

      'clr-bg-light-red': 'hsla(0, 100%, 67%,0.1)',
      'clr-bg-orange-yellow': 'hsla(39, 100%, 56%, 0.1)',
      'clr-bg-green-teal': 'hsla(166, 100%, 37%, 0.1)',
      'clr-bg-cobalt-blue': 'hsla(234, 85%, 45%, 0.1)',

      'clr-light-slate-blue': 'hsl(252, 100%, 67%)',
      'clr-royal-blue': 'hsl(241, 81%, 54%)',
      'clr-violet-blue': 'hsla(256, 72%, 46%, 1)',
      'clr-persian-blue': 'hsla(241, 72%, 46%, 0)',
    },
  },
};
export const plugins = [];

