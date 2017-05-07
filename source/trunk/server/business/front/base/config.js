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

exports.GetPageSize=function()
{
    return 5;
}

exports.GetTotalPageSize=function(totalcount,pagesize)
{
    if(tstring.IsNullOrEmpty(pagesize))
        pagesize = this.GetPageSize();
    return  parseInt(totalcount/pagesize);
}