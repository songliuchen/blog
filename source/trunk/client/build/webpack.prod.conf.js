var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
var path = require('path');
var glob = require('glob');
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  // eval-source-map is faster for development
  devtool: false,
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    //在 plugins 中添加
    new webpack.optimize.UglifyJsPlugin({
        comments: false,        //去掉注释
        compress: {
            warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
        }
    }),
    //在 plugin 中添加
    new CompressionWebpackPlugin({ //gzip 压缩
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(js|css)$'    //压缩 js 与 css
        ),
        threshold: 10240,
        minRatio: 0.8
    }),
    new ExtractTextPlugin('[name].css')
  ]
})

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  	glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
    entries[pathname] = entry;
  });
  return entries;
}

var pages = getEntry('./src/module/**/*.html');
for (var pathname in pages)
{
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname.substr(pathname.lastIndexOf('/')+1) + '.html',
    template: pages[pathname], // 模板路径
    minify: { //传递 html-minifier 选项给 minify 输出
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    inject: true, // js插入位置
    // 每个html引用的js模块，也可以在这里加上vendor等公用模块
    chunks: [pathname, "vendor", "manifest"]
  };
  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
