/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/comps/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",

        saltp: "#ffc3c9",
        saltd: "#933336",
        saltl: "#f8cdc7",
      },
    },
  },
  plugins: [],
};
