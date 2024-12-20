import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		"hover:from-blue-400/45",
		"hover:from-purple-400/45",
		"hover:from-green-400/45",
		"hover:from-orange-400/45",
	],
	theme: {
		extend: {
			boxShadow: {
				inside: "inset 0 0 15px 0 rgba(255,255,255, 0.2)",
				"inside-hover": "inset 0 0 40px 0 rgba(255,255,255, 0.2)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			animation: {
				"move-clouds": "moveClouds 50s linear infinite",
				plane: "plane 25s linear infinite",
				"plane-shadow": "planeShadow 25s linear infinite",
			},
			keyframes: {
				moveClouds: {
					"0%": {
						transform: "translateX(100%)",
					},
					"100%": {
						transform: "translateX(-100%)",
					},
				},
				plane: {
					"0%": {
						transform: "translate(120px) rotate(-65deg)",
					},
					"100%": {
						transform: "translate(-600px, -200px) rotate(-65deg)",
					},
				},
				planeShadow: {
					"0%": {
						transform: "translate(100px, -30px) rotate(-65deg)",
					},
					"100%": {
						transform: "translate(-630px, -230px) rotate(-65deg)",
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
