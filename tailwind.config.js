/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "vertical-scroll": "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
