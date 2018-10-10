<template>
<div class="personalCenter">
	<div class="perInfo">
		<div class="InfoCard">
			<img src="#" alt="">
			<span>myName</span>
		</div>
		<span class="setting">
			<router-link to="/pages/PerInfoUpdate">设置</router-link>
		</span>
		<div>
				<van-row>
					<van-col span="8">
						<p class="bt">
							我的佣金
						</p>
						<p class="price">
							0
						</p>
					</van-col>
					 
					<van-col span="8">
						<p class="bt">
							我的佣金
						</p>
						<p class="price">
							0
						</p>
					</van-col>
					<van-col span="8"> 
						<p class="bt">
							我的佣金
						</p>
						<p class="price">
							0
						</p>
					</van-col>
				</van-row>
		</div>
	</div>
	<div class="top-cell-group">
		<van-cell-group>
			<van-cell title="全部订单" icon="records" is-link />
		</van-cell-group>
		<div class="order-state">
			<van-row>
				<van-col span="6" ><img src="#"><span class="ortitle">状态</span></van-col> 
				<van-col span="6" ><img src="#"><span class="ortitle">状态</span></van-col> 
				<van-col span="6" ><img src="#"><span class="ortitle">状态</span></van-col> 
				<van-col span="6" ><img src="#"><span class="ortitle">状态</span></van-col> 
			</van-row>
		</div>
	</div>
	<div class="middle-cell-group">
		<van-cell-group>
			<van-cell title="个人信息" icon="contact" is-link />
	 		<van-cell title="我的收藏" icon="like-o" is-link />
		 	<van-cell title="消费记录" icon="cash-back-record" is-link />
		 	<van-cell title="地址管理" icon="location" is-link />
		</van-cell-group>
	</div>
	<div class="bottom-cell-group">
		<van-cell-group>
			<van-cell title="修改密码" is-link />
	 		<van-cell title="账号绑定" is-link /> 
		</van-cell-group>
	</div>
	<van-button size="large">退出</van-button>
	<TabbarNav></TabbarNav>
</div> 
</template>
<style lang="scss" type="text/css" scoped >
@import "../scss/personalCenterView";
.order-state
					{
						padding: 10px 0;
						background: white;
						.van-col-6
						{
							height: 55px;
							padding: 10px 0 8px 0;
							text-align:center;

						}
						img
						{
							 width:25px;
							 height:25px;
							 display:block;
							 margin: 0 auto;
						}
						span
						{
							display:block;
							margin: 5px auto 0 auto;
							text-align: center;
						}
					}
					
					.setting
					{
						color: white;
						font-size: 16px;
						position:absolute;
						right:10px;
						top:10px;
					}
</style>
<script>
import router from '@/router';
import {mapGetters, mapActions} from 'vuex';
import TabbarNav from"@/components/TabbarNav";
export default {
	components:{TabbarNav},
  name: 'PersonalCenterView',
          data () {
            
          },
        methods: {  
                
                 
              }   
}
</script>