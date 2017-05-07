<script type="text/javascript">
	var fullextent = document.getElementById("&{id}");
	if(fullextent != null)
	{
		fullextent.onclick = function fullextent()
		{ 
			var tempmap = window.map&{mapcontrolid};
			if(tempmap == null)
				return;
			tempmap.ZoomToFullExtent();
		} 
	}
</script>