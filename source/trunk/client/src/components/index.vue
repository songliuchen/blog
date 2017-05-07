<template>
  <div class="index">
	  <center class="index-center"></center>
  </div>
</template>

<script>
import center from './index/center'

export default {
  components: {
    center
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index
{
	background: linear-gradient(to right, #6d9eeb 0%, #e2a1f6 100%); 
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	min-height: 500px;
}

.index-center
{
	position:fixed;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
	-ms-transform:translate(-50%,-50%); 	/* IE 9 */
	-moz-transform:translate(-50%,-50%); 	/* Firefox */
	-webkit-transform:translate(-50%,-50%); /* Safari 和 Chrome */
	-o-transform:translate(-50%,-50%); 
  width: 34%;
  background-color: #f5f5f5;
  border-radius: 10px;
	border: 1.5px solid gray;
}

@media screen and (max-width: 800px)
{
	.index-center
	{
		width:60%;
	}
}
@media screen and (max-width: 600px)
{
	.index-center
	{
		width:80%;
		min-width: 265px;
  	min-height: 500px;
	}
}
</style>
