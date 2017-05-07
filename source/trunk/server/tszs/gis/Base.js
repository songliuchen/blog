//======================================================================
//
//        命名空间: Tszs.System.GIS
//        类  名: Base
//        创 建 人: 宋 刘 陈
//        创建时间: 2014/9/06 11:23:35
//        修 改 人:
//        修改时间:
//
//======================================================================

NameSpace("Tszs.GIS");
Tszs.GIS.Base =function(params)
{
};

Tszs.GIS.Base.prototype.CheckObject = function()
{
    if(this.InnerObject == null)
        return false;
    else
        return true;
};

Tszs.GIS.Base.prototype.getInnerObject = function()
{
    return this.InnerObject;
};

