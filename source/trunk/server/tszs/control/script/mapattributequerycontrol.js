<script type="text/javascript">
	/**
	 * 属性查询方法
	 * @returns
	 */
	function attributequery()
	{
		var layer2 = dynamicMapServiceLayer.GetLayerByIndex(1);
		var filter =new Tszs.GIS.DataBase.SpatialQueryFilterClass();
		var queryName = document.getElementById("&{id}_name").value;
		filter.WhereString = " name like '%" + queryName + "%'";
		filter.ReturnGeometry = true;
		filter.OutFields = ["name","AREA","FID","adcode"];
		layer2.QueryDataWidthCustomResult(filter,showResults);
	}
	
	/**
	 * 显示查询结果
	 * @param features
	 * @returns
	 */
	function showResults(features)
	{
		var map = window.map&{mapcontrolid};

		if(Tszs.System.String.IsNullOrEmpty(features))
			return;
		if(features.length == 0)
			return;
		//获取地图对象
		map.ClearElements();
		
		if(features[0].GetGeometry().GeometryType ==Tszs.GIS.Utils.GeometryType.Polygon)
		{
			if(Tszs.System.String.IsNullOrEmpty(features))
				return;
			
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
		}
		else if(features[0].GetGeometry().GeometryType ==Tszs.GIS.Utils.GeometryType.Point)
		{
			//创建元素对象
			var element = null;
			//创建元素符号对象
			var symbol = new Tszs.GIS.Symbol.PointSymbolClass();
			
			var tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 0;
			tempcolor.B = 255;
			symbol.SetColor(tempcolor);
			symbol.SetSize(50);
			
			//创建面符号外边线符号
			var outlinesymbol= new Tszs.GIS.Symbol.PolylineSymbolClass();		
			//设置外边线颜色
			tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 0;
			tempcolor.B = 255;
			outlinesymbol.SetColor(tempcolor);
			outlinesymbol.SetSize(50);
			outlinesymbol.SetTransparency(0.5);	
			symbol.SetOutLineSymbol(outlinesymbol);
		}
		else if(features[0].GetGeometry().GeometryType ==Tszs.GIS.Utils.GeometryType.Polyline)
		{
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
		}
		
		for(var i = 0;i<features.length;i++)
		{
			element = new Tszs.GIS.Symbol.PointElementClass();	
			element.SetGeometry(features[i].GetGeometry());
			element.SetSymbol(symbol);
			element.SetAttributes(features[i].GetAttributes());
			
			map.AddElement(element);
			if(i == 0)
				resultgeometry = features[i].GetGeometry();
			else
				resultgeometry = resultgeometry.Union(features[i].GetGeometry());
		}
		
		//添加鼠标进入、移出绘画元素范围事件
		map.AddElementMouseMoveEnterEvent(showTip);
		map.AddElementMouseMoveOutEvent(hideTip);
	}
	
	/**
	 * 显示鼠标进入元素，显示元素详细西信息
	 * @param args 鼠标事件参数信息
	 * @returns
	 */
	function showTip(args)
	{
		var map = window.map&{mapcontrolid};
		if(map == null)
			return;
		if(args.GetElement().Geometry.GeometryType == Tszs.GIS.Utils.GeometryType.Polygon)
		{
			//修改鼠标进入元素样式
			var symbol = new Tszs.GIS.Symbol.PolygonSymbolClass();
			var outlinesymbol= new Tszs.GIS.Symbol.PolylineSymbolClass();
			var tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 0;
			tempcolor.B = 255;
			outlinesymbol.SetColor(tempcolor);
			outlinesymbol.SetSize(2);
			
			tempcolor.R = 125;
			tempcolor.G = 125;
			tempcolor.B = 125;
			symbol.SetColor(tempcolor);
			symbol.SetOutLineSymbol(outlinesymbol);
		}
		else if(args.GetElement().Geometry.GeometryType == Tszs.GIS.Utils.GeometryType.Point)
		{
			//创建元素对象
			var element = null;
			//创建元素符号对象
			var symbol = new Tszs.GIS.Symbol.PointSymbolClass();
			
			var tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 0;
			tempcolor.B = 255;
			symbol.SetColor(new Tszs.System.Draw.Color);
			symbol.SetSize(50);
			
			//创建面符号外边线符号
			var outlinesymbol= new Tszs.GIS.Symbol.PolylineSymbolClass();		
			//设置外边线颜色
			tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 255;
			tempcolor.B = 255;
			outlinesymbol.SetColor(tempcolor);
			outlinesymbol.SetSize(50);
			outlinesymbol.SetTransparency(0.5);	
			symbol.SetOutLineSymbol(outlinesymbol);
		}
		else if(args.GetElement().Geometry.GeometryType == Tszs.GIS.Utils.GeometryType.Polyline)
		{
			//创建面符号外边线符号
			var symbol= new Tszs.GIS.Symbol.PolylineSymbolClass();		
			//设置外边线颜色
			tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 0;
			tempcolor.B = 255;
			symbol.SetColor(tempcolor);
			symbol.SetSize(50);
			symbol.SetTransparency(0.5);	
		}
		args.GetElement().SetSymbol(symbol);
		var tempdictionary = args.GetElement().GetAttributes();
		//面板显示鼠标所在元素属性信息
		var content = "<b>OID: </b>"+ tempdictionary.Get("FID")+
		"<br/>" + "<b>名称: </b>"+tempdictionary.Get("name")+"<br/>" + 
		"<b>编码: </b>"+tempdictionary.Get("adcode")+"<br/>" + "<b>面积: </b>"+tempdictionary.Get("AREA");
		map.ShowIdentify(tempdictionary.Get("name"),content,args.GetScreenPoint());
	}

	/**
	 * 显示鼠标移出元素，显示元素详细西信息
	 * @param args 鼠标事件参数信息
	 * @returns
	 */
	function hideTip(args)
	{
		var map = window.map&{mapcontrolid};
		if(map == null)
			return;
		var symbol = null;
		if(args.GetElement().Geometry.GeometryType == Tszs.GIS.Utils.GeometryType.Polygon)
		{
			symbol = new Tszs.GIS.Symbol.PolygonSymbolClass();
			var outlinesymbol= new Tszs.GIS.Symbol.PolylineSymbolClass();
			var tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =255;
			tempcolor.G = 0;
			tempcolor.B = 0;
			outlinesymbol.SetColor(tempcolor);
			outlinesymbol.SetSize(2);
			
			tempcolor.R = 0;
			tempcolor.G = 0;
			tempcolor.B = 0;
			symbol.SetColor(tempcolor);
			symbol.SetOutLineSymbol(outlinesymbol);
		}
		else if(args.GetElement().Geometry.GeometryType == Tszs.GIS.Utils.GeometryType.Point)
		{
			//创建元素对象
			var element = null;
			//创建元素符号对象
			symbol = new Tszs.GIS.Symbol.PointSymbolClass();
			
			var tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 0;
			tempcolor.B = 255;
			symbol.SetColor(new Tszs.System.Draw.Color);
			symbol.SetSize(50);
			
			//创建面符号外边线符号
			var outlinesymbol= new Tszs.GIS.Symbol.PolylineSymbolClass();		
			//设置外边线颜色
			tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 0;
			tempcolor.B = 255;
			outlinesymbol.SetColor(tempcolor);
			outlinesymbol.SetSize(50);
			outlinesymbol.SetTransparency(0.5);	
			symbol.SetOutLineSymbol(outlinesymbol);
		}
		else if(args.GetElement().Geometry.GeometryType == Tszs.GIS.Utils.GeometryType.Polyline)
		{
			//创建面符号外边线符号
			symbol= new Tszs.GIS.Symbol.PolylineSymbolClass();		
			//设置外边线颜色
			tempcolor = new Tszs.System.Draw.Color();
			tempcolor.R =0;
			tempcolor.G = 255;
			tempcolor.B = 255;
			symbol.SetColor(tempcolor);
			symbol.SetSize(50);
			symbol.SetTransparency(0.5);
		}
		map.HideIdentify();
		args.GetElement().SetSymbol(symbol);
	}

</script>