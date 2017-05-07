<template>
	<div class="about">
		<div class="left">
			<el-menu default-active="1">
				<el-menu-item :index="item.id" v-for="item in data"><a @click="jumpRouter(item.href)">{{item.caption}}</a></el-menu-item>
			</el-menu>
		</div>
		<div class="right">
			<el-card>
				<div id="aboutsong">
					<div class="title">
						关于宋爷
					</div>
					<hr style="FILTER: progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)" width="100%" color=#987cb9 SIZE=1>
					<div style="margin-top: 20px;">
						<div class="aboutsong-logo"><img style="width:100%;" src="../../assets/img/aboutlogo.png"></div>
						<div class="aboutsong-title">
							<span style="line-height: 36px;">&nbsp;&nbsp;宋刘陈，程序猿一枚，江湖人称宋爷。大学学的是GIS，不过各种编程语言都自学了点，大学毕业之后一直以写代码为生计。目前阶段，已婚已育，除了编程之外，爱好历史，文学。梦想可以在家办公，根据自己爱好写着自己喜欢的代码，看着自己喜欢的书籍和电视剧。不过梦想是美好的，现在还没实现，每天还得苦逼哈哈的挤着地铁去上班，写着有可能并不感兴趣的项目代码，月底的工资一分不剩的还了房贷。
希望下一个10年，在程序员这条道路上。。。。</span>
						</div>
					</div>
				</div>
				<div id="professional">
					<div class="title">
						Professional Skills
					</div>
					<hr style="FILTER: progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)" width="100%" color=#987cb9 SIZE=1>
					<div style="margin-top: 20px;">
						<div style="display:inline-block;vertical-align: top;width:20%;padding-right: 3%;"><img src="../../assets/img/timeline-psd.png"></div>
						<div style="margin-bottom: 20px;margin-top: 5px;">
							<p>&nbsp;&nbsp;</p>
						</div>
					</div>
				</div>
				<div id="aboutsite">
					<div class="title">
						关于网站
					</div>
					<hr style="filter: progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)" width="100%" color=#987cb9 size=1>
					<div class="siteinfo" style="margin-top: 20px;">
						<div><div class="sitename">宋爷 de Life</div></div>
						<div>
							&nbsp;&nbsp;网站采用前后台分离方式实现，前端通过Vue2+Element UI进行数据操作及界面展示，通过Nodejs搭建后台服务，采用Ajax以Post的方式实现前后台JSON数据交互
							<br />
							&nbsp;&nbsp;网站开发纯粹系个人兴趣爱好所致，界面及内容多有借鉴网络优秀个人网站及博客文章，如有问题，请联系本人修改或删除
							<br />
							&nbsp;&nbsp;前端通过SPA及传统多页面结合方式完成，例如文章列表检索、查看分类文章等采用SPA，页面内部加载；文章详情跳转等不同类型页面切换采用传统超链接实现
						</div>
					</div>
				</div>
				<div id="contact">
					<div class="title">
						contact
					</div>
					<hr style="FILTER: progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)" width="100%" color=#987cb9 SIZE=1>
					<div style="margin-top: 20px;text-align: center;">
						<img style="width:45%; max-width:150px;margin-right: 2%;" src="../../assets/img/u94.png">
						<img style="width:45%;max-width:150px;" src="../../assets/img/u94.png">
					</div>
				</div>
		   </el-card>
		</div>
		
	</div>
</template>

<script>
import tszs from '../../assets/js/common.js'
export default {
  data: function () {
    return {
      	data: [
      	{id:'1',caption:'关于宋爷',href:'aboutsong'},
      	{id:'2',caption:'professional skills',href:'professional'},
      	{id:'3',caption:'关于网站',href:'aboutsite'},
      	{id:'4',caption:'contact',href:'contact'}]
    }
  },
  beforeCreate: function ()
  {
  },
  methods: {
	jumpRouter(id)
	{
		document.getElementById(id).scrollIntoView();
	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about .left
{
	margin-left: 2%;
	margin-top: 50px;
	width:18%;
	min-width: 168px;
	margin-right: 1%;
	display: inline-block;
	background-color: white;
}

.about .left a
{
	display: block;
	color:#475669;
	display: block;
	height:100%;
	width:100%;

}

.about .left .is-active
{
	border-bottom: none;
	background-color: #d3dce6;
	color: rgb(32, 160, 255);
}
.aboutsong-logo
{
	display:inline-block;
	vertical-align: top;
	width:20%;
	padding-right: 3%;
}
.aboutsong-title
{
	display:inline-block;
	vertical-align: top;
	width:75%;
}

.about .right
{
	margin-top: 50px;
	width:77%;
	color: #5e6d82;
	vertical-align: top;
	display: inline-block;
}
.siteinfo > div:first-child
{
	display:inline-block;
	vertical-align: top;
	padding-right: 3%;
	width:20%;
}
.siteinfo > div:last-child
{
	display:inline-block;
	vertical-align: top;
	width:75%
}
#professional
{
	padding-top: 20px;
}
.about .sitename
{
	display:inline-block;
	vertical-align: middle;
	width:100%;
	background-color: #d3dce6;
	line-height: 36px;
	font-weight: bold;
	border-radius: 4px;
	margin-right: 3%;
	min-height: 36px;
	text-align: center;
}

.about .title
{
	margin-bottom: 20px;
	margin-top: 5px;
	font-size: x-large
}

@media screen and (max-width: 900px)
{
	.about .left
	{
		display: none;
	}
	.about .right
	{
		width:98%;
		margin-left: 1%;
		margin-right: 1%;
	}
}

@media screen and (max-width: 486px)
{
	.aboutsong-logo
	{
		display: none;
	}
	#aboutsong
	{
		margin-left: 0;
	}
	
	#aboutwebsite
	{
		margin-left: 0;
	}
	.aboutsong-title
	{
		width:98%;
		margin-left: 1%;
		margin-right: 1%;
	}
	.siteinfo > div:first-child
	{
		display: none;
	}
	
	.siteinfo > div:last-child
	{
		width:98%;
	}
}
</style>