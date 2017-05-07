<template>
	<div class="demodetail" v-loading="showloading" element-loading-text="拼命加载中">
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
			<div class="democontent content">
				{{data.content}}
			</div>
			<div class="prenex">
				<div>
					上一条记录:&nbsp;<router-link style="color:#0082E6" v-if="pre!='没有了'" :to="{path:'demodetail',query: {id:preid}}">{{pre}}</router-link><label v-else>{{pre}}</label>
				</div>
				<div>
					下一条记录:&nbsp;<router-link style="color:#0082E6" v-if="next!='没有了'" :to="{path:'demodetail',query: {id:nextid}}">{{next}}</router-link><label v-else>{{next}}</label>
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
    	next:'没有了',
    	nextid:'-1',
    	pre:'没有了',
    	preid:'-1',
      	data: {}
    }
  },
  watch: {
      // 如果路由有变化，会再次执行该方法
      "$route.query": "initdetail"
   },
  beforeCreate: function ()
  {
  	this.$options.methods.loaddemodetail(this,true);
  	this.$options.methods.loaddemodetailpreandnext(this);
  },
  methods: {
	initdetail()
	{
		this.$options.methods.loaddemodetail(this,true);
		this.$options.methods.loaddemodetailpreandnext(this);
	},
	loaddemodetail(self,showload)
	{
		if(tszs.IsNullOrEmpty(self))
			self = this;
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
	      url: tszs.GetApiRootPath()+'/demo/demodetail.do',
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
	        	datainfo = JSON.parse(datainfo);
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
	        $('.demodetail .democontent').html(self.data.content);
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
	loaddemodetailpreandnext(self)
	{
		if(tszs.IsNullOrEmpty(self))
			self = this;
		var id=tszs.getUrlParam('id');
		
		if(tszs.IsNullOrEmpty(id) || isNaN(id))
			return;
	    $.ajax({
	      type: 'POST',
	      url: '/demo/demodetailpreandnext.do',
	      
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demodetail
{
	min-height: 150px;
}
.demodetail .demolistitem
{
	background-color: white;
}

.demodetail .title
{
	margin-bottom: 10px;
	font-size:20px;
}

.demodetail .titleclass
{
	padding: 5px;
	padding-right: 20px;
	background-image: url(../../assets/img/titlebackground.png);
	background-size:100% 100%;
	color:white;
}
.demodetail .count
{
	color: darkgray;
	font-size: small;
	margin-top: 20px;
}

.demodetail .count span
{
	margin-right: 15px;	
}

.demodetail .content
{
	margin-top: 15px;
	margin-bottom: 5px;
	line-height: 30px;
	overflow: hidden;
	min-height: 400px;
}

.demodetail .prenex
{
	color:#999;
	line-height: 30px;
}
@media screen and (max-width: 400px)
{
	.demodetail .titleclass
	{
		display: none;
	}
}
</style>