/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      lobster: ['Lobster', 'cursive'],
      pacifico: ['Pacifico', 'cursive'],
      poppins: ['Poppins', 'sans-serif'],
      'sedgwick-ave-display': ['Sedgwick Ave Display', 'cursive'],
    },
    extend: {
      colors: {
        primary: "#f87171",
      },
    },
  },
  plugins: [],
};
