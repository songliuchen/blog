/**=======================================================
 *
 *        文件名称:  Style.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月18日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

/**
 * 枚举类
 */
(function()
{
	NameSpace("Tszs.GIS.Utils");
	/**
	 * 符号枚举
	 */
	Tszs.GIS.Utils.SymbolStyle=
	{
		/*空的什么也不填充*/
		StyleEmpty:0,
		
		/*单色填充*/
		StyleSimple:1
	},
	
	Tszs.GIS.Utils.SymbolPointStyle=
	{
		Circle:0
	},
	
	/**
	 * 图形类型枚举
	 */
	Tszs.GIS.Utils.GeometryType=
	{
		Point:0,
		Polyline:1,
		Polygon:2
	},
	
	/**
	 * 服务枚举
	 */
	Tszs.GIS.Utils.ServerType=
	{
		TiledServer:0,
		DynamicServer:1,
		ImageServer:2,
		FeatureServer:3
	}
})();