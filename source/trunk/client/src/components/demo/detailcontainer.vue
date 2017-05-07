<template>
	<div class="demodetail">
		<div>
			<demodetail class="middle"></demodetail>
			<rightnav class="right"></rightnav>
		</div>
	</div>
</template>

<script>
import demodetail from './demodetail'
import rightnav from './rightnav'

export default {
  components: {
    demodetail, rightnav
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

.demodetail .middle
{
	margin-left: 1.5%;
	margin-top: 50px;
	width:74.5%;
	margin-right: 1%;
	vertical-align: top;
	display: inline-block;
}

.demodetail .right
{
	width:21%;
	margin-top: 50px;
	vertical-align: top;
	display: inline-block;
	margin-right: 1%;
}

@media screen and (max-width: 800px)
{
	.demodetail .middle
	{
		margin-left: 1%;
		margin-right: 1%;
		width:98%;
	}
	.demodetail .right
	{
		display: none;
	}
}
</style>