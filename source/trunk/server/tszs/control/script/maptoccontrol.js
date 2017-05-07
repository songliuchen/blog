<script type="text/javascript">
	var dynamicMapServiceLayer=[];
	var visible = [];
	if (document.all)
		window.attachEvent('onload', init&{id}); 
	else 
		window.addEventListener('load', init&{id}, false); 
	
	function init&{id}()
	{
		var tempmap = window.map&{mapcontrolid};
		if(tempmap == null)
			return;
		tempmap.AddAfterLoadLayerEvent(loadLayerList);	
	}
	
	function loadLayerList(layer)
	{
		var html="";
		dynamicMapServiceLayer = layer;
		var layers = layer.GetLayers();
		if(layers == null || layers.length == 0)
			return;
		
		for(var i=0;i<layers.length;i++)
		{
			var visible = layers[i].GetLayerVisible();
			html=html+"<div><input name='layerList' class='listCss' type='checkbox' value='checkbox' onclick='setLayerVisibility()' "+(visible ? "checked":"")+" />"+layers[i].GetLayerName()+"</div>"
		}
		document.getElementById("&{id}").innerHTML=html;
	}
	
	function setLayerVisibility()
	{
		var inputs = document.getElementsByClassName("listCss");
		visible = [];
		for(var i=0;i<inputs.length;i++)
		{
			dynamicMapServiceLayer.GetLayerByIndex(i).SetLayerVisible(inputs[i].checked);
		}
	}
</script>
