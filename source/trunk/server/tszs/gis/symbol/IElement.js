/**=======================================================
 *
 *        文件名称:  IElement.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月15日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

/**
 * 元素对象接口
 */
NameSpace("Tszs.GIS.Symbol");
Tszs.GIS.Symbol.IElement = function(params)
{
	
};

Tszs.System.Base.Extend(Tszs.GIS.Symbol.IElement,Tszs.GIS.Base);

Tszs.GIS.Symbol.IElement.prototype.GetGeometry = function()
{
	return Tszs.GIS.Utils.Convert.ConvertToTszsGeometry(this.getInnerObject().geometry);
}

Tszs.GIS.Symbol.IElement.prototype.SetGeometry = function(geometry)
{
	if(!Tszs.System.String.IsNullOrEmpty(geometry))
		this.getInnerObject().geometry = geometry.getInnerObject();
}

Tszs.GIS.Symbol.IElement.prototype.GetSymbol = function(symbol)
{
	
}

Tszs.GIS.Symbol.IElement.prototype.SetSymbol = function(symbol)
{
	if(!Tszs.System.String.IsNullOrEmpty(symbol))
		this.getInnerObject().setSymbol(symbol.getInnerObject());
}

Tszs.GIS.Symbol.IElement.prototype.GetAttributes = function()
{
	return tempattributes;
}

var tempattributes;
Tszs.GIS.Symbol.IElement.prototype.SetAttributes = function(attributes)
{
	tempattributes= attributes;
	this.getInnerObject().attributes= Tszs.GIS.Utils.Convert.ConvertToEsriAttributes(attributes);
}
