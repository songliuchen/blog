<template>
	<div class="story">
		<storylist class="left"></storylist>
		<rightnav class="right"></rightnav>
	</div>
</template>

<script>
import storylist from './storylist'
import rightnav from './rightnav'

export default {
  components: {
    storylist,rightnav
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
.story
{
	background:ghostwhite;
	width:100%;
}
.story .left
{
	margin-left: 2%;
	margin-top: 50px;
	width:75%;
	vertical-align: top;
	display: inline-block;
}

.story .right
{
	width:22%;
	margin-top: 50px;
	vertical-align: top;
	display: inline-block;
}

@media screen and (max-width: 1024px)
{
	.story .right
	{
		display: none;
	}
	.story .left
	{
		width:100%;
		margin-left: 0;
	}
}
</style>