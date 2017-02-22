module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    main: './src/index.js',    
  },

  output: {
    path: __dirname + '/dist/',
    filename: 'main.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/, loader: 'babel-loader',
      include: [/src/]
    }]
  },

  plugins: [
  ],
};
