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
      "trainer-1": 'url("/trainer-1-min.jpg")',
      "trainer-2": 'url("/trainer-2-min.jpg")',
      "trainer-3": 'url("/trainer-3-min.jpg")',
      "trainer-4": 'url("/trainer-4-min.jpg")',
      "faq-img": 'url("/faq-img.jpg")',
    },
  },
  plugins: [],
};
