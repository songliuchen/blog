<script type="text/javascript">
	if (document.all)
		window.attachEvent('onload', init&{id}); 
	else 
		window.addEventListener('load', init&{id}, false); 
	
	function init&{id}()
	{
		var tempmap = window.map&{mapcontrolid};
		if(tempmap == null)
			return;
		tempmap.AddMouseMoveEvent(showcoordinates);
		
	}
	//显示地图坐标
	function showcoordinates(mouseevent)
	{
		var mp = mouseevent.GetMapPoint();
		var sp = mouseevent.GetScreenPoint();
		var coordinate = document.getElementById("&{id}");
		coordinate.innerHTML ="地图坐标" + mp.X + "," + mp.Y + "<br/>屏幕坐标:" + sp.X + "," + sp.Y;
	}
</script>
