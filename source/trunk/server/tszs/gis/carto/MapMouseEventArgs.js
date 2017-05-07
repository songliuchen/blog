/**=======================================================
 *
 *        文件名称:  MapMouseEventArgs.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月8日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/
/**
 * 地图鼠标操作参数类
 */
NameSpace("Tszs.GIS.Carto");
Tszs.GIS.Carto.MapMouseEventArgs = function(map,mappoint,screenpoint)
{
    this.map = map;
    
    this.mappoint= mappoint;
    
    this.screenpoint= screenpoint;
};

Tszs.System.Base.Extend(Tszs.GIS.Carto.MapMouseEventArgs,Tszs.GIS.Base);

Tszs.GIS.Carto.MapMouseEventArgs.prototype.GetMap = function()
{
	return this.map;
};

Tszs.GIS.Carto.MapMouseEventArgs.prototype.GetMapPoint = function()
{
	return this.mappoint;
};

Tszs.GIS.Carto.MapMouseEventArgs.prototype.GetScreenPoint = function()
{
	return this.screenpoint;
};