<template>
  <div class='index-center-listitem'>
    <a v-if='!data.titlepic' target='_blank' :href='data.titlehref'>
  		{{data.titlename}}
		</a>
		<div class="index-center-listitem-pic" v-else>
			<div>{{data.titlename}}</div>
			<div v-for="(picture, index) in data.pictures">
				<a target="_blank" :alt="data.tips[index]" :title="data.tips[index]" :href="data.hrefs[index]">
					<img :src="picture">
				</a>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  props: ['data']
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.index-center-listitem
{
	height:40px;
	line-height: 40px;
	vertical-align: middle;
	margin-left: 10%;
	margin-right: 10%;
	margin-top: 5%;
	margin-bottom: 5%;
	background-color:darkgray;
	border-radius: 5px;
	color:white;
	font-weight:600;
	padding-left: 15px;
}

.index-center-listitem:hover
{
	background:#c3bfbf;
	cursor:pointer;
}
.index-center-listitem:hover a
{
	color:black;
	text-decoration:underline;
	font-weight: normal;
}

.index-center-listitem a
{
	color:white;
	font-weight:600;
}
.index-center-listitem div
{
	margin-right: 15px;
	display: inline-block;
}
.index-center-listitem-pic div:first-child
{
	float: left;
	height: 40px;
	line-height: 40px;
}
.index-center-listitem div img
{
	width:28px;
	height:28px;
	margin-top: 5px;
}
</style>
