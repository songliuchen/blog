<script type="text/javascript">
	var zoomout = document.getElementById("&{id}");
	if(zoomout != null)
	{
		zoomout.onclick = function zoomout()
		{ 
			var tempmap = window.map&{mapcontrolid};
			if(tempmap == null)
				return;
			tempmap.ZoomOut();
		} 
	}
</script>