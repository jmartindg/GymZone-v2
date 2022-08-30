/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEE402",
        secondary: "#111111",
        primaryHover: "#ffed4f",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    backgroundImage: {
      "hero-img": 'url("/hero-img.jpg")',
      "faq-img": 'url("/faq-img.jpg")',
    },
  },
  plugins: [],
};
