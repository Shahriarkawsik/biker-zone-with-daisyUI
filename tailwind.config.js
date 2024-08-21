/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js}"],
  theme: {
    extend: {
      // fontSize:{
      //   "28": "28px"
      // },
      colors:{
        "btn-color" : "rgb(231, 111, 81)",
        "banner-color" : "rgba(231, 111, 81, 0.1)",
        "subtitle" : "rgb(108, 108, 108)",
        "rater" : "rgb(35, 166, 240)",
        "profession" : "rgb(37, 43, 66)",
      },
      fontFamily:{
        "Poppins": "Poppins",
      },
      lineHeight:{
        "26": "26px",
        "32": "32px",
        "50": "50px",
        "72": "72px",
        "75": "75px",
      },
      boxShadow: {
        "custom-card" : "0px 0px 4px 0px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}