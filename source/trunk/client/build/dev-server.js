require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var superagent = require('superagent')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var remoteUrl = 'https://api.song.com';
app.post('/*/*.do', function(req, res) {
    // 使用了superagent来发起请求
    // 查询本机ip，这里需要根据实际情况选择get还是post
    console.log(remoteUrl+req.url);
    console.log("请求报头");
    console.log(req.headers);
    console.log("请求报文");
    var bodystring=JSON.stringify(req.body);
    console.log(bodystring);
    if(bodystring =="" || bodystring=="{}" && req.url.indexOf("manage")!=-1)
    {
    	console.log("进入附件操作");
    	var arr = [];
    	req.addListener("data", function (data)
      {
         arr.push(data);
      });
    	req.addListener("end", function ()
    	{
    		var data = Buffer.concat(arr);
	    	var url = remoteUrl+req.url;
	    	console.log("访问地址："+url);
	    	var sreq = superagent.post(url).send(data);
	    	sreq.pipe(res);
	    	sreq.on('error',function(error){
		    	console.log('代理失败');
		    	console.log(error);
		    });
    	});
    }
    else
    {
    	console.log("进入字符串操作");
    	var sreq = superagent.post(remoteUrl+req.url).send(req.body);
    	sreq.pipe(res);
    	sreq.on('error',function(error){
	    	console.log('代理失败');
	    	console.log(error);
    	});
    }
});

app.get('/attached/*.png', function(req, res) {
    // 使用了superagent来发起请求
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get(remoteUrl+req.url);
    	sreq.pipe(res);
    	sreq.on('error',function(error){
	    	console.log('代理失败');
	    	console.log(error);
    	});
});

app.get('/attached/*.jpg', function(req, res) {
    // 使用了superagent来发起请求
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get(remoteUrl+req.url);
    	sreq.pipe(res);
    	sreq.on('error',function(error){
	    	console.log('代理失败');
	    	console.log(error);
    	});
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
})
