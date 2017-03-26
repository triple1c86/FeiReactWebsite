var webpack = require('webpack')

module.exports = {
  entry:  [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    "webpack/hot/dev-server","./app.jsx"
  ],

  externals: {
  jquery: 'jQuery'
  },
plugins: [
  new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery'
  })
  ],

  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './public'
  },

  resolve: {
    root: __dirname,
    alias: {
      Main: 'components/Main.jsx',
      Content: 'components/Content.jsx',
      Logo: 'components/Logo.jsx',
      LogoA: 'components/LogoA.jsx',
      Loader: 'components/Loader.jsx',
      About: 'components/About.jsx',
      Contact: 'components/Contact.jsx',
      Projects: 'components/Projects.jsx',
      ArrowButton: 'components/ArrowButton.jsx',
      EmailUser: 'components/EmailUser.jsx',
      applicationStyles: 'components/styles/app.scss',
      applicationFonts: 'components/fonts/fonts.scss',
      fullreactNorm: 'components/normalize.css',
      fullreactSke: 'components/skeleton.css',
      exampleStyles: 'components/exampleStyles.scss'
    },
    extensions: ['', '.js', '.jsx']
  },

module: {
  loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
    	{
    		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    		exclude: /(node_modules|bower_components)/,
    		loader: "file"
    	},
    	{
    		test: /\.(woff|woff2)$/,
    		exclude: /(node_modules|bower_components)/,
    		loader: "url?prefix=font/&limit=5000"
    	},
    	{
    		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    		exclude: /(node_modules|bower_components)/,
    		loader: "url?limit=10000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]"
    	},
    	{
    		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    		exclude: /(node_modules|bower_components)/,
    		loader: "url?limit=10000&mimetype=image/svg+xml"
    	},
    	{
    		test: /\.gif/,
    		exclude: /(node_modules|bower_components)/,
    		loader: "url-loader?limit=10000&mimetype=image/gif"
    	},
    	{
    		test: /\.jpg/,
    		exclude: /(node_modules|bower_components)/,
    		loader: "url-loader?limit=10000&mimetype=image/jpg"
    	},
    	{
    		test: /\.png/,
    		exclude: /(node_modules|bower_components)/,
    		loader: "url-loader?limit=10000&mimetype=image/png"
    	}
      ]
  }
}
