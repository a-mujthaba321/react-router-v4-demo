const webpack = require('webpack');

module.exports = (env) => {
  console.log('ENV');

  return {
    entry: ['react-hot-loader/patch', './src/index.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: `${__dirname}/dist`,
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      historyApiFallback: true,
      contentBase: './dist',
      hot: true,
      port: 3000,
      inline: true,
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: false,
        historyApiFallback: true
      }
    }
  };
};
