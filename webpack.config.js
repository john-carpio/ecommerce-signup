// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = 'src'; // the app root folder: src, src_users, etc
var Path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  app_root: app_root, // the app root folder, needed by the other webpack configs
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  output: {
    path: __dirname + '/build/assets',
    publicPath: 'assets/',
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', './'],
    alias: {
        /* aliases for dependency imports */
    }
  }
  ,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?name=[hash].[ext]'
        ]
      },
      {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file?name=[hash].[ext]'
      }
    ],
  },
  devServer: {
    contentBase: __dirname + '/build',
    historyApiFallback: true,
    proxy: {
      /* proxies for api calls while on dev server
      example:
      "/m/*": {
        target: "https://mswtest.lotus.local:8443",
        secure: false
      },
      */
    }
  },
  plugins: [
    new CleanWebpackPlugin(['assets/main.css', 'assets/bundle.js'], {
      root: __dirname + '/build',
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
};

function getSrcPath(srcPath) {
    return Path.resolve(__dirname, app_root, srcPath);
};
