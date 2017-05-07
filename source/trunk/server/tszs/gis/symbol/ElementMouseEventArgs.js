/**=======================================================
 *
 *        文件名称:  ElementMouseEventArgs.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月21日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

/**
 * 元素鼠标操作参数类，继承地图鼠标操作参数类
 */
NameSpace("Tszs.GIS.Symbol");
Tszs.GIS.Symbol.ElementMouseEventArgs = function(map,mappoint,screenpoint,element)
{
    this.map = map;
    
    this.mappoint= mappoint;
    
    this.screenpoint= screenpoint;
    
    this.element =element;
};

Tszs.System.Base.Extend(Tszs.GIS.Symbol.ElementMouseEventArgs,Tszs.GIS.Carto.MapMouseEventArgs);

Tszs.GIS.Symbol.ElementMouseEventArgs.prototype.GetElement = function()
{
	return this.element;
};