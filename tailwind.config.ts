import { heroui } from "@heroui/react";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "500px",
        sm: "768px",
        "sm-md": "992px",
        md: "1199px",
        lg: "1200px",
        "lg-xl": "1290px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "xs": "576px",
          sm: "768px",
          md: "992px",
          lg: "1280px",
          xl: "1440px",
        }
      },
      borderImage: {
        "border-blue-gradient": "linear-gradient(180deg, #092CA2 0%, #003BFF 100%)"
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(180deg, #092CA2 0%, #003BFF 100%)"
      },
      colors: {
        blue: {
          800: "#0047FF",
        },
        dark: {
          1000: "#202020",
          900: "#333333",
          200: "#636363",
        },
        gray: {
          500: "#5B5B5B",
          400: "#9D9C9D",
          300: "#7A7878",
        },
        orange: {
          1000: "#F48403",
        },
        pink: {
          500: "#845EBC"
        },
        red: {
          700: "#F36960",
        },
        green: {
          1000: "#01697A",
          800: "#14797B",
        }
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        md: "0px 1px 2px 0px #1018280D",
        lg: "0px 4px 25px 0px #0000000D"
      }
    },
  },
  plugins: [heroui()],
};

export default config;
