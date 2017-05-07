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
var tstring = require('../system/TString.js') ;
/**
 * 获取url参数
 * @param {Object} paramname 参数名
 * @param {Object} url 访问地址
 */
exports.GetUrlParam=function(paramname,url)
{
    var reg = new RegExp("(^|&)" + paramname + "=([^&]*)(&|$)", "i");
    var r="";
    if(tstring.IsNullOrEmpty(url))
        r = window.location.search.substr(1).match(reg);
    else
        r= url.substring(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

exports.GetServerUrlParams=function(paramname,url)
{
    if(tstring.IsNullOrEmpty(url))
        return "";

    var params = tstring.Split(url,"?");
    if(params.length<2)
        return "";

    params = tstring.Split(params[1],"&");
    var map=null;
    for(var i = 0;i<params.length;i++)
    {
        map = tstring.Split(params[i],"=");
        if(tstring.Equal(paramname,map[0]))
        {
            return map[1];
        }
    }
    return "";
}

/**
 * 获取url参数
 * @param {String} paramname 参数名
 * @param {String} url 访问地址
 */
exports.GetSecondHost=function(url)
{
    if(tstring.IsNullOrEmpty(url))
    	return "";

    var hosts=tstring.Split(url,'.');
    if(hosts.length==0 || hosts.length==1)
    	return "";
    else
    	return hosts[0];
}