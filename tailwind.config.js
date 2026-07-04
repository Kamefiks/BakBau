/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-bg-grey-transparent":
          "linear-gradient(to left, #3a3a3a00, #2e2e2ea6)",
        "linear-bg-green-transparent":
          "linear-gradient(to right, #171a1311, #232d159f)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexend: ["Lexend", "serif"],
        inter: ["Inter", "serif"],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
