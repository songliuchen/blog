/**======================================================================
//
//        命名空间: Tszs.System
//        类  名: String
//        创 建 人: 宋 刘 陈
//		  Q      Q: 756519755
//	 	  网    址：www.songliuchen.com
//        创建时间: 2014/8/31 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

var tpath = require('path');
var fs=require('fs');
/**
 * 判断参数是否为空,value ，为空返回true,不为空返回false
 * @param {Object} value 是否为空字段名
 * @return 是否为空，空则返回true，否则返回false
 */
exports.GetRootPath=function()
{
    return tpath.resolve('');
}

exports.Exists=function(path)
{
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}

exports.CreateFolder=function(path)
{
    var exist= this.Exists(path);
    if(!exist)
    {
        fs.mkdirSync(path);
    }
}

