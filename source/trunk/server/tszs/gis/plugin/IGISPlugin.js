/**======================================================================
//
//        命名空间: Tszs.System.Plugin
//        类  名: IPlugin
//        创 建 人: 宋 刘 陈
//        创建时间: 2014/9/06 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

/*地图对象接口，提供常用地图相关属性及方法*/
NameSpace("Tszs.GIS.Plugin");
Tszs.GIS.Plugin.IGISPlugin = function(params)
{

};

Tszs.System.Base.Extend(Tszs.GIS.Plugin.IGISPlugin,Tszs.System.Plugin.IPlugin);

Tszs.GIS.Plugin.IGISPlugin.prototype.getMap = function()
{
    return this.map;
};


