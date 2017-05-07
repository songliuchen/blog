/**======================================================================
//
//        命名空间: Tszs.System
//        类  名: Base
//        创 建 人: 宋 刘 陈
//        Q      Q: 756519755
//        网    址：www.songliuchen.com
//        创建时间: 2014/8/31 11:23:35
//        修 改 人: 
//        修改时间: 
//
======================================================================*/

(function()
{
	/**
	 * 获取Tszs框架 CSS样式单集合
	 */
	function GetTszsCssFiles()
	{
		var mincssfiles = new Array();
		return mincssfiles;
	}
	
	/**
	 * 获取Tszs框架中GIS CSS样式单集合
	 */
	function GetTszsGISCssFiles()
	{
		var mingiscssfiles = new Array();
		return mingiscssfiles;
	}
	
	/**
	 * 获取Tszs框架中GIS中 ArcGIS CSS样式单集合
	 */
	function GetArcGISCssFiles()
	{
		var arcgiscssfiles = new Array(
			    "gis/arcgis/arcgis-3.9/js/esri/css/esri.css",
			    "gis/arcgis/arcgis-3.9/js/dojo/dijit/themes/claro/claro.css");
		return arcgiscssfiles;
	}
	
	/**
	 * 获取Tszs框架中GIS中 OpenLayer CSS样式单集合
	 */
	function GetOpenLayerCssFiles()
	{
		var openlayercssfiles = new Array();
		return openlayercssfiles;
	}
	
	/**
	 * 获取Tszs框架中js脚本集合
	 */
	function GetTszsJsFiles()
	{
		var minjsfiles = new Array(
			    "system/Base.js",
			    "system/String.js",
			    
			    "system/draw/Color.js",
			    
			    "system/collections/List.js",
			    "system/collections/Dictionary.js",
			
			    "plugin/command/IPlugin.js",
			    "plugin/command/ITool.js",
			    "plugin/command/ICommand.js",
			    
			    "database/IQueryFilter.js",
			    "database/IRow.js"
			    );
		return minjsfiles;
	}
	
	/**
	 * 获取Tszs框架中 GIS  js脚本集合
	 */
	function GetTszsGISJsFiles()
	{
		var mingisjsfiles = new Array(
			    "gis/Base.js",
			    "gis/Config.js",
			    "gis/carto/ILayer.js",
			    "gis/carto/IFeatureLayer.js",
			    "gis/carto/IMap.js",
			    "gis/carto/MapMouseEventArgs.js",
			    
			    "gis/plugin/IGISPlugin.js",
			    "gis/plugin/IGISTool.js",
			    "gis/plugin/IGISCommand.js",
			    
			    "gis/geometry/IPoint.js",
			    "gis/geometry/IPolyline.js",
			    "gis/geometry/IPolygon.js",
			    
			    "gis/database/ISpatialQueryFilter.js",
			    "gis/database/SpatialQueryFilterClass.js",
			    
			    "gis/symbol/IElement.js",
			    "gis/symbol/ElementMouseEventArgs.js",
			    
			    "gis/symbol/ISymbol.js",
			
			    "gis/editor/IEditInterceptor.js",
			    "gis/editor/EditInterceptorManager.js",
			    
			    "gis/utils/Style.js"
			    );
		return mingisjsfiles;
	}
	
	/**
	 * 获取Tszs框架中 GIS ArcGIS js脚本集合
	 */
	function GetArcGISJsFiles()
	{
		var arcgisjsfiles = new Array(
			    /*ArcGIS本身对象*/
			    "gis/arcgis/arcgis-3.9/init.js",
			
			    /*Tszs.ArcGIS对象*/
			    "gis/arcgis/carto/DynamicMapServiceLayerClass.js",
			    "gis/arcgis/carto/GraphisLayerClass.js",
			    "gis/arcgis/carto/MapClass.js",
			    "gis/arcgis/carto/FeatureLayerClass.js",
			    
			    "gis/arcgis/geometry/EnvelopeClass.js",
			    "gis/arcgis/geometry/PointClass.js",
			    "gis/arcgis/geometry/PolylineClass.js",
			    "gis/arcgis/geometry/PolygonClass.js",
			    
			    "gis/arcgis/symbol/PointElementClass.js",
			    "gis/arcgis/symbol/PolylineElementClass.js",
			    "gis/arcgis/symbol/PolygonElementClass.js",
			    
			    "gis/arcgis/symbol/PointSymbolClass.js",
			    "gis/arcgis/symbol/PolylineSymbolClass.js",
			    "gis/arcgis/symbol/PolygonSymbolClass.js",
			    
			    "gis/arcgis/database/RowBase.js",
			    
			    "gis/arcgis/utils/GISUtils.js",
			    "gis/arcgis/utils/Convert.js"
			    );
		return arcgisjsfiles;
	}
	
	/**
	 * 获取Tszs框架中 GIS OpenLayer  js脚本集合
	 */
	function GetOpenLayerJsFiles()
	{
		var openlayerjsfiles = new Array(
				/*OpenLayer 自生JS文件引用*/
			    "gis/openlayer/openlayers-2.13.1/lib/OpenLayers.js",
			
			    /*OpenLayer 封裝對象*/
			    "gis/openlayer/carto/WMSLayerClass.js",
			    "gis/openlayer/carto/GraphisLayerClass.js",
			    "gis/openlayer/carto/MapClass.js",
			    "gis/openlayer/command/DrawPointTool.js",
			    "gis/openlayer/command/DrawPolylineTool.js",
			    "gis/openlayer/command/DrawPolygonTool.js"
			    );
		return openlayerjsfiles;
	}
})();