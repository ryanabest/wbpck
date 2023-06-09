// https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projects = require('./src/data/projects.json');
const utils = require('./src/js/utils');

module.exports = {
  entry: './src/js/app.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      },
      // Include pug-loader to process the pug files
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      favicon: './src/images/favicon.png',
      templateParameters: { projects, utils, page: 'work' }
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      filename: 'about/index.html',
      favicon: './src/images/favicon.png',
      templateParameters: { projects, utils, page: 'about' }
    })
  ]
};
