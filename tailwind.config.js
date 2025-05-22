/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
        require('@tailwindcss/forms'),
  ],
}

