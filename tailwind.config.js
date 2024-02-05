/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      fontWeight: {
        thin: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
