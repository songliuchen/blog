<template>
	<div class="readmarklist">
		<div class="title">
			<span class="titlename">标签云</span>
			<span class="readsortgroup">
			</span>
		</div>
		<div class="content">
			<ul>
				<li v-bind:style="{'background-color':'rgba('+ parseInt(Math.random() * 255, 10) +',' + parseInt(Math.random() * 255, 10) + ',' + parseInt(Math.random() * 255, 10) + ',0.9)'}" v-for="(item, index) in data">
					<span class="sorttitle"><router-link :to="{path:'technology',query: {labels:item.caption}}">{{item.caption}}({{item.numposte}})</router-link></span>
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
      url: tszs.GetApiRootPath()+'/technology/technologymarklist.do',
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
.readmarklist .title
{
	background-color: white;
	border-left: solid 8px cornflowerblue;
	height:50px;
	line-height: 50px;
}

.readmarklist .titlename
{
	margin-left: 20px;
	display: inline-block;
	height: 50px;
	line-height: 50px;
	float: left;
}

.readmarklist .readsortgroup
{
	margin-right: 10px;
	float: right;
	height: 50px;
	line-height: 50px;
}
  .readmarklist  .content
  {
  	margin-top: 1px;
  	padding-left: 5px;
  	border-top:solid 1px gainsboro;
  	margin-bottom: 3px;
  	height:250px;
  }
  .readmarklist ul
  {
  	background-color: white;
  	margin-left: 7px;
  }
  .readmarklist li
  {
  	float: left;
  	height:30px;
  	text-align: center;
  	line-height: 30px;
  	width:42%;
  	margin-left: 5px;
  	padding-right: 5px;
  	padding-left: 5px;
  	margin-bottom: 8px;
  }
  .readmarklist a
  {
  	color:white;
  	font-weight: 590;
  }
a:hover
{
	color:#20a0ff;
}
</style>