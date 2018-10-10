<template>
	<div class="login">
		<div class="lgTitle">
				<van-nav-bar 
					left-text="返回"
					right-text="编辑"
					left-arrow
					@click-left="onClickLeft"
					@click-right="onClickRight"
					style="color:white;"
				/>
		</div>
		<div class="entryInfo">
			<div class="entryInfo-img">
				<img src="#" alt="">
			</div>
			<div class="entryInfo-input">
				<van-cell-group>
				  <van-field
					v-model="phone"
					label="手机号"
					placeholder="请输入手机号"
					 
				  />
				
				    <van-field
						v-model="sms"
						center
						clearable
						label="短信验证码"
						placeholder="请输入短信验证码"
					  >
						<van-button slot="button" size="small" type="primary">发送验证码</van-button>
					</van-field>
				</van-cell-group>  
			</div>
			<div class="entryInfo-button">
				<van-button size="large">登录</van-button>
			</div>
			<div class="tips">
				手机号仅适用于您登录或找回密码
			</div>
		</div>
		<div class="otherLoginWay">
			<div class="otherLoginWay-tips">
				第三方直接登录
			</div>
			<van-row>
				<van-col span="8"> </van-col>
				<van-col span="8"> </van-col>
				<van-col span="8"> </van-col>
			</van-row>
		</div>
		
	</div>
</template>
<style lang="scss" type="text/css" scoped="">
.login
{	
	 
	background: $mainBackgroundColor; 
	@include greyBackground; 
	.lgTitle .van-nav-bar
	{
		
		 .van-nav-bar__left , .van-nav-bar__right
		 {
			 
		 }
	} 
	.entryInfo
	{
		&-img
		{
			width: 8rem;
			height: 8rem;
			border: 1px solid red;
			margin: 3rem auto;
		}
		&-button
		{
			button
			{
				@include largeButton;
			}
		}
		.tips
		{
			font-size: 0.5rem;
			text-align: center;
		}
		&-input
		{
			padding: 0 1rem;
		}
	}
	.otherLoginWay
	{
		font-size: 0.5rem;
		text-align: center;
		margin: 3rem auto;
		&-tips
		{
			font-size: 0.5rem;
			text-align: center;
		}
		.QQLogin
		{
			@include otherLoginWay;
		}
		.WechatLogin
		{
			@include otherLoginWay;
		}
		.AlipayLogin
		{
			@include otherLoginWay;
		}
		.van
		{
			&-row
			{
				border: 1px solid blue;
				width: 70%;
				margin: 2rem auto;
				
			}
			&-col
			{
				height: 5rem;
				border: 1px solid red;
				&--8
				{
					
				}
			}
		}
	}
}
</style>
<script>
	import router from '@/router';
	import {mapGetters, mapActions} from 'vuex';
	export default
	{
		 
	}
</script>