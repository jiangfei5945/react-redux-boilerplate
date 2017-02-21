module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    main: './src/main.js',    
  },

  output: {
    path: __dirname + '/dist/',
    filename: 'main.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.js*$/, loader: 'babel-loader',
      include: [/src/]
    }]
  },

  plugins: [
  ],
};
