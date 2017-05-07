<template>
	<div class="rightnav">
		<searchbar></searchbar>
		<readsortlist v-bind:readlist="readlist" class="readsortlist"></readsortlist>
		<recommendlist v-bind:recommendlist="recommendlist" class="recommendlist"></recommendlist>
		<newlist v-bind:newlist="newlist" class="newlist"></newlist>
	</div>
</template>

<script>
import searchbar from '../common/searchbar'
import readsortlist from '../common/readsortlist'
import recommendlist from '../common/recommendlist'
import newlist from '../common/newlist'
export default {	
  components: {
    searchbar, readsortlist, recommendlist, newlist
  },
  data:function () {
    return {
    	readlist:{url:'/story/storyreadlist.do',jumpurl:'storydetail'},
    	recommendlist:{url:'/story/storyrecommendlist.do',jumpurl:'storydetail'},
    	newlist:{url:'/story/storynewlist.do',jumpurl:'storydetail'},
    }
  }
}
</script>

<style scoped>
.rightnav div
{
	margin-top: 40px;
	background-color: white;
}
.rightnav div:first-child
{
	margin-top: 0px;
}
</style>