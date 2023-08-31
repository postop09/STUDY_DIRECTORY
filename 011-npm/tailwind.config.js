/** @type {import('tailwindcss').Config} */
const px0_400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tuneit-tds/**/*.{js,ts,jsx,tsx,mdx}",
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: px0_400,
      minWidth: px0_400,
      minHeight: px0_400,
    },
  },
  plugins: [],
};
