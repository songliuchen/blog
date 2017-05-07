/**=======================================================
 *
 *        文件名称:  mapdrawpolygoncontrol.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月29日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

<script type="text/javascript">
	var drawpolygon = document.getElementById("&{id}");
	if(drawpolygon != null)
	{
		drawpolygon.onclick = function drawpolygon()
		{
			var tempmap = window.map&{mapcontrolid};
			var addpolygon= new Tszs.GIS.Plugin.DrawPolygonToolClass();
			addpolygon.AddFinishToolEvent(ShowResults);
			tempmap.SetTool(addpolygon);
		}
	}
	
	function ShowResults(geometry)
	{
		//创建元素对象
		var element = new Tszs.GIS.Symbol.PolygonElementClass();	
		//创建元素符号对象
		var symbol = new Tszs.GIS.Symbol.PolygonSymbolClass();
		//创建面符号外边线符号
		var outlinesymbol= new Tszs.GIS.Symbol.PolylineSymbolClass();
		
		//设置外边线颜色
		var tempcolor = new Tszs.System.Draw.Color();
		tempcolor.R =0;
		tempcolor.G = 0;
		tempcolor.B = 255;
		outlinesymbol.SetColor(tempcolor);
		//设置外边线粗细
		outlinesymbol.SetSize(2);
		
		tempcolor.R = 0;
		tempcolor.G = 0;
		tempcolor.B = 0;
		symbol.SetColor(tempcolor);
		symbol.SetOutLineSymbol(outlinesymbol);
		
		element.SetGeometry(geometry);
		element.SetSymbol(symbol);

		window.map&{mapcontrolid}.AddElement(element);
	}
</script>