import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a4d6d",
          dark: "#0f3854",
          light: "#2d6b8f",
        },
        accent: {
          DEFAULT: "#c9a86a",
          light: "#ddc499",
          dark: "#b08f4f",
        },
        sand: {
          50: "#fdfbf7",
          100: "#f9f5ed",
          200: "#f1e8d6",
          300: "#e5d4b8",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
