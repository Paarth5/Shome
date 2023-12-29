/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "400px",
      // => @media (min-width: 640px) { ... }
      md: "600px",
      // => @media (min-width: 768px) { ... }
      lg: "800px",
      // => @media (min-width: 1024px) { ... }
      xl: "1000px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1200px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
