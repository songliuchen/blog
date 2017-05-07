//======================================================================
//
//        命名空间: Tszs.System.GIS
//        类  名: IMap
//        创 建 人: 宋 刘 陈
//        创建时间: 2014/9/06 11:23:35
//        修 改 人: 
//        修改时间: 
//
//======================================================================

/*地图对象接口，提供常用地图相关属性及方法*/
NameSpace("Tszs.GIS.Carto");
Tszs.GIS.Carto.IMap = function(params)
{
    
};

Tszs.System.Base.Extend(Tszs.GIS.Carto.IMap,Tszs.GIS.Base);

Tszs.GIS.Carto.IMap.prototype.init = function()
{
	//地图事件管理
	if(this.addlayereventhandler == null || this.addlayereventhandler=="undefined")
		this.addlayereventhandler = new Array();
	
	if(this.mousemoveeventhandler == null || this.mousemoveeventhandler=="undefined")
		this.mousemoveeventhandler = new Array();
	
	if(this.mousedregeventhandler == null || this.mousedregeventhandler=="undefined")
		this.mousedregeventhandler = new Array();
};

