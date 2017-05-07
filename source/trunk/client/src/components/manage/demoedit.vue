<template>
	<div class="technologyedit">
		<label>标题:</label>
		<span>
				<el-select v-model="data.selectid" @change="selectClass" placeholder="请选择" >
				    <el-option
				      v-for="item in data.classes"
				      :label="item.caption"
				      :value="item.id">
				    </el-option>
			  	</el-select>
		 	</span>
		<span><el-input  v-model="data.caption" style="width:500px"></span>
		<br />
		<span>
		 		<label>属性:</label>
		 		<input type="checkbox" style="height:20px;width:20px;vertical-align: middle;" v-model="data.pinned" /> 
		 		<label style="vertical-align: middle;">置顶文章</label>
		 		<input type="checkbox" style="height:20px;width:20px;line-height:20px;vertical-align: middle;" v-model="data.recomm" />
		 		<label style="vertical-align: middle;">推荐文章</label>
		 		<input type="checkbox" style="height:20px;width:20px;line-height:20px;vertical-align: middle;"  v-model="data.closed" /> 
		 		<label style="vertical-align: middle;">禁止评论</label>
		 		<input type="checkbox" style="height:20px;width:20px;line-height:20px;vertical-align: middle;" v-model="data.secret" />
		 		<label style="vertical-align: middle;">私密文章</label>
	 		</span>
		<br />
		<div>
			<textarea id="content_kindeditor" name="content"></textarea>
		</div>
		<br />
		<span>
			<label>封面:</label>
				<el-upload
				  class="avatar-uploader"
				  action="/manage/file/uploadjson.do"
				  :show-file-list="false"
				  :on-success="handleAvatarScucess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="data.logourl" :src="data.logourl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</span>
		<br />
		<span>
		 		<label>概要:</label>
		 		<el-input type="textarea" :rows="4" placeholder="请输入内容" style="width:500px" v-model="data.grabble"></el-input>
	 		</span>
		<br />
		<span>
		 		<label>标签:</label>
		 		<el-input  v-model="data.labels" style="width:500px"></el-input>
		 		<label>请用,分隔多个标签</label>
	 		</span>
		<br />
		<span>
		 		<label>日期:</label>
		 		<el-input  v-model="data.publish" style="width:500px"></el-input>
		 		<el-button @click="queryServerTime()" type="text">服务器最新时间</el-button>
	 		</span>
		<br />
		<span>
		 		<label>链接:</label>
		 		<el-input  v-model="data.locale" style="width:500px"></el-input>
		 		<label>5到32个字符的字母,数字,下划线(_),连字符(-)，第一字符应为字母，发表后不能修改</label>
	 		</span>
		<br />
		<span>
		 		<label>密码:</label>
		 		<el-input  v-model="data.acccode" style="width:500px"></el-input>
		 		<label>设置访问密码后只有知道密码才能查看此日志</label>
	 		</span>
		<br />
		<span>
				<label>通告:</label>
				<el-input type="textarea" :rows="2" placeholder="请输入内容" style="width:500px" v-model="data.introduction"></el-input>
				<label>每行一个引用通告</label>
	 		</span>
		<br />
		<span>
				<el-button @click="saveEdit()" type="success" size="large">发送</el-button>
	 		</span>
	</div>
</template>

<script>
	import tszs from '../../assets/js/common.js'
	import VueRouter from 'vue-router';
	export default {
		data: function() {
			return {
				data: {
					classes: [{ caption: '', id: '' }],
					selectclass: "",
					id: 0,
					locale: "",
					author: tszs.getCookie('author'),
					selectid: "",
					labels: "",
					pinned: 0,
					secret: 0,
					closed: 0,
					recomm: 0,
					caption: "",
					content: "",
					grabble: "",
					introduction: "",
					publish: "",
					acccode: "",
					logourl: ''
				}
			}
		},
		mounted: function() {
			window.editor = KindEditor.create('#content_kindeditor', {
				fileManagerJson: '/manage/file/filemanage.do',
				uploadJson: '/manage/file/uploadjson.do',
			});
		},
		methods: {
			selectClass(id) {
				this.data.selectid = id;
			},
			saveEdit() {
				var _self = this;
				var dataparams = {};
				dataparams['token'] = tszs.getCookie("token");
				dataparams['linkhref'] = this.data.locale;
				dataparams['author'] = tszs.getCookie("author");
				dataparams['classid'] = this.data.selectid;
				dataparams['labels'] = this.data.labels;
				dataparams['pinned'] = this.data.pinned ? 1 : 0;
				dataparams['secret'] = this.data.secret ? 1 : 0;
				dataparams['closed'] = this.data.closed ? 1 : 0;
				dataparams['recomm'] = this.data.recomm ? 1 : 0;
				dataparams['caption'] = this.data.caption;
				KindEditor.sync('#content_kindeditor');
				dataparams['content'] = document.getElementById('content_kindeditor').value;
				dataparams['grabble'] = this.data.grabble;
				dataparams['explain'] = this.data.introduction;
				dataparams['publish'] = this.data.publish;
				dataparams['acccode'] = this.data.acccode;
				dataparams['logourl'] = this.data.logourl;
				var id = this.$route.query.id;
				if(tszs.IsNullOrEmpty(id)) {
					$.ajax({
						type: 'POST',
						url: tszs.GetApiRootPath()+'/manage/demo/adddemo.do',
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						data: JSON.stringify(dataparams),
						timeout: 5000,
						success: function(datainfo) {
							if(datainfo === null || datainfo === '') {
								return;
							}
							if(!tszs.IsJsonObject(datainfo))
	        					datainfo = JSON.parse(datainfo);
							if(datainfo['code'] === 1) {
								alert("文章添加成功！");
								var router = new VueRouter();
								router.go({ name: '' });
								return;
							} else {
								alert("文章保存失败！");
							}
						},
						error: function() {
							console.log('获取数据失败！');
						}
					});
				} else {
					dataparams['id'] = id;
					$.ajax({
						type: 'POST',
						url: tszs.GetApiRootPath()+'/manage/demo/updatedemodetail.do',
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						data: JSON.stringify(dataparams),
						timeout: 5000,
						success: function(datainfo) {
							if(datainfo === null || datainfo === '') {
								return;
							}
							if(!tszs.IsJsonObject(datainfo))
	        					datainfo = JSON.parse(datainfo);
							if(datainfo['code'] === 1) {
								alert("文章修改成功！");
								router.go({ name: '' });
								return;
							} else {
								alert("文章保存失败！");
							}
						},
						error: function(err) {
							console.log('获取数据失败！');
						}
					});
				}
			},
			queryServerTime() {
				var _self = this;
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/manage/base/queryservertime.do',
					data: JSON.stringify({'token': tszs.getCookie('token')}),
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === 1) {
							_self.data.publish = tszs.DateFormat(new Date(datainfo.data),'yyyy-MM-dd hh:mm:ss');
						}
					},
					error: function(err) {
						console.log('获取数据失败！');
					}
				});
			},
			handleAvatarScucess(res, file)
			{
				if(res.code==1)
					this.data.logourl = res.url;
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;
				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		},
		beforeCreate: function() {
			var _self = this;
			$.ajax({
				type: 'POST',
				url: tszs.GetApiRootPath()+'/manage/demo/democlass.do',
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify({ 'token': tszs.getCookie("token") }),
				timeout: 5000,
				success: function(datainfo) {
					if(datainfo === null || datainfo === '') {
						return;
					}
					if(!tszs.IsJsonObject(datainfo))
	        			datainfo = JSON.parse(datainfo);
					if(datainfo['code'] === 0) {
						console.log('服务调用失败！');
						return;
					}
					if(datainfo.data.length === 0) {
						console.log('没有更多数据了！');
						return;
					}
					_self.data.classes = datainfo.data;
				},
				error: function() {
					console.log('获取数据失败！');
				}
			});

			var id = this.$route.query.id;
			if(tszs.IsNullOrEmpty(id))
				return;

			$.ajax({
				type: 'POST',
				url: tszs.GetApiRootPath()+'/manage/demo/querydemodetail.do',
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify({ 'id': id, 'token': tszs.getCookie('token') }),
				timeout: 5000,
				success: function(datainfo) {
					if(datainfo === null || datainfo === '') {
						return;
					}
					if(!tszs.IsJsonObject(datainfo))
	        			datainfo = JSON.parse(datainfo);
					if(datainfo['code'] === 0) {
						console.log('服务调用失败！');
						return;
					}
					if(datainfo.data.length === 0) {
						console.log('没有更多数据了！');
						return;
					}
					$.each(datainfo.data[0], function(i, val) {
						_self.data[i.toLowerCase()] = val;
					});
					_self.data.publish = tszs.DateFormat(new Date(_self.data.publish),'yyyy-MM-dd hh:mm:ss');
					_self.data.selectid = datainfo.data[0].Parent;
					KindEditor.html('#content_kindeditor', _self.data.content);
				},
				error: function() {
					console.log('获取数据失败！');
				}
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.technologyedit textarea {
		width: 90%;
		height: 500px;
	}
	
	.technologyedit {
		margin: 10px;
	}
	
	.technologyedit label {
		display: inline-block;
		vertical-align: top;
		line-height: 40px;
	}
	
	.technologyedit span {
		display: inline-block;
		ine-height: 40px;
		vertical-align: top;
	}
	
	.technologyedit .el-input {
		display: inline-block;
	}
	
	.technologyedit .el-textarea {
		display: inline-block;
	}
	
	.technologyedit .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		margin: 10px;
		cursor: pointer;
		display: inline-block;
		position: relative;
		overflow: hidden;
		width:178px;
	}
	
	.technologyedit .el-upload:hover {
		border-color: #20a0ff;
	}
	
	.technologyedit .avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.technologyedit .avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>