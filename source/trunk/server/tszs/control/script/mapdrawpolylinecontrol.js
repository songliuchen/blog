/**=======================================================
 *
 *        文件名称:  mapdrawpolylinecontrol.js
 *        创 建 人  :  宋 刘 陈
 *        联系方式:  756519755
 *        个人网址:  http://www.songliuchen.com
 *        创建时间:  2015年5月29日
 *        修 改 人  : 
 *        修改时间: 
 *
=======================================================*/

<script type="text/javascript">
	var drawpolyline = document.getElementById("&{id}");
	if(drawpolyline != null)
	{
		drawpolyline.onclick = function drawpolyline()
		{
			var tempmap = window.map&{mapcontrolid};
			var addpolyline= new Tszs.GIS.Plugin.DrawPolylineToolClass();
			addpolyline.AddFinishToolEvent(ShowResults);
			tempmap.SetTool(addpolyline);
		}
	}
	
	function ShowResults(geometry)
	{
		//创建元素对象
		var element = new Tszs.GIS.Symbol.PolygonElementClass();	
		//创建面符号外边线符号
		var symbol= new Tszs.GIS.Symbol.PolylineSymbolClass();		
		//设置外边线颜色
		tempcolor = new Tszs.System.Draw.Color();
		tempcolor.R =255;
		tempcolor.G = 0;
		tempcolor.B = 0;
		symbol.SetColor(tempcolor);
		symbol.SetSize(50);
		symbol.SetTransparency(0.5);	
		
		element.SetGeometry(geometry);
		element.SetSymbol(symbol);

		window.map&{mapcontrolid}.AddElement(element);
	}
</script>