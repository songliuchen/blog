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

var tstring = require("../tszs/system/TString");

exports.SetToken=function(userinfo,token)
{
    if(tstring.IsNullOrEmpty(userinfo) || tstring.IsNullOrEmpty(token))
        return;

    global.userinfo = userinfo;
    global.token = token;
}

exports.GetToken=function()
{
    return global.token;
}

exports.CheckToken=function(token)
{
    return global.token == token;
}

exports.CheckToken2=function(req)
{
	var token =req.body["token"];
	if(tstring.IsNullOrEmpty(token) || !this.CheckToken(token))
	{
	    return false;
	}
    return true;
}

exports.GetUserName=function()
{
    return global.userinfo.username;
}

exports.GetUserID=function()
{
    return global.userinfo.id;
}