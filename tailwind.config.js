/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,

  theme: {
    extend: {
      colors: {
        min: "#EDC02F",
        seconder: "#383838",
      },
    },
  },
};
