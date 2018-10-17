const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

console.log(path.resolve(__dirname, './src/client/assets/fonts/'));

module.exports = {
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
          'style-loader',
          {loader: 'css-loader', options: {url: false}}
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/client/assets/fonts/'),
        to: path.resolve(__dirname, './dist')
      }
    ],
    { copyUnmodified: true }
    )
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
};
