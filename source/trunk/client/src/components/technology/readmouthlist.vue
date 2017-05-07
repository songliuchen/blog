<template>
	<div class="readmouthlist">
		<div class="title">
			<span class="titlename">文章归档</span>
			<span class="readsortgroup">
			</span>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item, index) in data">
					<span class="sorttitle"><router-link :to="{path:'technology',query: {publish:item.publish}}">{{item.publish}}({{item.count}})</router-link></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import tszs from '../../assets/js/common.js'
export default {
  data: function () {
    return {
      data: []
    }
  },
  beforeCreate: function () {
    var _self = this;
    $.ajax({
      type: 'POST',
      url: tszs.GetApiRootPath()+'/technology/technologymounthlist.do',
      data: { },
      timeout : 5000,
      success: function (datainfo) {
        if (datainfo === null || datainfo === ''){
          return;
        }
        if(!tszs.IsJsonObject(datainfo))
        	datainfo = JSON.parse(datainfo)
        if (datainfo['code'] === '0') {
          console.log('服务调用失败！');
          return;
        }
        if (datainfo.data.length === 0) {
          console.log('没有更多数据了！');
          return;
        }
        _self.data = datainfo.data;
      },
      error: function () {
        console.log('获取数据失败！');
      }
    })
  },
  methods: {
		jumptechnologyList(publish)
		{
			if(tszs.Contain(location.href,'technology.html'))
				this.$root.eventHub.$emit('publish',publish);
			else
				location.href="technology.html?publish="+publish;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.readmouthlist .title
{
	background-color: white;
	border-left: solid 8px cornflowerblue;
	height:50px;
	line-height: 50px;
}

.readmouthlist .titlename
{
	margin-left: 20px;
	display: inline-block;
	height: 50px;
	line-height: 50px;
	float: left;
}

.readmouthlist .readsortgroup
{
	margin-right: 10px;
	float: right;
	height: 50px;
	line-height: 50px;
}
  .readmouthlist  .content
  {
  	margin-top: 1px;
  	padding-left: 5px;
  	border-top:solid 1px gainsboro;
  	padding-bottom: 3px;
  	height:280px;
  }
  .readmouthlist ul
  {
  	background-color: white;
  }
  .readmouthlist li
  {
  	float: left;
  	width:45%;
  	margin-left: 13px;
  	margin-bottom: 8px;
  }
  .readmouthlist a
  {
  	color:mediumseagreen;
  	font-weight: 590;
  }
a:hover
{
	color:#20a0ff;
}
</style>