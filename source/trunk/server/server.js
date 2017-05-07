var https = require('https');
var http = require('http');
var querystring = require('querystring');
var tstring= require("./tszs/system/TString.js");
var turl= require("./tszs/web/TUrl.js");
var tpath = require("./tszs/system/io/TPath.js");
var serverconfig= require("./serverconfig");
var fs = require('fs');			// 文件系统API
var rootpath="website";
var httpserver = http.createServer(function(req,res)
{
    // res.redirect('https://www.songliuchen.com'+req.url)
    // res.writeHead(302,{'Location':'https://www.songliuchen.com'+req.url});
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}) ;
httpserver.listen(80);
var options = {
    key: fs.readFileSync('./tszs.key'), //读取key
    cert: fs.readFileSync('./tszs.crt') //读取crt
};
var httpsserver = https.createServer(options,function(req,res)
{
    res.writeHeader(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    if(req.url!=="/favicon.ico")
    {
        if(req.method !="POST" && req.method !="GET")
        {
            res.end("非法访问");
            return;
        }
        if (req.method == "GET")
        {
            try
            {
                if(req.url=='/')
                    req.url=req.url+"index.html";

                var type = (function(_type) {
                    switch(_type) { // 扩展名
                        case 'html':
                            return 'text/html; charset=UTF-8';
                        case 'js':
                            return 'application/javascript; charset=UTF-8';
                        case 'css':
                            return 'text/css; charset=UTF-8';
                        case 'txt':
                            return 'text/plain; charset=UTF-8';
                        case 'manifest':
                            return 'text/cache-manifest; charset=UTF-8';
                        default:
                            return 'application/octet-stream';
                    }
                }(req.url.substring(req.url.lastIndexOf('.') + 1)));

                var path =tstring.StartWidth(req.url,"/Attach/")?
                    tpath.GetRootPath()+"/"+req.url:
                    tpath.GetRootPath()+"/"+rootpath+"/"+req.url;
                path=decodeURI(path);
                if(tstring.Contain(path,"?"))
                    path = tstring.Substring(path,0,path.indexOf("?"));
                fs.readFile(path, function(err, content)
                {
                    if (err)
                    {
                        // 如果由于某些原因无法读取文件
                        res.writeHead(404, {'Content-type' : 'text/plain; charset=UTF-8'});
                        res.write(err.message);
                    }
                    else
                    {
                        // 否则读取文件成功
                        res.writeHead(200, {'Content-type' : type});
                        res.write(content); // 把文件内容作为响应主体
                    }
                    res.end();
                    return;
                });
            }
            catch(err)
            {
                res.end("非法访问");
                return;
            }
        }
        else
        {
            console.log("访问地址:" + req.url);
            var arr = [];
            req.addListener("data", function (data)
            {
                arr.push(data);
            });
            /**
             * 这个是如果数据读取完毕就会执行的监听方法
             */
            req.addListener("end", function ()
            {
                var dataarray = Buffer.concat(arr);
                try
                {
                    var operator = serverconfig.GetServerIndex(req.url);
                    if (!tstring.IsNullOrEmpty(operator))
                    {
                        var data = dataarray.toString();
                        if(!tstring.IsNullOrEmpty(data))
                        {
                            var ret = JSON.parse(data);
                            req.body = ret;
                        }
                        operator.Execute(req, res);
                    }
                    else
                    {
                        var index = dataarray.lastIndexOf("\r\n\r\n");
                        var dataheader = dataarray.slice(0, index).toString();
                        dataarray = dataarray.slice(index + 4, dataarray.length);
                        var dataname = dataheader.substr(dataheader.indexOf("filename=") + 10, dataheader.length);
                        dataname = dataname.substr(0, dataname.indexOf("\""));
                        req.body = {};
                        req.body.data = dataarray;
                        req.body.filename = dataname;
                        operator = serverconfig.GetBufferServerIndex(req.url);
                        if (!tstring.IsNullOrEmpty(operator))
                        {
                            operator.Execute(req, res);
                            console.log("处理完成");
                        }
                        else
                        {
                            console.log("找不到对应的处理方法");
                            res.end("非法访问");
                        }
                    }
                }
                catch (e)
                {
                    console.log(e);
                    res.end("非法访问");
                }
            });
        }
    }
}) ;
httpsserver.listen(443);
console.log("服务器已启动：访问地址：http://www.songliuchen.com");
console.log("服务器已启动：访问地址：https://www.songliuchen.com");

