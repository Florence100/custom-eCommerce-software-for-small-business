const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
];

if (isDevelopment) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  target: isDevelopment ? 'web' : 'browserslist',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devtool: isDevelopment ? 'eval-cheap-module-source-map' : 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
  },

  plugins,

  module: {
  	rules: [
      { 
        test: /\.(html)$/, 
        use: ['html-loader'] 
      },
      {
        test: /\.(css)$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
            plugins: [
                isDevelopment && 'react-refresh/babel'
            ].filter(Boolean),
          },
        },
      },
    ],
  }
}