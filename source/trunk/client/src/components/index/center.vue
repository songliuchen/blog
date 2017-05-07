<template>
	<div>
		<div>
			<div class="index-center-logo">
    			<img class="logoimg" src="../../assets/img/Icon.png" />
  			</div>
			<div class="index-center-title">
			    <h2>宋爷 de Life</h2>
				<h3>学而不思则罔，思而不学则殆<h3>
			</div>
		</div>
		<div v-for="item in items">
			<listitem v-bind:data="item"></listitem>
		</div>
	</div>
</template>

<script>
import listitem from './listitem'

export default {
  components: {
    listitem
  },
  data: function () {
    return {
      items: [
        {'titlename': '» 技术总结', 'titlehref': 'article.html#/technology'},
        {'titlename': '» 小试牛刀', 'titlehref': 'article.html#/demo'},
        {'titlename': '» 爷和姐的故事', 'titlehref': 'article.html#/story'},
        {'titlename': '» 关于', 'titlehref': 'article.html#/about'},
        {'titlepic': true,
          'titlename': '» ',
          'pictures':
            [require('../../assets/img/git.png'), require('../../assets/img/svn.png')],
          'hrefs':
            ['https://github.com/songliuchen', 'http://code.taobao.org/u/songliuchen/'],
          'tips':
            ['github', 'svn']}
      ]
    }
  }
}

</script>

<style scoped>
.index-center-logo
{
	text-align: center;
	word-wrap:break-word; word-break:normal;
}
.index-center-logo img
{
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 25px;
	min-width: 50px;
	min-height: 50px;
	width: 20%;
	height:20%;
	border:1px solid black;
	border-radius: 50%;
}
	
.index-center-title
{
	display: block;
	vertical-align:middle;
	text-align: center;

}
</style>