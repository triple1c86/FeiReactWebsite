var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry:  "./app.jsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: '/public'
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './public'
  },


  plugins: [
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      }),
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   template: 'public/index.html'
    // })
// other plugins
  ],

// entry:  [
//   'script!jquery/dist/jquery.min.js',
//   'script!foundation-sites/dist/js/foundation.min.js',
//   "webpack/hot/dev-server","./app.jsx"
// ],

  resolve: {
    modules: [path.resolve(__dirname, "/"), "node_modules"],
	// (was split into `root`, `modulesDirectories` and `fallback` in the old options)
	// In which folders the resolver look for modules
	// relative paths are looked up in every parent folder (like node_modules)
	// absolute paths are looked up directly
	// the order is respected
    alias: {
      About: path.resolve(__dirname, 'components/pages/About.jsx'),
      Contact: path.resolve(__dirname, 'components/pages/Contact.jsx'),
      Projects: path.resolve(__dirname, 'components/pages/Projects.jsx'),
      Content: path.resolve(__dirname, 'components/pages/Content.jsx'),
      Main: path.resolve(__dirname, 'components/pages/Main.jsx'),
      Loader: path.resolve(__dirname, 'components/pages/Loader.jsx'),
      Logo: path.resolve(__dirname, 'components/Logo.jsx'),
      LogoA: path.resolve(__dirname, 'components/LogoA.jsx'),
      ArrowButton: path.resolve(__dirname, 'components/ArrowButton.jsx'),
      Gallery: path.resolve(__dirname, 'components/Gallery.jsx'),
      EmailUser: path.resolve(__dirname, 'components/EmailUser.jsx'),
      applicationStyles: path.resolve(__dirname, 'components/styles/app.scss'),
      applicationFonts: path.resolve(__dirname, 'components/fonts/fonts.scss'),
      fullreactNorm: path.resolve(__dirname, 'components/normalize.css'),
      fullreactSke: path.resolve(__dirname, 'components/skeleton.css'),
      exampleStyles: path.resolve(__dirname, 'components/exampleStyles.scss')
    },
    extensions: ['.css','.scss', '.js', '.jsx']
  },

module: {
  rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader','babel-loader']
      },
    	{
    		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    		exclude: /(node_modules|bower_components)/,
    		use: "file-loader"
    	},
    	{
    		test: /\.(woff|woff2)$/,
    		exclude: /(node_modules|bower_components)/,
    		use: "url-loader?prefix=font/&limit=5000"
    	},
    	{
    		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    		exclude: /(node_modules|bower_components)/,
    		use: "url-loader?limit=10000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]"
    	},
    	{
    		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    		exclude: /(node_modules|bower_components)/,
    		use: "url-loader?limit=10000&mimetype=image/svg+xml"
    	},
    	{
    		test: /\.gif/,
    		exclude: /(node_modules|bower_components)/,
    		use: "url-loader?limit=10000&mimetype=image/gif"
    	},
    	{
    		test: /\.jpg/,
    		exclude: /(node_modules|bower_components)/,
    		use: "url-loader?limit=10000&mimetype=image/jpg"
    	},
    	{
    		test: /\.png/,
    		exclude: /(node_modules|bower_components)/,
    		use: "url-loader?limit=10000&mimetype=image/png"
    	}
      ]
  }
}
