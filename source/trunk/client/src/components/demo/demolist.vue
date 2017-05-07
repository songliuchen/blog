<template>
	<el-row class="demolist" v-loading="showloading" element-loading-text="拼命加载中">
	  <el-col  :span="cardsize" v-for="(o, index) in data">
	    <el-card class="domolist_cartitem">
	    	<router-link :to="{path:'/demodetail',query: {id:o.id}}">
		    	<div style="padding-bottom: 10px;">
			        <span class="classes">{{o.class}}</span>
			        <span class="time">{{ o.publish }}</span>
		      	</div>
		      	<img :src="o.logourl" class="image">
		      	<span class="caption">{{o.caption}}</span>
		      </div>
	     </router-link>
	    </el-card>
	  </el-col>
	  <el-card class="nodata" style="margin-bottom: 25px;" v-show="!hasdata">
		<span class="titlecontent">{{nodatatitle}}</span>
	  </el-card>
	</el-row>
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
				cardsize:8,
				pageindex: 1,
				pagesize: 10,
				totalcount: 10,
				showloading:true
			}
		},
		computed: {
			totalpagesize: function() {
				return parseInt(this.totalcount / this.pagesize);
			}
		},
		mounted () {
			const that = this
            this.$options.methods.updateCardInfo(that);
            window.onresize = () =>
            {
                return (() =>
                {
                    this.$options.methods.updateCardInfo(that);
                })()
            }
        },
		watch: {
	      // 如果路由有变化，会再次执行该方法
	      "$route.query": "initdemo"
	    },
		beforeCreate: function() {
			this.$options.methods.loaddemo(this,true);
			this.$options.methods.loadSize(this);
		},
		methods: {
			handleSizeChange(val) {
				this.pagesize = val;
				this.$options.methods.loaddemo(this,true);
			},
			handleCurrentChange(val) {
				this.pageindex = val;
				this.$options.methods.loaddemo(this,true);
			},
			updateCardInfo(that) {
				let width= document.documentElement.clientWidth;
				if(width<450)
                {
                	that.cardsize =24;
                }
                 else if(width<800)
                {
                	that.cardsize =12;
                }
                else if(width<1024)
                {
                	that.cardsize =8;
                }
                else
                {
                	that.cardsize =8;
                }
			},
			initdemo(){
				this.$options.methods.loaddemo(this,true);
				this.$options.methods.loadSize(this);
			},
			loaddemo(self,showload) {
				if(showload)
					self.showloading = showload;
				var captione = tszs.getUrlParam('captione');
				var publish = tszs.getUrlParam('publish');
				var labels = tszs.getUrlParam('labels');
				var keyword = tszs.getUrlParam('keyword');
				$.ajax({
					type: 'POST',
					url: tszs.GetApiRootPath()+'/demo/demo.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						'showgrabble': true,
						'captione': captione,
						'publish': publish,
						'labels': labels,
						'keyword': keyword,
						'pageindex': parseInt(self.pageindex) - 1,
						'pagesize': 9
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
							datainfo = JSON.parse(datainfo)
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
					url: tszs.GetApiRootPath()+'/demo/demosize.do',
					contentType: "application/json; charset=utf-8",
					dataType: "json",
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
		},
	}
</script>

<style scoped>
.demolist	
{
	min-height: 150px;
}

.domolist_cartitem
{
	background:white;
	height:364px;
	margin-left: 2%;
	margin-right: 2%;
	margin-bottom: 5%;
}

.domolist_cartitem:hover
{
	box-shadow: 0 0 10px gray;
}
	
.demo .caption
{
    font-size: 20px;
    color: #999;
    display:block;
}
  
  .demo .classes
  {
    font-size:15px;
    display: inline-block;
    padding: 5px;
	padding-right: 20px;
	background-image: url(../../assets/img/titlebackground.png);
	background-size: 100% 100%;
	color: white;
  }
  
  .demo img
  {
  	margin-bottom:10px;
  	width:100%;
  	height:250px;
  }
  
  .demo .time {
    float: right;
    font-size: 14px;
    height: 27px;
    line-height: 27px;
    color: black;
    font-weight:500;
    display: inline-block;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>