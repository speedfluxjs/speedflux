module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#E1E1E1",
        "gray-100": "#B0B0B0",
        "gray-500": "#4A4A4A",
        "primary-100": "#E8F5E9",
        "primary-300": "#D9EAD3",
        "primary-500": "#B6D7A8",
        "secondary-400": "#A8DAB5",
        "secondary-500": "#28A745",
        "black-100": "#04231b"
      },
      backgroundImage: (theme) => ({
        "gradient-whiteblue": "linear-gradient(90deg, #E8F5E9 0%, #D9EAD3 50%, #B6D7A8 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};