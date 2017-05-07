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
var TDictionary= require("../../../tszs/system/collections/TDictionary.js");
var tdictionary = new TDictionary();
/**
 * 执行数据库获取
 * @param req
 * @param res
 * @constructor
 */
exports.Execute=function(req,res)
{
    // res.setHeader("Set-Cookie", "token="+tstring.GetGUID());
    // res.setHeader("Set-Cookie", "author=song");
    if(tstring.IsNullOrEmpty(req.body))
    {
        console.log("未接收到参数！");
        req.body={};
    }
    //用户名
    var username =req.body["username"];

    //密码
    var password =req.body["password"];

    var sql = "select id,username from bt_member where username ='"+ username +"' and password= '"+ password +"'";
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
		    if(tstring.IsNullOrEmpty(rows) || rows.length == 0)
            {
                result["code"]=0;
                result["message"] = "用户名密码不正确！";
            }
            else
            {
                result["code"] = 1;
                result["message"] = "获取数据成功！";
                var token = tstring.GetGUID();
                result["token"] =token;
                result["author"] =username;
                tokenutil.SetToken(rows[0],token);
            }
            var resultstring=JSON.stringify(result);
            res.end(resultstring);
		}
	});
}

