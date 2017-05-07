<template>
	<div class="bottomnav">
		<div class="singleinfo">
			<div>
				联系我
				<br>
				邮箱：{{data.email}}
				<br>
				QQ：{{data.qq}}
			</div>
			<div class="outsitelink">
				友情链接
				<br>
				<ul>
					<li v-for="item in data.linklist"><a target="_blank" :href="item.addresse">{{ item.caption }}</a></li>
				</ul>
			</div>
			<div class="qrcode">
				<img src="../../assets/img/u94.png">
			</div>
		</div>
		<div class="websiteinfo">
			宋刘陈纯手工打造  | {{ data.mibeiane }}
		</div>
	</div>
</template>

<script>
import tszs from '../../assets/js/common.js'
export default {
  data: function () {
    return {
      data: {
      	qq:'',
     	email:'',
     	mibeiane:'',
      	linklist:[]
      	}
    }
  },
  beforeCreate: function () {
    var _self = this;
    //获取友情链接
    $.ajax({
      type: 'POST',
      url: tszs.GetApiRootPath()+'/base/linklist.do',
      data:{ },
      timeout : 5000,
      success: function (datainfo) {
        if (datainfo === null || datainfo === ''){
          return;
        }
        if(!tszs.IsJsonObject(datainfo))
        	datainfo = JSON.parse(datainfo);
        if (datainfo['code'] === '0') {
          console.log('服务调用失败！');
          return;
        }
        if (datainfo.data.length === 0) {
          console.log('没有更多数据了！');
          return;
        }
        _self.data.linklist = datainfo.data;
      },
      error: function () {
        console.log('获取数据失败！');
      }
    });
    
    //获取个人信息
    $.ajax({
      type: 'POST',
      url: tszs.GetApiRootPath()+'/base/authorinfo.do',
      data:{ },
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
         _self.data.email=datainfo.data[0].contact.split(";")[0];
        _self.data.qq=datainfo.data[0].contact.split(";")[1];
        _self.data.mibeiane = datainfo.data[0].mibeiane;
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
.bottomnav .singleinfo
{
	padding-left: 50px;
	padding-top: 15px;
	padding-bottom: 15px;
	font-size: small;
	line-height: 30px;
	color:white;
	background-color: black;
	overflow: hidden;
}
.bottomnav .singleinfo div
{
	vertical-align: top;
	display: inline-block;
}
.bottomnav .websiteinfo
{
	height: 40px;
	line-height: 40px;
	font-size: small;
	color: gainsboro;
	background-color:dimgray;
	text-align: center;
}
.bottomnav .singleinfo .outsitelink
{
	margin-left: 50px;
	width:40%;
}
.bottomnav .singleinfo .outsitelink a
{
	color: white;
}

.bottomnav .singleinfo .outsitelink li
{
	float: left;
	margin-right: 20px;
}

.bottomnav .singleinfo .qrcode
{
	float: right;
	margin-right: 100px;
}

.bottomnav .singleinfo .qrcode img
{
	width:100px;
	height:100px;
}
</style>