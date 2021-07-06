const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        cyan: colors.cyan,
        sky: colors.sky,
        gray: colors.gray,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        orange: colors.orange,
        lime: colors.lime,
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['hover', 'focus'],
      ringWidth: ['hover', 'active', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
