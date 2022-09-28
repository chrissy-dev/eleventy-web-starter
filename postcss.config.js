const isProduction = process.env.ELEVENTY_ENV === 'production';

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('autoprefixer'),
        isProduction && require('cssnano')
	]
}
