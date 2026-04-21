// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F5A623",
          teal: "#2BB5A0",
          pink: "#FF7BAC",
          dark: "#1A1A2E",
          cream: "#FFF8F0",
          light: "#FAFAF5",
        },
      },
    },
  },
  plugins: [],
};
