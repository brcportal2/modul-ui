const webpack = require('webpack');
const nib = require('nib');

export default {
	title: 'Modul UI',
	port: 3030,
	modifyBundlerConfig: config => {
		config.plugins.push(new webpack.LoaderOptionsPlugin({
			options: {
				stylus: {
					'resolve url': true,
					use: [nib()],
					import: ['~nib/lib/nib/index.styl'],
					preferPathResolver: 'webpack',
				},
			},
		}));
		config.module.rules.push({
			test: /\.styl$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'stylus-loader',
				options: {
					'resolve url': true,
					import: ['~nib/lib/nib/index.styl'],
					preferPathResolver: 'webpack',
				},
			}]
		});

		return config;
	}
};
