<template>
  <div class="manage">
	  <topnav class="topnav"></topnav>
	  <leftnav class="leftnav"></leftnav>
	  <div class="rightcontainer">
			<router-view></route-view>
		</div>
	  <bottomnav class="bottom"></bottomnav>
  </div>
</template>

<script>
import topnav from './manage/topnav'
import leftnav from './manage/leftnav'
import bottomnav from './manage/bottomnav'
export default {
  components: {
    topnav, leftnav,bottomnav
  }
}
</script>

<style scoped>
.manage
{
	background-color:rgb(239, 242, 247);
	position: absolute;
	top:0;
	right:0;
	left:0;
}
.manage .leftnav
{
	width:15%;
	display: inline-block;
	background-color: white;
	background-size:cover;
	top:10%;
}

.manage .rightcontainer
{
	display: inline-block;
	width:84%;
	height:85%;
	background-color:white;
	vertical-align: top;
	background-size:cover;
	top:10%;
}

.manage .bottomnav
{
	position: relative;
	bottom:0;
	right:0;
	left:0;
}
</style>
