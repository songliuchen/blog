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
NameSpace("Tszs.System.Plugin");
Tszs.System.Plugin.IPlugin = function(params)
{
    /*设置工具名称*/
    var name = "";

    /*设置工具别名*/
    var ailasname= "";
};

Tszs.System.Plugin.IPlugin.prototype.getName = function()
{
    return this.name;
};

Tszs.System.Plugin.IPlugin.prototype.setName = function(name)
{
    if(Tszs.System.String.IsNullOrEmpty(name))
        return;
    this.name = name;
};

Tszs.System.Plugin.IPlugin.prototype.getAilasName = function()
{
    return this.ailasname;
};

Tszs.System.Plugin.IPlugin.prototype.setName = function(ailasname)
{
    if(Tszs.System.String.IsNullOrEmpty(ailasname))
        return;
    this.ailasname = ailasname;
};

/*激活插件*/
Tszs.System.Plugin.IPlugin.prototype.Create = function(params)
{

};

/*注销插件*/
Tszs.System.Plugin.IPlugin.prototype.Dispose = function(params)
{

};
