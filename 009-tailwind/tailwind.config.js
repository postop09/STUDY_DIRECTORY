/** @type {import('tailwindcss').Config} */

const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
console.log(px0_200); // { ..., 200: "200px" }

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minWidth: px0_200,
    },
  },
  plugins: [],
};
