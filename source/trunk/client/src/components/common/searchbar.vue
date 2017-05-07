<template>
	<div class="searchbar">
		<el-input size="large" placeholder="请输入内容" v-model="keyword">
	    <el-button slot="append" @click="jumpList()" icon="search"></el-button>
	 </el-input>
	</div>
</template>

<script>
import VueRouter from 'vue-router';
export default {
  data: function () {
    return {
      keyword: ''
    }
  },
  methods: {
	jumpList()
	{
		var router= window.location.hash;
		router = router.substr(2);
		if(router.indexOf("?")!=-1)
			router = router.substr(0,router.indexOf("?"));
		this.$router.push({path:router,query:{keyword:escape(this.keyword)}})

//		this.$root.eventHub.$emit('keyword',escape(this.keyword));
	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>