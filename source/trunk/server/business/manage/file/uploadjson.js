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
var tdatetime= require("../../../tszs/system/TDataTime.js");
var turl= require("../../../tszs/web/TUrl.js");
var dbhelper= require("../../../database/dbhelper.js");
var tpath = require("../../../tszs/system/io/TPath.js");
var tdictionary= require("../../../tszs/system/collections/TDictionary.js");
var tokenutil= require("../../../database/tokenutil.js");
var fs = require('fs');
/**
 * 执行数据库获取
 * @param req
 * @param res
 * @constructor
 */
exports.Execute=function(req,res)
{
    var result={};
    //token
    var token =req.body["token"];
    if(!tokenutil.CheckToken2(req))
    {
        result["code"]=0;
        result["message"] = "获取数据失败！";
        return;
    }

    var path= tpath.GetRootPath();

    //文件保存目录URL
    var saveUrl = path + "/Attach/"+tdatetime.Format("yyyyMM")+"/";

    if(!tpath.Exists(saveUrl))
    {
        tpath.CreateFolder(saveUrl);
    }
    var extTable = new tdictionary();
    extTable.Add("image", "gif,jpg,jpeg,png,bmp");
    extTable.Add("flash", "swf,flv");
    extTable.Add("media", "swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb");
    extTable.Add("file", "doc,docx,xls,xlsx,ppt,htm,html,txt,zip,rar,gz,bz2");

    //最大文件大小
    var maxSize = 1000000;
    var dirName = turl.GetServerUrlParams("dir",req.url);
    if (tstring.IsNullOrEmpty(dirName) || !extTable.ContainsKey(dirName))
        dirName="image";

    var _fileName = req.body.filename;
    if (tstring.IsNullOrEmpty(_fileName) || !tstring.Contain(_fileName,'.') || !tstring.Contain(extTable.Get(dirName), tstring.Split(_fileName,'.')[1].toLowerCase()+","))
    {
        console.log("上传文件名为空或格式不正确");
        result["code"]=0;
        result["message"] = "获取数据失败！";
        var resultstring=JSON.stringify(result);
        res.end(resultstring);
        return;
    }
    var fileExt = tstring.ToLower(_fileName);
    var newFileName = tdatetime.Format("yyyyMMddhhmmss")+"_"+ fileExt;
    var filePath = saveUrl + newFileName;
    console.log(filePath);
    fs.writeFile(filePath, req.body.data);
    result["error"]=0;
    result["code"]=1;
    result["messsage"]="获取数据成功！";
    result["url"] = "/Attach/"+tdatetime.Format("yyyyMM")+"/"+newFileName;
    var resultstring=JSON.stringify(result);
    res.end(resultstring);
}

