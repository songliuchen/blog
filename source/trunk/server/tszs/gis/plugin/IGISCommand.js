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

/*地图对象接口，提供常用地图相关属性及方法*/
NameSpace("Tszs.GIS.Plugin");
Tszs.GIS.Plugin.IGISCommand = function(params)
{

};

Tszs.System.Base.Extend(Tszs.GIS.Plugin.IGISCommand,Tszs.System.Plugin.ICommand);
Tszs.System.Base.Extend(Tszs.GIS.Plugin.IGISCommand,Tszs.GIS.Plugin.IGISPlugin);