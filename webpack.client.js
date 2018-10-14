const webpack = require('webpack');

module.exports = {
  //  tell webpack, the entry point of server application
  entry: './src/client/index.js',

  //  tell webpack, where to put the output file generated
  output: {
    path: `${__dirname}dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
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
    hot: true,
  },
};
