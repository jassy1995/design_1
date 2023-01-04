/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Poppins", "Montserrat", "sans-serif"],
      serif: ['Raleway', 'sans-serif'],
      varela: ['Varela', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace', 'sans-serif'],
      openSan: ['Open san', 'sans-serif']

    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1234px",
      xxl: "1440px",
    },
  },
  plugins: [],
}

