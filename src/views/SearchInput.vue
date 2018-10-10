<template>
	<div class="searchInput">
		<van-nav-bar 
			left-text="宝贝"
			right-text="搜索"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
			style="color:white;"
		/>
	</div>
</template>
<style lang="scss" type="text/css" scoped="">
	
</style>
<script>
	import router from '@/router';
	import {mapGetters, mapActions} from 'vuex';  
	
	export default
	{
		
	}
</script>