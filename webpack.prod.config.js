const path = require('path')
const webpack = require('webpack')

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/main.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-0']
			}
		}]
	},
	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			home: 'src'
		},
		extensions: ['', '.js']
	},
}
