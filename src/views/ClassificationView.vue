<template>
<div class="classification">
		<SearchNav></SearchNav>
		<div class="leftNav">
				<van-badge-group :active-key="activeKey">
						<van-badge title="母婴用品" @click="onClick" />
					<van-badge title="女装正品" @click="onClick"   />
					<van-badge title="男装正品" @click="onClick"  />
						<van-badge title="内衣服饰" @click="onClick"   />
					<van-badge title="化妆品"  @click="onClick"  />
						<van-badge title="居家百货" @click="onClick"   />
						<van-badge title="时尚智能" @click="onClick"   />
							<van-badge title="营养保健" @click="onClick"   />
						<van-badge title="女鞋箱包" @click="onClick"   />
				</van-badge-group>
		</div>
		<div class="rightContent">
			 <div class="goodsTitle">
				 aa系列
			 </div>
			<van-row>
				<van-col span="8">
					<img src="#" />
					<p>商品</p>
				</van-col>
				<van-col span="8">
					<img src="#" />
					<p>商品</p>
				</van-col>
				<van-col span="8">
					<img src="#" />
					<p>商品</p>
				</van-col>
			</van-row>
		</div>
		<TabbarNav></TabbarNav>	
</div>

</template>
<style lang="scss" scoped="" type="text/css">
	@import "../scss/classificationView";
</style>
<script>
	import router from '@/router';
	import {mapGetters, mapActions} from 'vuex';
	import SearchNav from '@/components/SearchNav';
	import TabbarNav from '@/components/TabbarNav';
 
	export default
	{
		components: {SearchNav,TabbarNav},
  data() {
    return {
      
    };
  },
//
  methods: {
   
  }
//
	}
</script>