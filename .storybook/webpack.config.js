const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const nib = require('nib');

const rules = [
	{
		test: /\.(woff|woff2|eot|ttf)$/,

		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[hash:hex:7].[ext]',
				}
			}
		]
	},

	{
		test: /\.(png|jpg|gif|ico)$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'images/[name].[hash:hex:7].[ext]',
					fallback: `file-loader`
				}
			}
		]
	},

	{
		test: /\.(svg)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'images/[name].[hash:hex:7].[ext]',
				}
			}
		]
	},

	{
		test: /\.(jsx|js)$/,
		exclude: /node_modules/,

		use: [{
			loader: 'babel-loader',

			options: {
				plugins: [
					"transform-class-properties",
					"transform-decorators-legacy",
					"react-docgen"
				],

				presets: [
					"es2015",
					"stage-0",
					"react"
				]
			}
		}]
	},

	{
		test: /\.styl$/,

		use: [
			'style-loader',
			{
				loader: 'css-loader',
			},
			// 'stylus-loader'
			{
				loader: 'stylus-loader',
				options: {
					'resolve url': true,
					import: ['~nib/lib/nib/index.styl'],
					preferPathResolver: 'webpack',
				}
			}
		]
	}
];

module.exports = (storybookBaseConfig, configType) => {
	rules.map(I => storybookBaseConfig.module.rules.push(I));

	storybookBaseConfig.plugins.push(new webpack.LoaderOptionsPlugin({
		options: {
			stylus: {
				'resolve url': true,
				use: [nib()],
				import: ['~nib/lib/nib/index.styl'],
				preferPathResolver: 'webpack',
			}
		}
	}));

	storybookBaseConfig.plugins.push(new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery'
	}));

	storybookBaseConfig.resolve.modules = [
		path.join(__dirname, '..', 'source'),
		path.join(__dirname, '..', 'node_modules')
	];

	storybookBaseConfig.resolve.extensions = [
		'.webpack-loader.js',
		'.web-loader.js',
		'.loader.js',
		'.js',
		'.jsx',
		'.svg',
		'.ttf',
		'.woff',
		'.woff2',
		'.json'
	];

	return storybookBaseConfig;
};