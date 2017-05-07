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
var config= require("../base/config.js");
/**
 * 执行数据库获取
 * @param req
 * @param res
 * @constructor
 */
exports.Execute=function(req,res)
{
    if(tstring.IsNullOrEmpty(req.body))
        req.body={};

    //根据标签搜索
    var labels =req.body["labels"];

    //是否推荐文章
    var recomm =req.body["recomm"];

    //文章分类
    var captione =req.body["captione"];

    //文章月份
    var publish =req.body["publish"];

    //文章月份
    var keyword =req.body["keyword"];

    //分页查询相关
    var pageindex =req.body["pageindex"];
    var pagesize =req.body["pagesize"];
    if(tstring.IsNullOrEmpty(pagesize))
        pagesize = config.GetPageSize();
    if(tstring.IsNullOrEmpty(pageindex))
        pageindex = 0;
    pageindex =pageindex*pagesize;

    var sql = "select count(*) as totalcount from bt_article_demo  where  1=1 ";
    if(!tstring.IsNullOrEmpty(labels))
    {
        sql+=" and ";
        sql+= " labels like '%"+labels+"%' ";
    }

    if(!tstring.IsNullOrEmpty(recomm))
    {
        sql+=" and ";
        sql+= " recomm = '"+recomm+"' ";
    }

    if(!tstring.IsNullOrEmpty(captione))
    {
        sql+=" and ";
        sql+= " parent = "+captione+" ";
    }

    if(!tstring.IsNullOrEmpty(publish))
    {
        sql+=" and ";
        sql+= " publish between '"+publish+"-01' and '"+ publish + "-31' ";
    }

    if(!tstring.IsNullOrEmpty(keyword))
    {
        keyword = unescape(keyword);
        sql+=" and ";
        sql+= " caption like '%"+keyword+"%' ";

        sql+=" or ";
        sql+= " grabble like '%"+keyword+"%' ";

        sql+=" or ";
        sql+= " content like '%"+keyword+"%' ";
    }

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

