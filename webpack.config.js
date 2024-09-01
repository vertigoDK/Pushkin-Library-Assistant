const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		dosai: './src/js/dosai.js',
		news: './src/js/news.js',
		errorPage: './src/js/errorPage.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
