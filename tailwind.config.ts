import { transform } from "next/dist/build/swc/generated-native";
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
      },
      animation: {
        "move-clouds": "moveClouds 50s linear infinite",
        "plane": "plane 25s linear infinite",
        "plane-shadow": "planeShadow 25s linear infinite"
      },
      keyframes: {
        moveClouds: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          }
        },
        plane: {
          '0%': {
            transform: 'translate(120px) rotate(-60deg)',
          },
          '100%': {
            transform: 'translate(-600px, -200px) rotate(-60deg)'
          }
        },
        planeShadow: {
          '0%': {
            transform: 'translate(100px, -30px) rotate(-60deg)',
          },
          '100%': {
            transform: 'translate(-630px, -230px) rotate(-60deg)'
          }
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
