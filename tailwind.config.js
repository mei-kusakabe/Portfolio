/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=pastel]"],
          "primary": "#5A4BDA",
          "primary-focus": "mediumblue",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,



  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],

}
