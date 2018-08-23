const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(['web/*.*'], {root: path.resolve(__dirname , '..'), verbose: true })    
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './../web/')
  },
  resolve: {
    extensions:['.js','.jsx']
  },
  module: {
    rules: [   
      {
        test: /\.jsx?/,
        include:[
          path.resolve(__dirname,'src')
        ],
        exclude: [
          path.resolve(__dirname,'node_modules')
        ],
        loader:'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/,
        use: [
          {
            loader:'file-loader',
            options:{
              name:'[name].[hash].[ext]',
              publicPath:''
            }
          }
        ],
      }
    ]
  }
};