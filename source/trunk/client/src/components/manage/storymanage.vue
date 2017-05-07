<template>
	<div class="bottomnav" v-loading="showloading" element-loading-text="拼命加载中">
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="id" label="操作" width="150">
				<template scope="scope">
					<router-link :to="{path:'/storyedit',query: { id:scope.row.id }}"><el-button type="text" size="small">编辑</el-button></router-link>&nbsp;|&nbsp;
					<el-button type="text" size="small" @click="deletetechnology(scope.$index)">删除</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="id" label="编号" width="100">
			</el-table-column>
			<el-table-column prop="class" label="分类" width="150">
			</el-table-column>
			<el-table-column prop="caption" label="标题">
			</el-table-column>
			<el-table-column prop="author" label="作者" width="150">
			</el-table-column>
			<el-table-column prop="publish" label="发布日期" width="150">
			</el-table-column>
		</el-table>
		<div>
			<el-card style="margin-bottom: 25px;">
				<el-pagination size="large" style="margin: 0 auto;text-align: center;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[5, 10, 15, 20]" :current-page="pageindex" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="totalcount">
				</el-pagination>
			</el-card>
		</div>
	</div>
</template>

<script>
	import tszs from '../../assets/js/common.js'
	export default {
		data: function() {
			return {
				tableData: [],
				pageindex: 1,
				pagesize: 10,
				totalcount: 10,
				showloading:false
			}
		},
		computed: {
			totalpagesize: function() {
				return parseInt(this.totalcount / this.pagesize);
			}
		},
		beforeCreate: function() {
			let that = this;
			this.$options.methods.loadtechnology(this,false);
			this.$options.methods.loadSize(this);
		},
		methods: {
			handleSizeChange(val) {
				this.pagesize = val;
				this.$options.methods.loadtechnology(this,true);
			},
			handleCurrentChange(val) {
				this.pageindex = val;
				this.$options.methods.loadtechnology(this,true);
			},
			loadtechnology(self,showload)
			{
				if(showload)
					self.showloading=showload;
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/manage/story/querystorylist.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						token:tszs.getCookie("token"),
						'pageindex': parseInt(self.pageindex) - 1,
						'pagesize': self.pagesize
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '')
						{
							self.showloading=false;
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === '0')
						{
							self.showloading=false;
							return;
						}
						if(datainfo.data.length === 0)
						{
							self.showloading=false;
							return;
						}
						self.tableData = datainfo.data;
						self.showloading=false;
					},
					error: function()
					{
						console.log('获取数据失败！');
						self.showloading=false;
					}
				})
			},
			loadSize(self) {
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/story/storysize.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: { },
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
	        				datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === '0') {
							console.log('服务调用失败！');
							return;
						}
						if(datainfo.data.length === 0) {
							console.log('没有更多数据了！');
							return;
						}
						self.totalcount = datainfo.data[0].totalcount;
					},
					error: function() {
						console.log('获取数据失败！');
					}
				})
			},
			deletetechnology(index)
			{
				if(window.confirm('你确定要取消交易吗？'))
				{
					var id = this.tableData[index].id;
					var _index = index;
					var _self=this;
					$.ajax({
						type: 'POST',
						url: tszs.GetApiRootPath()+'/manage/story/deletestory.do',
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						data: JSON.stringify({token:tszs.getCookie("token"),'id':id}),
						timeout: 5000,
						success: function(datainfo) {
							if(datainfo === null || datainfo === '') {
								return;
							}
							if(!tszs.IsJsonObject(datainfo))
	        					datainfo = JSON.parse(datainfo);
							if(datainfo['code'] === '0') {
								console.log('服务调用失败！');
								return;
							}
							if(datainfo.data.length === 0) {
								console.log('没有更多数据了！');
								return;
							}
							_self.tableData.splice(_index, 1);
						},
						error: function() {
							console.log('获取数据失败！');
						}
					});
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bottomnav .singleinfo {
		padding-left: 50px;
		padding-top: 15px;
		padding-bottom: 15px;
		font-size: small;
		line-height: 30px;
		color: white;
		background-color: black;
		overflow: hidden;
	}
	
	.bottomnav .singleinfo div {
		vertical-align: top;
		display: inline-block;
	}
	
	.bottomnav .websiteinfo {
		height: 40px;
		line-height: 40px;
		font-size: small;
		color: gainsboro;
		background-color: dimgray;
		text-align: center;
	}
	
	.bottomnav .singleinfo .outsitelink {
		margin-left: 50px;
		width: 40%;
	}
	
	.bottomnav .singleinfo .outsitelink a {
		color: white;
	}
	
	.bottomnav .singleinfo .outsitelink li {
		float: left;
		margin-right: 20px;
	}
	
	.bottomnav .singleinfo .qrcode {
		float: right;
		margin-right: 100px;
	}
	
	.bottomnav .singleinfo .qrcode img {
		width: 100px;
		height: 100px;
	}
</style>