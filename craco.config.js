module.exports = {
	style: {
		eslint: {
			enable: false
		},
		postcss: {
			plugins: [
				require('tailwindcss'),
				require('autoprefixer')
			]
		}
	}
}
