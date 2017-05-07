<template>
	<div class="technologydetail" v-loading="showloading" element-loading-text="拼命加载中">
		<el-card v-show="hasdata" style="margin-bottom: 25px;">
			<div class="title">
				<span class="titleclass">{{data.class}}</span>
		      	<span class="titlecontent">{{data.caption}}</span>
			</div>
		    <div class="count">
				<span class="createtime">时间:{{data.publish}}</span>
		      	<span class="readcount">阅读({{data.numview}})</span>
		      	<span class="shoucangcount">标签【{{data.labels ===''?'无':data.labels}}】</span>
			</div>
			<div class="technologycontent content">
				{{data.content}}
			</div>
			<div class="prenex">
				<div>
					上一条记录:&nbsp;<router-link style="color:#0082E6" v-if="pre!='没有了'" :to="{path:'technologydetail',query: {id:preid}}">{{pre}}</router-link><label v-else>{{pre}}</label>
				</div>
				<div>
					下一条记录:&nbsp;<router-link style="color:#0082E6" v-if="next!='没有了'" :to="{path:'technologydetail',query: {id:nextid}}">{{next}}</router-link><label v-else>{{next}}</label>
				</div>
			</div>
	   </el-card>
	    <el-card class="nodata" style="margin-bottom: 25px;" v-show="!hasdata">
			<span class="titlecontent">{{nodatatitle}}</span>
		</el-card>
	</div>
</template>

<script>
import tszs from '../../assets/js/common.js'
export default {
  data: function () {
    return {
    	showloading:true,
    	hasdata:false,
    	nodatatitle: '无效访问！',
      	data: {},
      	next:'没有了',
    	nextid:'-1',
    	pre:'没有了',
    	preid:'-1',
    }
  },
  watch: {
      // 如果路由有变化，会再次执行该方法
      "$route.query": "initdetail"
   },
  beforeCreate: function ()
  {
  	var that = this;
  	this.$options.methods.loadtechnologyDetail(this,true);
  	this.$options.methods.loadtechnologydetailpreandnext(this);
  },
  methods: {
  	initdetail()
	{
		this.$options.methods.loadtechnologyDetail(this,true);
		this.$options.methods.loadtechnologydetailpreandnext(this);
	},
	loadtechnologyDetail(self,showload)
	{
		if(showload)
			self.showloading = showload;
		var id=tszs.getUrlParam('id');
		if(tszs.IsNullOrEmpty(id) || isNaN(id))
		{
			self.hasdata = false;
			return;
		}
	    $.ajax({
	      type: 'POST',
	      url: tszs.GetApiRootPath()+'/technology/technologydetail.do',
	      contentType: "application/json; charset=utf-8",
		  dataType: "json",
	      data: JSON.stringify({ 'id':id }),
	      timeout : 5000,
	      success: function (datainfo)
	      {
	        if (datainfo === null || datainfo === '')
	        {
	        	self.showloading = false;
	        	self.hasdata=false;
	          	return;
	        }
	        if(!tszs.IsJsonObject(datainfo))
	        	datainfo = JSON.parse(datainfo)
	        if (datainfo['code'] === '0')
	        {
	          self.hasdata=false;
	          self.showloading = false;
	          return;
	        }
	        if (datainfo.data.length === 0)
	        {
	          self.hasdata=false;
	          self.showloading = false;
	          return;
	        }
	        self.hasdata = true;
	        self.data = datainfo.data[0];
	        $('.technologydetail .technologycontent').html(self.data.content);
	        self.showloading = false;
	        
	        $.fn.fancyzoom.defaultsOptions.imgDir='../../../static/lightwindow/';
			$('img').fancyzoom({overlay:0.3});
			$("img.Image,img.Picture").each(function()
			{
		        if (parseInt($(this).attr("width")) > 600)
		        {
		            var oIMA = new Image(); 
		            oIMA.src = $(this).attr("src");
		            var tWid = oIMA.width; 
		            oIMA = null;
		            $(this).css({ 'width': (tWid > 600) ? 600 : tWid, 'display': 'inline' });
		            $(this).css({ 'height': 'auto' });
		        }
		    });
	      },
	      error: function ()
	      {
	        self.hasdata=false;
	        self.showloading = false;
	      }
	    });
	},
	loadtechnologydetailpreandnext(self)
	{
		if(tszs.IsNullOrEmpty(self))
			self = this;
		var id=tszs.getUrlParam('id');
		
		if(tszs.IsNullOrEmpty(id) || isNaN(id))
			return;
	    $.ajax({
	      type: 'POST',
	      url: '/technology/technologydetailpreandnext.do',
	      
	      data: JSON.stringify({ 'id':id }),
	      contentType: "application/json; charset=utf-8",
		  dataType: "json",
	      timeout : 5000,
	      success: function (datainfo)
	      {
	        if (datainfo === null || datainfo === '')
	        	return;
	        if(!tszs.IsJsonObject(datainfo))
	        	datainfo = JSON.parse(datainfo);
	        if (datainfo['code'] === '0')
	        	return;
	        if (datainfo.data.length === 0)
	        	return;
	        if(datainfo.data.length ==2)
	        {
	        	self.pre = datainfo.data[0].caption;
	        	self.preid=datainfo.data[0].id;
	        	
	        	self.next=datainfo.data[1].caption;
	        	self.nextid=datainfo.data[1].id;
	        }
	        else if(datainfo.data.length ==1)
	        {
	        	if(Number(id)>Number(datainfo.data[0].id))
	        	{
	        		self.next=datainfo.data[0].caption;
	        		self.nextid=datainfo.data[0].id;
	        		
	        		self.pre='没有了';
	        		self.preid='-1';
	        	}
	        	else
	        	{
	        		self.pre=datainfo.data[0].caption;
	        		self.preid=datainfo.data[0].id;
	        		
	        		self.next='没有了';
	        		self.nextid='-1';
	        	}
	        }
	        else
	        {
	        	self.pre='没有了';
	        	self.preid='-1';
	        	
	        	self.next='没有了';
	        	self.nextid='-1';
	        }
	      },
	      error: function ()
	      {
	      }
	    });
	}
  }
}

</script>

<style scoped>
.technologydetail
{
	min-height: 150px;
}
.technologydetail .technologylistitem
{
	background-color: white;
}

.technologydetail .title
{
	margin-bottom: 10px;
	font-size:20px;
}

.technologydetail .titleclass
{
	padding: 5px;
	padding-right: 20px;
	background-image: url(../../assets/img/titlebackground.png);
	background-size:100% 100%;
	color:white;
}
.technologydetail a
{
	color:black;
}
.technologydetail .count
{
	color: darkgray;
	font-size: small;
	margin-top: 20px;
}

.technologydetail .count span
{
	margin-right: 15px;	
}

.technologydetail .content
{
	margin-top: 15px;
	margin-bottom: 5px;
	line-height: 30px;
	overflow: hidden;
	min-height: 400px;
}
.technologydetail .prenex
{
	color:#999;
	line-height: 30px;
}
@media screen and (max-width: 400px)
{
	.technologydetail .titleclass
	{
		display: none;
	}
}
</style>