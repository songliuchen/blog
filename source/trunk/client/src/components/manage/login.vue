<template>
	<div class="login">
		<span>
			<p>用户名：</p>
			<el-input v-model="data.username" >
		</span>
		<br />
		<span>
			<p>密码：</p>
			<el-input type="password" v-model="data.password"></el-input>
		</span>
		<br />
		<span>
			<el-button type="success" @click="login()">登陆</el-button>
		</span>
	</div>
</template>

<script>
	import tszs from '../../assets/js/common.js'
	import sha from 'sha256'
	import VueRouter from 'vue-router';
	var router = new VueRouter(); 
	export default {
		data: function() {
			return {
				data: {"username":"","password":""}
			}
		},
		methods: {
			login() {
				var _self = this;
				if(tszs.IsNullOrEmpty(this.data.username) || tszs.IsNullOrEmpty(this.data.password))
				{
					alert("用户名密码为空！");
					return;
				}
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/manage/login/login.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						'username': this.data.username,
						'password': sha(this.data.password)
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === 1) {
							document.cookie="token="+datainfo['token'];
							document.cookie="author="+datainfo['author'];
//							location.hash='/technologyclass';
							router.go({path:'/technologyclass'});
						} else {
							alert('登陆失败！');
						}
					},
					error: function() {
						console.log('获取数据失败！');
					}
				})
			}
		}
	}
</script>

<style scoped>
.login
{
	margin: 100px auto;
	height:200px;
	width:500px
}
.login span {
	width:200px;
	margin: 0 auto;
}
</style>