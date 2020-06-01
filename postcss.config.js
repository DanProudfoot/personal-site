module.exports = () => ({
	plugins: [
		require('postcss-import'),
		require('postcss-nested'),
		require('postcss-clamp'),
		require('postcss-preset-env')({
			stage: 0,
			importFrom: 'src/styles/main.css'
		})
	]
});
