<template>
	<div class="leftnav">
		<div class="content">
			<el-menu default-active="1">
				<el-menu-item :index="item.id" v-for="item in data">
					<router-link v-if="item.href" :to="item.href"><i :class="item.logo"></i>{{item.caption}}</router-link>
					<a v-else-if="item.visible" @click="exitSystem()"><i :class="item.logo"></i>{{item.caption}}</a>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
import tszs from '../../assets/js/common.js'
import VueRouter from 'vue-router';
	export default {
		data: function() {
			return {
				data: [{
						id:'1',
						logo:'el-icon-message',
						href:'/technologyclass',
						type: 'technologyclass',
						caption: '技术分类管理'
					}, {
						id:'2',
						logo:'el-icon-menu',
						href:'/technologymanage',
						type: 'technologymanage',
						caption: '技术日志管理'
					}, {
						id:'3',
						logo:'el-icon-setting',
						href:'/technologyedit',
						type: 'technologypublish',
						caption: '技术日志发表'
					}, {
						id:'4',
						logo:'el-icon-setting',
						href:'/democlass',
						type: 'technologycommon',
						caption: '小试牛刀分类管理'
					}, {
						id:'5',
						logo:'el-icon-menu',
						href:'/demomanage',
						type: 'technologylink',
						caption: '小试牛刀日志管理'
					}, {
						id:'6',
						logo:'el-icon-message',
						href:'/demoedit',
						type: 'setting',
						caption: '小时牛刀日志编辑'
					}, {
						id:'7',
						logo:'el-icon-setting',
						href:'/storyclass',
						type: 'technologycommon',
						caption: '故事分类管理'
					}, {
						id:'8',
						logo:'el-icon-menu',
						href:'/storymanage',
						type: 'technologylink',
						caption: '故事日志管理'
					}, {
						id:'9',
						logo:'el-icon-message',
						href:'/storyedit',
						type: 'setting',
						caption: '故事日志编辑'
					},{
						id:'10',
						logo:'el-icon-message',
						visible:false,
						type: 'exit',
						caption: '退出登陆'
					}
				]
			}
		},
		methods: {
		exitSystem() {
			tszs.delCookie("token");
			var router = new VueRouter(); 
			router.go({path: '/login'});
		}
		},
		mounted: function() {
			if(!tszs.IsNullOrEmpty(tszs.getCookie("token")))
			{
				this.data[this.data.length-1].visible=true;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.leftnav .content {
		background-color: white;
	}
	
	.leftnav .is-active {
		border-bottom: none;
		background-color: #d3dce6;
		color: rgb(32, 160, 255);
	}
	
	.leftnav a {
		color: #475669;
		display: block;
		height: 100%;
		width: 100%;
	}
	
	.leftnav a:hover {
		color: #20a0ff;
	}
</style>