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

    //根据id获取数据
    var id =req.body["id"];
    if(tstring.IsNullOrEmpty(id))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }
    var sql = "delete bt_folder_demo,bt_article_demo,bt_comment from bt_folder_demo left join bt_article_demo on bt_article_demo.parent=bt_folder_demo.id left join bt_comment on bt_comment.parent = bt_article_demo.id where bt_folder_demo.id="+id;
    console.log("删除分类数据");
    console.log(sql);
    dbhelper.Query(sql,function(err, rows, fields)
    {
        if(err)
        {
            console.log("删除分类数据失败");
            result["code"]=0;
            result["message"] = "获取数据失败！";
            var resultstring=JSON.stringify(result);
            res.end(resultstring);

        }
        else
        {
            console.log("删除分类数据成功");
            result["code"]=1;
            result["message"] = "获取数据成功！";
            result["data"] = rows;
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
        }
    });
}

