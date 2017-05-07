<template>
	<div>
		<div class="detailcontainer">
			<technologydetail class="middle"></technologydetail>
			<rightnav class="right"></rightnav>
		</div>
	</div>
</template>

<script>
import technologydetail from './technologydetail'
import rightnav from './rightnav'

export default {
  components: {
    technologydetail, rightnav
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.detailcontainer .middle
{
	margin-left: 1%;
	margin-top: 50px;
	width:72%;
	margin-right: 1%;
	vertical-align: top;
	display: inline-block;
}

.detailcontainer .right
{
	width:21%;
	margin-top: 50px;
	vertical-align: top;
	display: inline-block;
	margin-right: 1%;
}

@media screen and (max-width: 800px)
{
	.detailcontainer .middle
	{
		margin-left: 1%;
		margin-right: 1%;
		width:98%;
	}
	.detailcontainer .right
	{
		display: none;
	}
}
</style>