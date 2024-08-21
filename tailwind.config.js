/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js}"],
  theme: {
    extend: {
      colors:{
        "btn-color" : "rgb(231, 111, 81)",
        "banner-color" : "rgba(231, 111, 81, 0.1)",
      },
      fontFamily:{
        "Poppins": "Poppins",
      },
      lineHeight:{
        "26": "26px",
        "50": "50px",
        "72": "72px",
        "75": "75px",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}