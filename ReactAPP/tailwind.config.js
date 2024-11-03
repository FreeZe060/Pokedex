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
			animation: {
				float: 'float 1.5s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' },
				},
			},
		},
		fontFamily:{
			'titre': 'Source Sans Pro',
		},
	},
	plugins: [],
}
