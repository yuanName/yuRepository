<template>
	<div class="singleProduct">
		<SingleProductNav></SingleProductNav>
		<van-swipe :autoplay="3000" >
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<a :href="image.link">
						<img v-lazy="image" :src="image.url" style="width: 100%; height: 27rem;" />
				</a> 
			</van-swipe-item>
		</van-swipe>
		<van-panel title="￥59-69" desc="夏天吸汗中国风服装" status="分享">
		  <div>
			  <van-row>
			  	<van-col span="8" class="three-shop">快递：0.00</van-col>
			  	<van-col span="8" class="three-shop">月销：233笔</van-col>
			  	<van-col span="8" class="three-shop">广东中山</van-col>
			  </van-row>
		  </div>
		  <div slot="footer">
			 
		  </div>
		</van-panel>
		<van-submit-bar
		  :price="3050"
		  button-text="提交订单"
		  @submit="onSubmit"
		>
		  <van-checkbox v-model="checked">全选</van-checkbox>
		  <span slot="tip">
			您的收货地址不支持同城送, <span>修改地址</span>
		  </span>
		</van-submit-bar>
		<van-cell-group> 
		  <van-cell title="单元格" is-link value="内容" /> 
		</van-cell-group>
		
		<van-sku
		  v-model="showBase"
		  :sku="sku"
		  :goods="goods"
		  :goods-id="goodsId"
		  :hide-stock="sku.hide_stock"
		  :quota="quota"
		  :quota-used="quotaUsed"
		  :reset-stepper-on-hide="resetStepperOnHide"
		  :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
		  :close-on-click-overlay="closeOnClickOverlay"
		  :disable-stepper-input="disableStepperInput"
		  :message-config="messageConfig"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked"
		/>
		
		
		
	</div>
</template>
<style lang="scss" type="text/css" scoped>
	.singleProduct
	{
		background: $mainBackgroundColor;
	}
</style>
<script>
	import router from '@/router';
	import {mapGetters, mapActions} from 'vuex';
	import SingleProductNav from"@/components/SingleProductNav";
	export default
	{
		components:{SingleProductNav},
		data() {
			
			return {
				images: [
					{
						link: '',
						url: require('../images/load1.jpg')
					},
					{
						link: '',
						url: require('../images/load2.jpg')
					}
				],
				
			}
		},
	}
</script>