<script type="text/javascript">
	var centeratbutton = document.getElementById("&{id}_location");
	if(centeratbutton != null)
	{
		centeratbutton.onclick = function centeratmap()
		{
			var tempmap = window.map&{mapcontrolid};
			if(tempmap == null)
				return;
			var x = document.getElementById("&{id}_x").value;
			var y = document.getElementById("&{id}_y").value;
			tempmap.CenterAt(x,y,"10000");
		}
	}
</script>
