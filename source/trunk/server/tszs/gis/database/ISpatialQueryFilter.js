/**=======================================================
 *
 *        文件名称:  ISpatialQueryFilter.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月12日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

/**
 * 空间查询对象，配置空间查询参数
 */
NameSpace("Tszs.GIS.DataBase");
Tszs.GIS.DataBase.ISpatialQueryFilter = function(params)
{
	
};

Tszs.System.Base.Extend(Tszs.GIS.DataBase.ISpatialQueryFilter,Tszs.DataBase.IQueryFilter);
Tszs.System.Base.Extend(Tszs.GIS.DataBase.ISpatialQueryFilter,Tszs.GIS.Base);

Tszs.GIS.DataBase.ISpatialQueryFilter.prototype.ReturnGeometry= true;