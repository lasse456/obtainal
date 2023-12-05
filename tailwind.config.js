/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url(public/herobg.jpg)",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
    boxShadow: {
      main: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      second: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    },
    theme: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1000px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        lg2: { max: "900px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
