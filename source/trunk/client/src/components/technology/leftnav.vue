<template>
	<div class="leftnav">
		<div class="content">
			<el-menu default-active="1">
				<el-menu-item :index="item.id" v-for="item in data"><router-link :to="{path:'technology',query: {captione:item.id}}"><i :class="item.logo"></i>{{item.caption}}({{item.numposte}})</router-link></el-menu-item>
			</el-menu>
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
      url: tszs.GetApiRootPath()+'/technology/technologyclass.do',
      data: { },
      timeout : 5000,
      success: function (datainfo) {
        if (datainfo === null || datainfo === '') {
          _self.hasdata = false;
          return;
        }
        datainfo = JSON.parse(datainfo)
        if (datainfo['code'] === '0') {
          console.log('服务调用失败！');
        }
        if (datainfo.data.length === 0) {
          console.log('没有更多数据了！');
          _self.hasdata = false;
        }
        var logos=new Array();
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        logos.push('el-icon-menu');
        logos.push('el-icon-message');
        logos.push('el-icon-setting');
        for(var i=0;i<datainfo.data.length;i++)
        {
        	datainfo.data[i].logo=logos[i];
        	datainfo.data[i].id=datainfo.data[i].id.toString();
        }
        _self.data = datainfo.data;
      },
      error: function () {
        console.log('获取数据失败！');
      }
    })
  },
  methods: {
		jumptechnologyList(index)
		{
			this.$root.eventHub.$emit('classid',index);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftnav .content
{
	background-color: white;
}

.leftnav .is-active
{
	border-bottom: none;
	background-color: #d3dce6;
	color: rgb(32, 160, 255);
}
.leftnav a
{
	color:#475669;
	display: block;
	height:100%;
	width:100%;
}

.leftnav a:hover
{
	color:#20a0ff;
}
</style>