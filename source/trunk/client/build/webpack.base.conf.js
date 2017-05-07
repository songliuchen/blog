var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')
var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

var glob = require('glob');
var entries = getEntry('./src/module/**/*.js'); // 获得入口js文件

module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
//  publicPath:'./',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
//  preLoaders: [
//    {
//      test: /\.vue$/,
//      loader: 'eslint',
//      include: projectRoot,
//      exclude: /node_modules/
//    },
//    {
//      test: /\.js$/,
//      loader: 'eslint',
//      include: projectRoot,
//      exclude: /node_modules/
//    }
//  ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}

/**
 * 获取指定路径下文件集合
 * @param {Object} globPath 目录路径及文件类型参数
 */
function getEntry(globPath)
{
  var entries = {},
    basename, tmp, pathname;
    
    //通过glob.sync方法获取指定的入口文件
    glob.sync(globPath).forEach(function (entry)
    {
	    basename = path.basename(entry, path.extname(entry));
	    tmp = entry.split('/').splice(-3);
	    // 输出js和html的路径
	    pathname = tmp.splice(0, 1) + '/' + basename; 
	    entries[pathname] = entry;
  });
  console.log("base-entrys:");
  console.log(entries);
  return entries;
}
