<script type="text/javascript">
	var backextent = document.getElementById("&{id}");
	if(backextent != null)
	{
			backextent.onclick = function backextent()
			{ 
				var tempmap = window.map&{mapcontrolid};
				if(tempmap == null)
					return;
				tempmap.ZoomToBackExtent();
			} 
	}
</script>