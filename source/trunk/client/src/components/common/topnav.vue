<template>
	<div class="common-topnav">
		<div>
			<span class="common-topnav-logo">
				<span>
					<img class="logoimg" src="../../assets/img/Icon.png" />
				</span>
				<span class="common-topnav-logotitle">
					宋爷 de Life
				</span>
			</span>
			<span class="common-topnav-menu">
				<el-menu :default-active="defaultselect" mode="horizontal" >
					<el-menu-item :index="item.sordindex" v-for="item in items"><router-link class="topnav-menu-link" :to="item.href">{{item.name}}</router-link></el-menu-item>
				</el-menu>
			</span>
		</div>
	</div>
</template>

<script>
import tszs from '../../assets/js/common.js'
export default {
  data: function () {
    return {
      items: [
        {'name': '技术', 'sordindex': '1','href':'/technology','routername':'technology'},
        {'name': '小试牛刀', 'sordindex': '2', 'href':'/demo','routername':'demo'},
        {'name': '爷和姐的故事', 'sordindex': '3' ,'href':'/story','routername':'story'},
        {'name': '关于', 'sordindex': '4', 'href':'about','routername':'about'}
      ]
    }
  },
  computed: {
    defaultselect: function ()
    {
      if(tszs.Contain(location.href,'technology') || tszs.Contain(location.href,'technologydetail'))
      	return "1";
      else if(tszs.Contain(location.href,'demo') || tszs.Contain(location.href,'demodetail'))
      	return "2";
      else if(tszs.Contain(location.href,'story') || tszs.Contain(location.href,'storydetail'))
      	return "3";
      else if(tszs.Contain(location.href,'about'))
      	return "4";
      else
      	return "1";
    }
  },
  methods: {
	jumptechnologyList(index)
	{
		if(index.toString() ==='1')
		{
			if(tszs.Contain(location.href,'technology'))
				this.$root.eventHub.$emit('type','0');
			else
				location.href="/technology";
		}
		else if(index.toString() ==='2')
		{
			if(tszs.Contain(location.href,'demo'))
				this.$root.eventHub.$emit('type','0');
			else
				location.href="/demo";
		}
		else if(index.toString() ==='3')
		{
			if(tszs.Contain(location.href,'story'))
				this.$root.eventHub.$emit('type','0');
			else
				location.href="/story";
		}
		else if(index.toString() ==='4')
		{
			if(!tszs.Contain(location.href,'about'))
				location.href="/about";
		}
	}
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.common-topnav
{
	border-bottom: solid 1px black;
	background: white;
	height: 90px;
	line-height: 90px;
}
.common-topnav a
{
	color: #475669;
}
.common-topnav-logo img
{
	width: 65px;
	height: 65px;
	border:1px solid black;
	border-radius: 50px;
	vertical-align: middle;
	margin-right: 10px;
}

.topnav-menu-link
{
	display: block;
	font-size:21px;
	color:#475669;
	overflow: hidden;
}
.common-topnav-logotitle
{
	font-size: larger;
}
	
@media screen and (min-width: 931px)
{
	.common-topnav-logo
	{
		display: inline-block;
		padding-left: 5%;
		height: 90px;
		line-height: 90px;
	}
	.common-topnav-menu
	{
		position:absolute;
		left:0;
		margin-left: 50%;
		transform: translate(-50%,0%);
		-ms-transform:translate(-50%,0%); 	/* IE 9 */
		-moz-transform:translate(-50%,0%); 	/* Firefox */
		-webkit-transform:translate(-50%,0%); /* Safari 和 Chrome */
		-o-transform:translate(-50%,0%); 
		height:90px;
		vertical-align: middle;
		line-height: 90px;
	}
}
@media screen and (max-width: 930px)
{
	.common-topnav
	{
		height: 180px;
	}
	.common-topnav-logo
	{
		text-align: center;
		width:100%;
		vertical-align: top;
		display: block;
	}
	.common-topnav-menu
	{
		text-align: center;
	    margin: 0 auto;
	    display: block;
	}
	
	.el-menu--horizontal .el-menu-item
	{
		display: inline-block;
		float: none;
	}
}

@media screen and (max-width: 473px)
{
	.el-menu-item, .el-submenu__title 
	{
		padding: 0 5px;
	}
}

@media screen and (max-width: 352px)
{
	.topnav-menu-link
	{
		font-size:14.5px;
	}
}
</style>