/**=======================================================
 *
 *        文件名称:  IPoint.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月8日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

NameSpace("Tszs.GIS.Geometry");
Tszs.GIS.Geometry.IPoint = function(params)
{
    /*X坐标*/
    this.X = null;

    /*Y坐标*/
    this.Y = null;
};

Tszs.System.Base.Extend(Tszs.GIS.Geometry.IPoint,Tszs.GIS.Base);
