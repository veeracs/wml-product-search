const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  //  tell webpack, the entry point of server application
  entry: ['@babel/polyfill', './src/client/index.js'],

  //  tell webpack, where to put the output file generated
  output: {
    path: `${__dirname}dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', {loader: 'css-loader', options: {url: false}}
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 9000
  },
};
