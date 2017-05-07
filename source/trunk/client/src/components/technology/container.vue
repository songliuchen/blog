<template>
	<div class="technology">
		<leftnav class="left"></leftnav>
		<technologylist class="middle"></technologylist>
		<rightnav class="right"></rightnav>
	</div>
</template>

<script>
import leftnav from './leftnav'
import technologylist from './technologylist'
import rightnav from './rightnav'
export default {
  components: {
    leftnav, technologylist, rightnav
  },
  data: function () {
    return {
      items: [
        {'name': '操作相关', 'sordindex': '1', 'logo': 'el-icon-menu'}
      ]
    }
  }
}
</script>

<style scoped>

@media screen and (min-width: 1024px)
{
	.technology .left
	{
		margin-left: 5%;
		margin-top: 50px;
		width:15%;
		margin-right: 1%;
		display: inline-block;
	}
	
	.technology .middle
	{
		margin-top: 50px;
		width:52%;
		margin-right: 1%;
		vertical-align: top;
		display: inline-block;
	}
	
	.technology .right
	{
		width:21%;
		margin-top: 50px;
		vertical-align: top;
		display: inline-block;
		margin-right: 2%;
	}
}

@media screen and (max-width: 1023px)
{
	.technology .left
	{
		margin-left: 1%;
		margin-top: 50px;
		width:15%;
		margin-right: 1%;
		display: inline-block;
	}
	
	.technology .middle
	{
		margin-top: 50px;
		width:80%;
		vertical-align: top;
		display: inline-block;
	}
	
	.technology .right
	{
		display: none;
	}
}

@media screen and (max-width: 800px)
{
	.technology .left,.right
	{
		display: none;
	}
	
	.technology .middle
	{
		margin-top: 10px;
		width:98%;
		margin-left: 1%;
		margin-right: 1%;
		vertical-align: top;
	}
}

</style>