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
var serverutil= require("../../../server/serverutil.js");
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
    var linkhref =req.body["linkhref"];
    if(tstring.IsNullOrEmpty(linkhref))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    var author =req.body["author"];
    if(tstring.IsNullOrEmpty(author))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //分类编号
    var classid =req.body["classid"];
    if(tstring.IsNullOrEmpty(classid))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //标签
    var labels =req.body["labels"];
    if(tstring.IsNullOrEmpty(labels))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //是否置顶文章
    var pinned =req.body["pinned"];
    if(tstring.IsNullOrEmpty(pinned))
        pinned="";

    //是否私密文章
    var secret =req.body["secret"];
    if(tstring.IsNullOrEmpty(secret))
        secret="";

    //是否禁止品论
    var closed =req.body["closed"];
    if(tstring.IsNullOrEmpty(closed))
        closed="";

    //是否推荐文章
    var recomm =req.body["recomm"];
    if(tstring.IsNullOrEmpty(recomm))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //标题
    var caption =req.body["caption"];
    if(tstring.IsNullOrEmpty(caption))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //内容
    var content =req.body["content"];
    if(tstring.IsNullOrEmpty(content))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //文字描述
    var grabble =req.body["grabble"];
    if(tstring.IsNullOrEmpty(grabble))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    var logourl =req.body["logourl"];
    if(tstring.IsNullOrEmpty(logourl))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //通告信息
    var explain =req.body["explain"];
    if(tstring.IsNullOrEmpty(explain))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //发布时间
    var publish =req.body["publish"];
    if(tstring.IsNullOrEmpty(publish))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    //实际作者及时间
    var correct =req.body["correct"];
    if(tstring.IsNullOrEmpty(correct))
        correct=author+"_"+new Date().toLocaleString();

    //保存图片到本地
    var tacback =req.body["tacback"];
    if(tstring.IsNullOrEmpty(tacback))
        tacback="";

    //访问ip
    var address =serverutil.GetClientIp(req);
    if(tstring.IsNullOrEmpty(address))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    var acccode =req.body["acccode"];
    if(tstring.IsNullOrEmpty(acccode))
        acccode="";

    var logourl =req.body["logourl"];
    if(tstring.IsNullOrEmpty(logourl))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }

    var sql = "insert into bt_article_demo "+
        "(locale,author,parent,labels,pinned,secret,"+
        "closed,recomm,caption,content,grabble,logourl,introduction,"+
        "publish,correct,tacback,address,numcomm,numview,acccode) values("+
        "'"+linkhref+"',"+
        tokenutil.GetUserID()+","+
        classid+","+
        "'"+labels+"',"+
        pinned+","+
        secret+","+
        closed+","+
        recomm+","+
        "?,"+
        "?,"+
        "?,"+
        "'"+logourl+"',"+
        "?,"+
        "'"+publish+"',"+
        "'"+correct+"',"+
        "'"+tacback+"',"+
        "'"+address+"',"+
        0+","+
        0+","+
        "'"+acccode+"')";
    dbhelper.Query2(sql,[caption,content,grabble,explain],function(err, rows, fields)
    {
        var result={};
        if(err)
        {
            console.log("添加故事文章数据失败");
            result["code"]=0;
            result["message"] = "获取数据失败！";
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
        }
        else
        {
            console.log("添加故事文章数据成功");
            result["code"]=1;
            result["message"] = "获取数据成功！";
            result["data"] = rows;
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
        }
    });
}

