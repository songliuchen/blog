/**=======================================================
 *
 *        文件名称:  mapdrawpointcontrol.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月29日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

<script type="text/javascript">
	var drawpoint = document.getElementById("&{id}");
	if(drawpoint != null)
	{
		drawpoint.onclick = function mappan()
		{
			var tempmap = window.map&{mapcontrolid};
			var addpoint= new Tszs.GIS.Plugin.DrawPointToolClass();
			addpoint.AddFinishToolEvent(ShowResults);
			tempmap.SetTool(addpoint);
		}
	}
	
	function ShowResults(geometry)
	{
		//创建元素对象
		var element =  new Tszs.GIS.Symbol.PointElementClass();
		//创建元素符号对象
		var symbol = new Tszs.GIS.Symbol.PointSymbolClass();
		
		var tempcolor = new Tszs.System.Draw.Color();
		tempcolor.R =0;
		tempcolor.G = 0;
		tempcolor.B = 255;
		symbol.SetColor(tempcolor);
		symbol.SetSize(10);
		
		//创建面符号外边线符号
		var outlinesymbol= new Tszs.GIS.Symbol.PolylineSymbolClass();		
		//设置外边线颜色
		tempcolor = new Tszs.System.Draw.Color();
		tempcolor.R =0;
		tempcolor.G = 255;
		tempcolor.B = 0;
		outlinesymbol.SetColor(tempcolor);
		outlinesymbol.SetSize(10);
		outlinesymbol.SetTransparency(0.5);	
		symbol.SetOutLineSymbol(outlinesymbol);
		
		element.SetGeometry(geometry);
		element.SetSymbol(symbol);

		window.map&{mapcontrolid}.AddElement(element);

	}
</script>