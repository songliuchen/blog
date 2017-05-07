/**======================================================================
//
//        命名空间: Tszs.System.Plugin
//        类  名: ITool
//        创 建 人: 宋 刘 陈
//        创建时间: 2014/9/06 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

/**
 * 地图对象接口，提供常用地图相关属性及方法
 */
NameSpace("Tszs.GIS.Plugin");
Tszs.GIS.Plugin.IGISTool = function(params)
{
	
};

Tszs.System.Base.Extend(Tszs.GIS.Plugin.IGISTool,Tszs.GIS.Base);

/**
 * 工具完成方法
 */
Tszs.GIS.Plugin.IGISTool.prototype.FinishTool = function(geometry)
{
	if(!Tszs.System.String.IsNullOrEmpty(this.finishtoolevent))
	{
		for(var i = 0;i<this.finishtoolevent.length;i++)
			this.finishtoolevent[i](geometry);
	}
};

/**
 * 注册工具完成事件
 */
Tszs.GIS.Plugin.IGISTool.prototype.AddFinishToolEvent = function(event)
{
	if(Tszs.System.String.IsNullOrEmpty(event))
		return;
	
	if(Tszs.System.String.IsNullOrEmpty(this.finishtoolevent))
		this.finishtoolevent = new Array();
	
	this.finishtoolevent.push(event);
};

