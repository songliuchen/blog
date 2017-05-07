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


/**
 * 框架启动文件
 */
(function()
{
	var singleFile = false;
	var gistype ="ArcGIS";
	var scriptfilename="Tszs.js";
	var location = GetScriptLocation(scriptfilename);
	/*CSS文件加载*/
    if(!singleFile)
    {
        /*系统JS文件，提供JS常用功能*/
        var systemcssfiles = GetTszsCssFiles();
        
        //加载第三方样式文件
        var thirdcssfiles = GetThirdCssFiles();
        
        //加载业务样式文件
        var businesscssfiles = GetBusinessCssFiles();
//      /*封装通用GIS对象文件*/
//      var tszsgiscssfiles = GetTszsGISCssFiles();
//
//      /*判断GIS服务类型，加载对应的样式单文件*/
//      var giscssfiles = null;
//      if(gistype == "ArcGIS")
//      		giscssfiles= GetArcGISCssFiles();
//      else if(gistype == "Openlayer")
//      		giscssfiles= GetOpenLayerCssFiles();
//
        var cssfiles = systemcssfiles;
//      for(var i = 0;i<tszsgiscssfiles.length;i++)
//      		cssfiles.push(tszsgiscssfiles[i]);
        		
        for(var i = 0;i<thirdcssfiles.length;i++)
        	cssfiles.push(thirdcssfiles[i]);
        	
        for(var i = 0;i<businesscssfiles.length;i++)
        	cssfiles.push(businesscssfiles[i]);
//      
//      if(giscssfiles!= null)
//      {
//	        	for(var i = 0;i<giscssfiles.length;i++)
//	        		cssfiles.push(giscssfiles[i]);
//      }

        //添加所有样式单进行加载
        AddStylesToDocument(cssfiles,location);
    }

    /*控制Tszs GIS JS文件加载*/
    if(!singleFile)
    {
        /*系统JS文件，提供JS常用功能*/
        var systemjsfiles = GetTszsJsFiles();

 		var thirdjsfiles = GetThridJsFiles();
 		
 		 //加载业务JS文件
        var businessjsfiles = GetBusinessJsFiles();
        
//      /*封装通用GIS对象文件*/
//      var tszsgisjsfiles = GetTszsGISJsFiles();
//
//      /*ArcGIS GIS对接文件*/
//      var gisjsfiles = null;
//      if(gistype == "ArcGIS")
//      		gisjsfiles = GetArcGISJsFiles();
//      else if(gistype == "Openlayer")
//     	 	gisjsfiles = GetOpenLayerJsFiles();
//
        var jsfiles = systemjsfiles;
//      for(var i = 0;i<tszsgisjsfiles.length;i++)
//      		jsfiles.push(tszsgisjsfiles[i]); 
        		
        for(var i = 0;i<thirdjsfiles.length;i++)
        	jsfiles.push(thirdjsfiles[i]);
        	
        for(var i = 0;i<businessjsfiles.length;i++)
        	jsfiles.push(businessjsfiles[i]);
//
//      if(gisjsfiles!= null)
//      {
//      	for(var i = 0;i<gisjsfiles.length;i++)
//      		jsfiles.push(gisjsfiles[i]);
//      }
        
        //添加所有min 框架 脚本文件进行加载
        AddScriptsToDocument(jsfiles,location);
    }
	
	/**
	 * 获取脚本文件具体网页位置
	 */
	function GetScriptLocation(scriptName)
	{
	    var scriptLocation = "";
	    var scripts = document.getElementsByTagName('script');
	    for (var i = 0; i < scripts.length; i++)
	    {
	        var src = scripts[i].getAttribute('src');
	        if (src)
	        {
	            var index = src.lastIndexOf(scriptName);
	            var pathLength = src.lastIndexOf('?');
	            if (pathLength < 0)
	            {
	                pathLength = src.length;
	            }
	            if ((index > -1) && (index + scriptName.length == pathLength))
	            {
	                scriptLocation = src.slice(0, pathLength - scriptName.length);
	                break;
	            }
	        }
	    }
	    return scriptLocation;
	}
	
	/**
	 * 动态添加脚本到文档中
	 */
	function AddScriptsToDocument(scripts,location)
	{
	    var allScriptTags = new Array(scripts.length);
	    for (var i = 0; i < scripts.length; i++)
	    	allScriptTags[i] = "<script src='" + location + scripts[i] +"'></script>";
	    document.write(allScriptTags.join(""));
	}
	
	/**
	 * 动态添加样式到文档中
	 */
	function AddStylesToDocument(styles,location)
	{
	    var allScriptTags = new Array(styles.length);
	    for (var i = 0; i < styles.length; i++)
	    	allScriptTags[i] = "<link rel= \"stylesheet\" href ='" + location + styles[i] +"'></script>";
	    document.write(allScriptTags.join(""));
	}
	
	/**
	 * 获取Tszs框架 CSS样式单集合
	 */
	function GetTszsCssFiles()
	{
		var mincssfiles = new Array();
		return mincssfiles;
	}
	
	/**
	 * 获取Tszs框架 中第三方CSS样式单集合
	 */
	function GetThirdCssFiles()
	{
		var thirdcssfiles = new Array(
				"thirdplugin/iscroll/iscroll.css",
				
				"thirdplugin/jquery/jquery.mobile-1.4.5.min.css"
				);
		return thirdcssfiles;
	}
	
	/**
	 * 获取Tszs框架中业务 CSS样式单集合
	 */
	function GetBusinessCssFiles()
	{
		var businessfiles = new Array();
		return businessfiles;
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
				"Tszs-lang-zh_CN.js",
			    "system/Base.js",
			    "system/String.js",
			    "system/DataTime.js",
			    "system/Double.js",
			    "system/Cache.js",
			    "system/Valid.js",
			    "system/draw/Color.js",
			    "system/collections/List.js",
			    "system/collections/Dictionary.js",
			    "system/form/Dialog.js",
			    "system/server/WebServices.js",
			    "web/Url.js"
			    );
		return minjsfiles;
	}
	
	/**
	 * 获取Tszs框架中js脚本集合
	 */
	function GetThridJsFiles()
	{
		var tszsjsfiles = new Array(
				"thirdplugin/jquery/jquery.min.js",
				"thirdplugin/cordova/cordova.js",
				"thirdplugin/iscroll/iscroll.js",
				"thirdplugin/soapclient/soapclient.js",
				"thirdplugin/md5/md5.js"
			    );
		return tszsjsfiles;
	}
	
	/**
	 * 获取Tszs框架中通用业务脚本集合
	 */
	function GetBusinessJsFiles()
	{
		var businessjsfiles = new Array(
				"business/weather/Weather.js"
			    );
		return businessjsfiles;
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
			    
			    "gis/plugin/IGISTool.js",
			    
			    "gis/geometry/IPoint.js",
			    "gis/geometry/IPolyline.js",
			    "gis/geometry/IPolygon.js",
			    
			    "gis/database/ISpatialQueryFilter.js",
			    "gis/database/SpatialQueryFilterClass.js",
			    
			    "gis/symbol/IElement.js",
			    "gis/symbol/ElementMouseEventArgs.js",
			    
			    "gis/symbol/ISymbol.js",
			    
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
			    "gis/arcgis/carto/MapClass.js",
			    "gis/arcgis/carto/GroupLayerBase.js",
			    "gis/arcgis/carto/DynamicMapServiceLayerClass.js",
			    "gis/arcgis/carto/FeatureLayerClass.js",
			    "gis/arcgis/carto/TiledMapServiceLayerClass.js",
			    "gis/arcgis/carto/GraphisLayerClass.js",
			    
			    "gis/arcgis/geometry/GeometryBase.js",
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

			    "gis/arcgis/plugin/GISPluginManager.js",
			    "gis/arcgis/plugin/DrawPointToolClass.js",
			    "gis/arcgis/plugin/DrawPolylineToolClass.js",
			    "gis/arcgis/plugin/DrawPolygonToolClass.js",
			    
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

/**
 * 命名空间函数
 */
function NameSpace()
{
    var arg = arguments, obj = null, i, j, arr, ns;
	// 保存当前的nameSpace
	for (i = 0; i < arg.length; i++)
	{
		// 以"."分割字符串
		arr = arg[i].split(".");
		// 取出第一节点对象
		ns = arr[0];
		// 判断是否存在ns字符串对应的对象，若不存在则进行初始化成原始对象{}
		if(window[ns] === undefined)
		{
			window[ns] = {};
		}
		obj = window[ns];
		// 循环判读对象已存在，如果未存在，则初始化成原始对象{}
		for (j = 1; j < arr.length; j++)
		{
			if(obj[arr[j]] === undefined)
			{
				obj[arr[j]] = {};
			}
			obj = obj[arr[j]];
		}
	}
	return obj;
}