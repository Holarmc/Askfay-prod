// const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        pink: {
          100: "#FFCBF0",
          200: "#CF0095",
          300: "#AB136F",
        },
        black: {
          100: "#121212",
          400: "#12121266",
          600: "#12121299",
        },
        gray: {
          100: "#FAFAFA",
          900: "#111827",
        },
        light: "#FFF",
      },

      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [],
};
