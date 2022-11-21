/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    "sans": [
      "ui-sans-serif",
      "system-ui", 
      "-apple-system", 
      "BlinkMacSystemFont", 
      "Segoe UI", 
      "Roboto", 
      '"Helvetica Neue"', 
      "Arial", 
      '"Noto Sans"', 
      "sans-serif", 
      '"Apple Color Emoji"', 
      '"Segoe UI Emoji"', 
      '"Segoe UI Symbol"', 
      '"Noto Color Emoji"',
    ],
  },
screens: {
  xs: "480px",
  ss: "620px",
  sm: "768px",
  md: "1060px",
  lg: "1200px",
  xl: "1700px",
},
plugins: [],
};

