/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				serrat: ["Jost", "sans-serif"]
			},
			colors:{
				primary:"#212123",
			}
		},
	},
	plugins: [],
};

