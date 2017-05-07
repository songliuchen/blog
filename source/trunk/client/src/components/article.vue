<template>
  <div class="article">
	  <topnav class="article-topnav"></topnav>
	  <div class="container">
			<router-view />
		</div>
	  <bottomnav class="bottom"></bottomnav>
  </div>
</template>

<script>
import topnav from './common/topnav'
import bottomnav from './common/bottomnav'
export default {
  components: {
    topnav,bottomnav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article
{
	background-color:rgb(239, 242, 247);
	position: absolute;
	top:0;
	right:0;
	left:0;
}

.article .container
{
	width:100%;
	height:85%;
}

.article .bottomnav
{
	position: relative;
	bottom:0;
	right:0;
	left:0;
}
</style>
