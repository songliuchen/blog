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
        console.log("未接收到参数！");
        result["code"]=0;
        result["message"] = "获取数据失败！";
        return;
    }
    var keyword =req.body["keyword"];
    if(tstring.IsNullOrEmpty(keyword))
    {
        console.log("未接收到搜索关键字参数！");
        result["code"]=0;
        result["message"] = "获取数据失败！";
        return;
    }
    //分页查询相关
    var pageindex =req.body["pageindex"];
    var pagesize =req.body["pagesize"];
    if(tstring.IsNullOrEmpty(pagesize))
        pagesize = 10;
    if(tstring.IsNullOrEmpty(pageindex))
        pageindex = 0;
    pageindex =pageindex*pagesize;

    var sql = "select bt_article.id as id,bt_folder.captione as class,caption,labels,grabble,DATE_FORMAT(publish, '%Y-%m-%d') as publish,numcomm,numview from bt_article,bt_folder  where bt_folder.id = bt_article.parent ";
    sql+=" and ";
    sql+= " caption like '%"+keyword+"%' ";

    sql+=" or ";
    sql+= " grabble like '%"+keyword+"%' ";

    sql+=" or ";
    sql+= " content like '%"+keyword+"%' ";

    sql+=" order by publish desc ";
    sql+=" limit "+pageindex+","+ pagesize+" ";
    dbhelper.Query(sql,function(err, rows, fields)
    {
        var result={};
        if(err)
        {
            result["code"]=0;
            result["message"] = "获取数据失败！";
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
        }
        else
        {
            result["code"]=1;
            result["message"] = "获取数据成功！";
            result["data"] = rows;
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
        }
    });
}

