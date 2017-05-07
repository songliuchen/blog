<template>
	<div class="technologylist" v-loading="showloading" element-loading-text="拼命加载中">
		<span class="technologylistitem">
			<el-card class="technologylistitem_card" v-show="hasdata" v-for="(item,index) in data">
				<router-link :to="{path:'/technologydetail',query: {id:item.id}}">
				<div v-show="false">{{item.id}}</div>
				<div class="title">
					<span class="titleclass">{{item.class}}</span>
					<span class="titlecontent">{{item.caption}}</span>
				</div>
				<div class="count">
					<span class="floorindex">{{index+1}}</span>
					<span class="createtime">{{item.publish}}</span>
					<span class="readcount">阅读({{item.numview}})</span>
					<!--<span class="pingjiacount">评价({{item.numcomm}})</span>-->
					<span class="shoucangcount">标签【{{item.labels ===''?'无':item.labels}}】</span>
				</div>
				<div class="content">
					{{item.grabble}}
				</div>
				</router-link>
			</el-card>

			<el-card class="nodata" style="margin-bottom: 25px;" v-show="!hasdata">
				<span class="titlecontent">{{nodatatitle}}</span>
			</el-card>
			<div v-show="hasdata">
				<el-card style="margin-bottom: 25px;">
					<el-pagination style="margin: 0 auto;text-align: center;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[5, 10, 15, 20]" :current-page="pageindex" :page-size="pagesize" :layout="pageinfo" :total="totalcount">
					</el-pagination>
				</el-card>
			</div>
		</span>
	</div>
</template>

<script>
	import tszs from '../../assets/js/common.js'
	export default {
		data: function() {
			return {
				hasdata: true,
				nodatatitle: '没有更多数据了！',
				data: [],
				classid:'',
				pageindex: 1,
				pagesize: 5,
				totalcount: 5,
				pageinfo: '',
				showloading:true
			}
		},
		computed: {
			totalpagesize: function() {
				return parseInt(this.totalcount / this.pagesize);
			}
		},
		watch: {
	      // 如果路由有变化，会再次执行该方法
	      "$route.query": "inittechnology"
	    },
		beforeCreate: function() {
			this.$options.methods.loadtechnology(this,true);
			this.$options.methods.loadSize(this);
		},
		mounted () {
			const that = this
            this.$options.methods.updatePageInfo(that);
            window.onresize = () =>
            {
                return (() =>
                {
                    this.$options.methods.updatePageInfo(that);
                })()
            }
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
			updatePageInfo(that) {
				let width= document.documentElement.clientWidth;
				if(width<400)
                {
                	that.pageinfo ='prev,next, jumper';
                }
                else if(width<500)
                {
                	that.pageinfo ='total,prev,next, jumper';
                }
                else if(width<1500)
                {
                	that.pageinfo ='total, sizes,prev,next, jumper';
                }
                else
                {
                	that.pageinfo ='total, sizes,prev,pager,next, jumper';
                }
			},
			inittechnology()
			{
				this.$options.methods.loadtechnology(this,true);
				this.$options.methods.loadSize(this);
			},
			loadtechnology(self,showload) {
				if(showload)
					self.showloading = showload;
				var captione = tszs.getUrlParam('captione');
				var publish = tszs.getUrlParam('publish');
				var labels = tszs.getUrlParam('labels');
				var keyword = tszs.getUrlParam('keyword');
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/technology/technology.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						'showgrabble': true,
						'captione': captione,
						'publish': publish,
						'labels': labels,
						'keyword': keyword,
						'pageindex': tszs.IsNullOrEmpty(self.pageindex)?0:parseInt(self.pageindex) - 1,
						'pagesize': self.pagesize
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '')
						{
							self.hasdata = false;
							self.showloading = false;
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
							datainfo = JSON.parse(datainfo);
						if(datainfo['code'] === '0')
						{
							console.log('服务调用失败！');
							self.showloading = false;
							return;
						}
						if(datainfo.data.length === 0)
						{
							console.log('没有更多数据了！');
							self.hasdata = false;
							self.showloading = false;
							return;
						}
						self.hasdata = true;
						self.data = datainfo.data;
						self.showloading = false;
					},
					error: function()
					{
						console.log('获取数据失败！');
						self.hasdata = false;
						self.showloading = false;
					}
				})
			},
			loadSize(self) {
				var captione = tszs.getUrlParam('captione');
				var publish = tszs.getUrlParam('publish');
				var labels = tszs.getUrlParam('labels');
				var keyword = tszs.getUrlParam('keyword');
				$.ajax({
					type: 'POST',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					url: tszs.GetApiRootPath()+'/technology/technologysize.do',
					data: JSON.stringify({
						'showgrabble': true,
						'captione': captione,
						'publish': publish,
						'labels': labels,
						'keyword': keyword,
					}),
					timeout: 5000,
					success: function(datainfo) {
						if(datainfo === null || datainfo === '') {
							return;
						}
						if(!tszs.IsJsonObject(datainfo))
							datainfo = JSON.parse(datainfo)
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
			}
		}

	}
</script>

<style scoped>
	.technologylist .technologylistitem {
		background-color: white;
	}
	.technologylistitem_card:hover
	{
		box-shadow: 0 0 10px gray;
	}
	.technologylist .title {
		margin-bottom: 10px;
		font-size: 20px;
	}
	
	.technologylist .titleclass {
		padding: 5px;
		padding-right: 20px;
		background-image: url(../../assets/img/titlebackground.png);
		background-size: 100% 100%;
		color: white;
	}
	
	.technologylist .nodata {
		height: 500px;
	}
	
	.technologylist a {
		color: black;
	}
	
	.technologylist .count {
		color: darkgray;
		font-size: small;
	}
	
	.technologylist .count span {
		margin-right: 15px;
	}
	
	.technologylist .content {
		margin-top: 15px;
		margin-bottom: 5px;
		line-height: 30px;
		overflow: hidden;
	}
	
	.technologylist .floorindex
	{
		background-color:gainsboro;
		width:25px;
		display: inline-block;
		color: black;
		text-align: center;
	}
	
	@media screen and (min-width: 800px)
	{
		.technologylistitem_card
		{
			margin-bottom: 25px;
		}
	}
	
	
	@media screen and (max-width: 799px)
	{
		.technologylistitem_card
		{
			margin-bottom: 2px;
		}
		
		.technologylist .titleclass
		{
			display: none;
		}
	}
	
	@media screen and (max-width: 460px)
	{
		.el-pagination__total
		{
			display: none;
		}
	}
</style>