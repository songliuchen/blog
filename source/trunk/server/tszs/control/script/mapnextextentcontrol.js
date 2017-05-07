<script type="text/javascript">
	var nextextent = document.getElementById("&{id}");
	if(nextextent != null)
	{
		nextextent.onclick = function nextextent()
		{ 
			var tempmap = window.map&{mapcontrolid};
			if(tempmap == null)
				return;
			tempmap.ZoomToNextExtent();
		} 
	}
</script>