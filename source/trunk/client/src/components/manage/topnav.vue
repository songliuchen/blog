<template>
	<div class="topnav">
		<div>
			<span class="logo">
			<img class="logoimg" src="../../assets/img/Icon.png" />
			</span>
			<span class="logotitle">
				宋爷 de Life
			</span>
			<span class="title">
				后台管理系统
			</span>
		</div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topnav
{
	border-bottom: solid 1px black;
	background-color: white;
}
.topnav:first-child
{
	padding-left: 8%;
	padding-right: 8%;
}
.topnav .logo
{
	display: inline-block;
	height:90px;
	line-height: 90px;
}
	
.topnav .logoimg
{
	width: 65px;
	height: 65px;
	border:1px solid black;
	border-radius: 50px;
	vertical-align: middle;
	margin-right: 10px;
}
	
.topnav .logotitle
{
	font-size: larger;
}
.topnav .title
{
	display: inline-block;
	height:90px;
	font-size:larger;
	vertical-align: middle;
	line-height: 90px;
	margin-left: 15%;
}
</style>