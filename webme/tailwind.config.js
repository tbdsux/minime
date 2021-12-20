const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  mode: "jit",
  theme: {
    colors,
    fontFamily: {
      sans: ["Overpass", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
