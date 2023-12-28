/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#5cbcff",
      "secondary": "#125889",
      "accent": "#D0ECFF",
      "accentapple": "#E6E6E6",
      "accentnvidia": "#DDFFA2",
      "accentdisney": "#ECC6E7",
      "accenttte": "#FABEC0",
      "white": "#FFFFFF",
      "black": "#000000",
      "yellow": "#FDE047",
    }
  },

  plugins: [],
}
