const path = require('path');

module.exports = {
  entry: {
      'kintone-create-edit-show': './src/kintone-create-edit-show.js',
      'kintone-create-edit-submit': './src/kintone-create-edit-submit.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ]
            ]
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: {
    jquery: 'jQuery'
  }
};
