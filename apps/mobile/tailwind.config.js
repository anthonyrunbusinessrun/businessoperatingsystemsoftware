module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        midnight: "#212c42",
        navy: "#182f64",
        deep: "#050931",
        crimson: "#d41432",
        "dark-red": "#810000",
        cornflower: "#8298c0",
        dim: "#505e78"
      }
    }
  },
  plugins: []
};
