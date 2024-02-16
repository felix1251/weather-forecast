/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        "primary-light": "#F97316",
        secondary: "#363738",
        "secondary-light": "#7D8184",
      },
      maxWidth: {
        primary: "1170px",
      },
    },
  },
  plugins: [],
};
