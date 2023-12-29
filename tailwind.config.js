/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-red": "#910000",
      "light-red": "#FF1212",
      "dark-blue": "#000091",
      "light-blue": "#1212FF",
      white: "#FFFFFF",
      black: "#000000",
      "light-grey": "#EEEEEE",
      "black-ish": "#161616",
      "lightlight-red": "#FEE8FC",
      "stone": "#6E445A",
      "lightlight-blue": "#E8EDFF",
      "sky": "#0063CB",
      "superlight-grey": "#EEEEEE"
    },
    fontFamily: {
      marianne: ["Marianne"],
    },
  },
  plugins: [],
};
