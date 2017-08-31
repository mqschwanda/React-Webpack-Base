/* webpack.config.js */

import {
  HotModuleReplacementPlugin,
  EnvironmentPlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
// import connectAPI from '../imports/startup/server/api/index';

const { UglifyJsPlugin } = optimize;
const appDir = path.resolve(__dirname, '../');
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8080;

import startup from '../imports/startup/server/config';

export default {
  context: path.resolve(appDir), // the base directory for resolving entry points and loaders from configuration
  entry: [ // the point or points to enter the application
    path.join(appDir, 'imports/startup/client/index.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {},
        }],
      }, { // react icons
        test: /react-icons\/(.)*.(js|jsx)?$/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: [
              'es2015',
              'react',
            ],
          },
        }],
      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
          options: {
            insertAt: 'top', // insert style elements at the beginning of the `<head>`
          },
        }, {
          loader: 'css-loader',
        }],
      }, {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }],
      },
    ],
  },
  resolve: {
    alias: {
      reducers: path.resolve(appDir, 'imports/reducers'),
      modules$: path.resolve(appDir, 'imports/modules/index.js'),
      components$: path.resolve(appDir, 'imports/ui/components/index.js'),
      containers$: path.resolve(appDir, 'imports/ui/containers/index.js'),
      layouts$: path.resolve(appDir, 'imports/ui/layouts/index.js'),
      icons$: path.resolve(appDir, 'imports/ui/icons/index.js'),
      config: path.resolve(appDir, 'config'),
    },
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
  output: {
    path: path.join(appDir, 'public'), // the output directory as an absolute path
    pathinfo: isDev, // include comments in bundles with information about the contained modules
    publicPath: '', // the prefix to every URL created by the runtime or loaders
    filename: 'bundle/index.js', // the name of the output bundle
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Webpack Base',
      filename: 'index.html',
      appMountId: 'app',
      mobile: true,
      devServer: `http://localhost:${port}`,
      template: path.resolve(appDir, 'imports/ui/templates/index.ejs'),
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: isDev,
        removeComments: isProd,
      },
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      beautify: isDev,
      comments: isDev,
      sourceMap: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    allowedHosts: [ // pecify a whitelist of hosts that are allowed to access the dev server
      '.localtunnel.me',
    ],
    https: false, // use a self-signed certificate (served over HTTP by defualt)
    disableHostCheck: false, // option to bypasses host checking (this is not recommended)
    compress: true, // enable gzip compression for everything served
    contentBase: path.join(appDir, 'public'), // tell the server where to serve static files from
    watchContentBase: true, // content base file changes will trigger a full page reload
    publicPath: '', // the prefix to every URL created by the runtime or loaders
    hot: true, // enable hot module replacement feature
    overlay: { // shows a full-screen overlay in the browser when there are compiler issues
      warnings: true,
      errors: true,
    },
    open: true, // will open the default web browser
    openPage: '', // specify a page to navigate to when opening browser
    port, // specify a port number to listen for requests on
    setup(app) { // access the Express app object and add custom middleware
      /* do something with Express app object */
      startup(app);
    },
    watchOptions: {
      aggregateTimeout: 300, // delay before rebuilding once the first file changed, this aggregates any other changes made during this time period into one rebuild
      ignored: /node_modules/, // exclude path
      poll: 1000, // poll interval
    },
  },
};
