<template>
	<div class="searchView">
		<SearchNav></SearchNav>
		<van-tabs v-model="active">
		  <van-tab title="标签 1">
			    <van-card
				  title="标题"
				  desc="描述"
				  num="2"
				  price="2.00"
				  :thumb="imageURL"
				/>
		  </van-tab>
		  <van-tab title="标签 2">内容 2</van-tab>
		  <van-tab title="标签 3">内容 3</van-tab>
		  <van-tab title="标签 4">内容 4</van-tab>
		</van-tabs>
	</div>
</template>
<style lang="scss" type="text/css" scoped="">
	 
</style>
<script>
	import router from '@/router';
	import {mapGetters, mapActions} from 'vuex'; 
	import SearchNav from '@/components/SearchNav';
	 
	export default
	{
		components: {SearchNav },
	}
</script>