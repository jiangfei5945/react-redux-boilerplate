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
      test: /(\.js|\.jsx)$/, loader: 'babel-loader!eslint-loader',
      include: [/src/]
    },
    { test: /\.css$/, loader: "style-loader!css-loader" },
    { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }]
  },

  plugins: [
  ],
};
