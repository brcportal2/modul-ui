const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const nib = require('nib');


/**
 * Сборка для режима разработки
 */
module.exports = {
	mode: 'development',

	entry: path.join(__dirname, 'sandbox', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js'
	},

	module: {
		rules: [
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
				use: ['babel-loader']
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
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
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
				]
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				stylus: {
					'resolve url': true,
					use: [nib()],
					import: ['~nib/lib/nib/index.styl'],
					preferPathResolver: 'webpack',
				}
			}
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'sandbox', 'assets', 'index.html')
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({
			url: `http://localhost:9000/`
		})
	],
	resolve: {
		extensions: [
			'.webpack-loader.js',
			'.web-loader.js',
			'.loader.js',
			'.js',
			'.jsx',
			'.svg',
			'.ttf',
			'.woff',
			'.woff2'
		],
		modules: [
			path.join(__dirname, 'source'),
			path.join(__dirname, 'node_modules')
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: {
			rewrites: [
				{from: /./, to: '/index.html'}
			]
		},
		compress: true,
		port: 9000
	}
};