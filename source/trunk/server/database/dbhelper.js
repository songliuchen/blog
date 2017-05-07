/**======================================================================
 //
 //        命名空间: Tszs.Web
 //        类  名: Url
 //        创 建 人: 宋 刘 陈
 //		  Q      Q: 756519755
 //	 	  网    址：www.songliuchen.com
 //        创建时间: 2014/8/31 11:23:35
 //        修 改 人:
 //        修改时间:
 //
 ======================================================================*/

var mysql = require('mysql');
var tstring = require("../tszs/system/TString");
var connection=null;
var datetmie;
exports.GetConnection=function()
{
    if(tstring.IsNullOrEmpty(connection) || (Date.now()-datetmie)/1000/60/60>5)
    {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'songliuchen',
            database: 'blog'
        });
        datetmie = Date.now();
        connection.connect();
    }
    return connection;
}

exports.Query=function(sqlstr,fun)
{
    this.Query2(sqlstr,undefined,fun);
}

exports.Query2=function(sqlstr,params,fun)
{
    console.log("进入方法：sql:" + sqlstr);
    var innerfun = fun;
    //查询
    this.GetConnection().query(sqlstr, params, function (err, rows, fields) {
        if (err)
        {
            console.error('抛出异常:', err);
        }
        if (innerfun != undefined && innerfun != null)
            innerfun(err, rows, fields);
    });
}