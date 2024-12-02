import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#E1179E",
        }
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        tangerine: ['Tangerine', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],	
        inter: ['Inter', 'sans-serif'],
        italiana: ['Italiana', 'sans-serif']
      },
      animation: {
        highlight: "highlight 3s ease-in-out",
      },
      keyframes: {
        highlight: {
          "0%": { boxShadow: "0 0 0px rgba(255, 215, 0, 0)" },
          "50%": { boxShadow: "0 0 15px rgba(255, 215, 0, 0.8)" },
          "100%": { boxShadow: "0 0 0px rgba(255, 215, 0, 0)" },
        },
      },
      
    },
  },
  plugins: [],
} satisfies Config;
