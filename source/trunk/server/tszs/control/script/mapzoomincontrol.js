<script type="text/javascript">
	var zoomin = document.getElementById("&{id}");
	if(zoomin != null)
	{
		zoomin.onclick = function zoomin()
		{ 
			var tempmap = window.map&{mapcontrolid};
			if(tempmap == null)
				return;
			tempmap.ZoomIn();
		} 
	}
</script>