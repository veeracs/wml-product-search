module.exports = {
  //  tell webpack, the entry point of server application
  entry: './src/client/index.js',
  
  //  tell webpack, where to put the output file generated
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js'
  },
  devServer: {
        publicPath: '/',
        contentBase: './dist',
        hot: true
  }
};