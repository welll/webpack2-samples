const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = function (env) {

  const plugins = [
    new HtmlWebpackPlugin({filename: 'test.html'}),
 
   new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new UglifyJSPlugin({
        parallel: {
	  cache: true,
          workers: 2
	},
        output: {
          comments: false
        }
    })
  ]	

  return {
    devtool: 'source-map',
    context: sourcePath,
    entry: {
      js: './index.js'
    },
    output: {
      path: distPath,
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
	  options: { 
            presets: [ 
              [ 'es2015', { modules: false } ] 
            ] 
          }
        }
      ]
    },
    resolve: {
      extensions: [ '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
    },

    plugins,

    performance: {
      maxAssetSize: 100,
      maxEntrypointSize: 300,
      hints: 'warning',
    },

    stats: {
      colors: {
        green: '\u001b[32m',
      },
      maxModules: Infinity,
      exclude: undefined
    }

  };
};
