let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let myselfCopyrightPlugin = require('./plugins/myself-copyright-plugin');
let myselfCopyrightPlugin2 = require('./plugins/myself-copyright-plugin2');
let myselfCopyrightPlugin3 = require('./plugins/myself-copyright-plugin3');
let myselfCopyrightPlugin4 = require('./plugins/myself-copyright-plugin4');

module.exports = {
	mode:'development',
	entry:'./src/main.js',
	output:{
		path:path.join(__dirname,'dist'),
		filename:'bundle.[hash:10].js'
	},
	devServer:{
		port:9999,
		hot:true
	},
	module:{
		rules:[
			// {
			// 	test:/.js$/,
			// 	include:/src/,
			// 	loader:['./loaders/myself-loaders-console-clean','./loaders/myself-loaders-console-clean2']
			// },
			// {
			// 	test:/.js$/,
			// 	include:/src/,
			// 	loader:['./loaders/myself-loaders-console-clean3','./loaders/myself-loaders-console-clean4']
			// },
			{
				test:/.css$/,
				include:/src/,
				loader:['css-loader']
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin(),
		// new myselfCopyrightPlugin(),
		// new myselfCopyrightPlugin2(),
		new myselfCopyrightPlugin3(),
		// new myselfCopyrightPlugin4()
	]
}