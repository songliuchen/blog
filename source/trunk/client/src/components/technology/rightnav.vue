<template>
	<div class="rightnav">
		<searchbar></searchbar>
		<readsortlist v-bind:readlist="readlist" class="readsortlist"></readsortlist>
		<recommendlist v-bind:recommendlist="recommendlist" class="recommendlist"></recommendlist>
		<newlist v-bind:newlist="newlist" class="newlist"></newlist>
		<readmouthlist class="readmouthlist"></readmouthlist>
		<readmarklist class="readmarklist"></readmarklist>
	</div>
</template>

<script>
import searchbar from '../common/searchbar'
import readsortlist from '../common/readsortlist'
import recommendlist from '../common/recommendlist'
import newlist from '../common/newlist'
import readmouthlist from './readmouthlist'
import readmarklist from './readmarklist'

export default {
  components: {
    searchbar, readsortlist, readmouthlist, readmarklist, recommendlist, newlist
  },
  data:function () {
    return {
    	readlist:{url:'/technology/technologyreadlist.do',jumpurl:'technologydetail'},
    	recommendlist:{url:'/technology/technologyrecommendlist.do',jumpurl:'technologydetail'},
    	newlist:{url:'/technology/technologynewlist.do',jumpurl:'technologydetail'},
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