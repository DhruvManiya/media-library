/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        select: '#00bbd8',
        secondary2: '#f6931c',
        font_color: '#33475b',
        custom: {
          DEFAULT: "#10B981",
          light: "#D1FAE5"
        }
      }
    },
  },
  plugins: [],
}