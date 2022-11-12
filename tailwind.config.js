module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#B0D2DE",
          normal: "#007FAB",
          dark: "#003A4F",
        },
        secondary: {
          light: "#FFE2A9",
          normal: "#FFC37D",
          dark: "#A46039",
        },
        highlight: {
          light: "#FFB5A4",
          normal: "#FF5136",
          dark: "#CD331A",
        },
      },
      fontSize: {
        "3xl": "1.75rem", // 28px
        "4xl": "2rem", // 32px
        "5xl": "2.75rem", // 44px
      },
    },
    keyframes: {
      enlarge: {
        "0%": { transform: "scale(0)", opacity: 1 },
        "100%": { transform: "scale(1)", opacity: 0 },
      },
    },
    animation: { enlarge: "enlarge 1s linear infinite" },
    backgroundImage: {
      sponsor: "url(/src/assets/btn/btn_sponsor.png)",
      "sponsor-h": "url(/src/assets/btn/btn_sponsor_h.png)",
    },
  },
  plugins: [],
};
