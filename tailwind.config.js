module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "bg-pattern": "url('./assets/bg3.png')",
        "bg-primary": "url('./assets/bg.png')",
      },
    },
  },
  plugins: [],
};
