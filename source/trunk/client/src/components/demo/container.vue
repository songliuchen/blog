<template>
	<div class="demo">
		<demolist class="left"></demolist>
		<rightnav class="right"></rightnav>
	</div>
</template>

<script>
import demolist from './demolist'
import rightnav from './rightnav'

export default {
  components: {
    demolist,rightnav
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
.demo .left
{
	margin-left: 2%;
	margin-top: 50px;
	width:75%;
	vertical-align: top;
	display: inline-block;
}

.demo .right
{
	width:22%;
	margin-top: 50px;
	vertical-align: top;
	display: inline-block;
}
@media screen and (max-width: 1024px)
{
	.demo .right
	{
		display: none;
	}
	.demo .left
	{
		width:100%;
		margin-left: 0;
	}
}
</style>