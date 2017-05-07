<script type="text/javascript">
	var mappan = document.getElementById("&{id}");
	if(mappan != null)
	{
		mappan.onclick = function mappan()
		{ 
			var tempmap = window.map&{mapcontrolid};
			if(tempmap == null)
				return;
			tempmap.Pan();
		} 
	}
</script>