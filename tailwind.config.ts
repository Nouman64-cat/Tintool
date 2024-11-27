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
      
    },
  },
  plugins: [],
} satisfies Config;
