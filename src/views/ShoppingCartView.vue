<template>
	<div class="shoppingCart">
		<div class="SCTitle">
				<van-nav-bar
				  title="购物车"
				  left-text="返回"
				  right-text="编辑"
				  left-arrow
				  @click-left="onClickLeft"
				  @click-right="onClickRight"
					style="color:white;"
				/>
		</div>
		<div>
			<van-card
			  title="标题"
			  desc="描述"  
			  num="2"
			  price="2.00"
			  :thumb="imageURL"
			>
			  <div slot="footer">
			    <van-button size="mini">按钮</van-button>
			    <van-button size="mini">按钮</van-button>
			  </div>
			</van-card>
		</div>
		<div>
				<van-submit-bar
				  :price="3050"
				  button-text="提交订单"
				  @submit="onSubmit"
				> 
				   <van-checkbox v-model="checked">全选</van-checkbox>
				</van-submit-bar>
		</div>
		<TabbarNav></TabbarNav>
 	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.shoppingCart
	{
			padding: 4.2rem 0 0 0; 
			@include greyBackground; 
			.SCTitle
			{
				 
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				background: $mainColor;
				color: white;
				text-align: center;
				font-weight: normal;
				font-size: 1.9rem; 
				.van-nav-bar
				{
					color: white;
					background: $mainColor;
					&__text
					{
						color:white;
					}
				}
				.van-hairline--bottom::after
				{
					border: 1px solid $mainColor;
				}
			}
			.van-goods-action
			{
				bottom: 3.2rem;
			}
	}
	.van-submit-bar
	{
		    bottom: 52px;
	}
	.van-nav-bar__text
	{
		color: white;
	}
	.van-card
	{
		background: white;
	}
</style>
<script>
import router from '@/router';
import {mapGetters, mapActions} from 'vuex';
import TabbarNav from '@/components/TabbarNav';
export default {
	components:{TabbarNav},
  name: 'HelloWorld',
          data () {
            
          },
        methods: {  
                
                 
              }   
}
</script>