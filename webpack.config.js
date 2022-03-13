const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js',
    pageLoad: './src/js/pageLoad.js',
    app: './src/js/app.js',
    config: './src/js/config.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|svg|gifw|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // eslint-disable-next-line new-cap
  plugins: [new htmlWebpackPlugin({
    title: 'Weather App | TOP Project',
    template: './src/template.html',
  })],
};
