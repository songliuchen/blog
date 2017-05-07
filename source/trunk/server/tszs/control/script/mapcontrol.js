<script type="text/javascript">
window.map&{id} = new Tszs.GIS.Carto.MapClass("&{id}",{nav:&{navigationbar},slider:&{slider},logo:false});
	if (document.all)
	{
		window.attachEvent('onload', function()
		{
			initmap(window.map&{id},"&{serverpath}");
		});
	}
	else
	{
		window.addEventListener('load', function()
		{
			initmap(window.map&{id},"&{serverpath}");
		}, false); 
	}
	
	/**
	 * 地图控件相关操作，根据地图地址添加地图
	 * @param map 地图对象
	 * @param url 服务地址
	 * @returns
	 */
	function initmap(map,url)
	{
		//判断参数是否为空
		if(Tszs.System.String.IsNullOrEmpty(map))
			return;
		
		if(Tszs.System.String.IsNullOrEmpty(url))
			return;
		
		var urls = Tszs.System.String.Split(url,';');
		for(var i = 0;i<urls.length;i++)
		{
			map.AddLayer(urls[i]);
		}
	}
</script>
