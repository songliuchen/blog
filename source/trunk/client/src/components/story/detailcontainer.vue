<template>
	<div class="detailcontainer">
		<div>
			<storydetail class="middle"></storydetail>
			<rightnav class="right"></rightnav>
		</div>
	</div>
</template>

<script>
import storydetail from './storydetail'
import rightnav from './rightnav'

export default {
  components: {
    storydetail, rightnav
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
	margin-left: 1.5%;
	margin-top: 50px;
	width:74.5%;
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