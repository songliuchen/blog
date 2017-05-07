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

var tstring= require("../../../tszs/system/TString.js");
var dbhelper= require("../../../database/dbhelper.js");
var tokenutil= require("../../../database/tokenutil.js");
/**
 * 执行数据库获取
 * @param req
 * @param res
 * @constructor
 */
exports.Execute=function(req,res)
{
    var result={};
    if(tstring.IsNullOrEmpty(req.body))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //token
    var token =req.body["token"];
    if(!tokenutil.CheckToken2(req))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        return;
    }

    //跳转地址
    var id =req.body["id"];
    if(tstring.IsNullOrEmpty(id))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    var sql = "select bt_article.*,bt_folder.captione as selectclass from bt_article,bt_folder where bt_article.parent = bt_folder.id  and bt_article.id="+id;
    dbhelper.Query(sql,function(err, rows, fields)
    {
        var result={};
        if(err)
        {
            console.log("获取文章详情");
            result["code"]=0;
            result["message"] = "获取数据失败！";
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
        }
        else
        {
            console.log("查询文章数据成功");
            result["code"]=1;
            result["message"] = "获取数据成功！";
            result["data"] = rows;
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
        }
    });
}

