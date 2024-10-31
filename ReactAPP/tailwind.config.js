/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'navbar': '0 10px 100px rgba(255, 255, 255, 0.24)',
				'hover': '0 10px 100px rgba(255, 255, 255, 0.4)',
			},
		},
		fontFamily:{
			'titre': 'Source Sans Pro',
		},
	},
	plugins: [],
}