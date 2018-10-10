<template>
<div class="tabbarNav">
	<van-tabbar v-model="active">
	  <van-tabbar-item icon="wap-home" to="/pages/homeView">首页</van-tabbar-item>
	  <van-tabbar-item icon="more" to="/pages/classificationView">分类</van-tabbar-item>
	  <van-tabbar-item icon="cart" to="/pages/shoppingCartView">购物车</van-tabbar-item>
	  <van-tabbar-item icon="contact" to="/pages/personalCenterView">个人中心</van-tabbar-item>
	</van-tabbar>
</div>
</template>
<style lang="scss" type="text/css">
</style>
<script>
	import router from '@/router';
	import {mapGetters, mapActions} from 'vuex';
	export default
	{
		data()
		{
			return
			{
				active: 0
			}
		},
		methods: {
		 
		},
		
	}
</script>