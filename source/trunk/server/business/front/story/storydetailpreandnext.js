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
    if(tstring.IsNullOrEmpty(req.body))
    {
        res.end("非法访问");
        console.log("未接收到参数！");
        return;
    }
    //根据编号查询
    var id =req.body["id"];
    if(tstring.IsNullOrEmpty(id) || !Number(id))
    {
        res.end("非法访问");
        console.log("请求参数非法，为无效的文章编号！"+id);
        return;
    }

    var sql = "(select id ,caption from bt_article_story where id<";
    sql+= id+" order by id desc limit 1)";
    sql+=" union (select id ,caption from bt_article_story where id>"
    sql+= id+" order by id asc limit 1)";
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

