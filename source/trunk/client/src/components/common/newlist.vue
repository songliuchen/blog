<template>
	<div class="newlist">
		<div class="title">
			<span class="titlename">最新文章</span>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item, index) in data">
					<span class="sortid">{{ index+1 }}</span>
					<span class="sorttitle"><router-link :to="{path:newlist.jumpurl,query: {id:item.id}}">{{item.caption}}</router-link></span>
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
  props: ['newlist'],
  created: function () {
    var _self = this;
    $.ajax({
      type: 'POST',
      url: tszs.GetApiRootPath()+this.newlist.url,
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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newlist .title {
	border-left: solid 8px cornflowerblue;
	height: 50px;
	line-height: 50px;
}

.newlist .titlename {
	margin-left: 20px;
	display: inline-block;
	height: 50px;
	line-height: 50px;
	float: left;
}

.newlist .readsortgroup {
	margin-right: 10px;
	float: right;
	height: 50px;
	line-height: 50px;
}

.newlist .el-radio-group {
	margin-top: 11px;
	margin-left: 20px;
}
.newlist .content
{
	height:314px;
	padding-right: 10px;
}

.newlist .content li
{
	height:30px;
}

.newlist .content li:nth-child(1) span:first-child{
	background-color: cornflowerblue;
}

.newlist .content li:nth-child(2) span:first-child{
	background-color: cornflowerblue;
}

.newlist .content li:nth-child(3) span:first-child{
	background-color: cornflowerblue;
}
.newlist .content a
{
	color:black;
}
.newlist .content a:hover
{
	color: #20a0ff;
}

.newlist .sortid {
	width: 20px;
	height: 20px;
	display: inline-block;
	text-align: center;
	line-height: 20px;
	background-color:lightsteelblue;
}
.newlist .content {
	background-color: white;
	margin-top: 1px;
	padding-left: 10px;
	font-size: small;
	border-top: solid 1px gainsboro;
}

</style>