// const colors = require("tailwindcss/colors");

// /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Inter"],
      },
      colors: {
        // "white-600": "#F3F4F6", // Define el color blanco para el modo oscuro
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark"],
    },
  },
};
