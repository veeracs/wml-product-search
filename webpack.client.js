module.exports = {
  //  tell webpack, the entry point of server application
  entry: './src/client/index.js',

  //  tell webpack, where to put the output file generated
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
        publicPath: '/',
        contentBase: './dist',
        hot: true
  }
};
