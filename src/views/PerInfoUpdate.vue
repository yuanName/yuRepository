<template>
	<div class="perInfoUpdate">
	
		<van-nav-bar
		  title="信息修改"
		  left-text=""
		  right-text="···"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		<div>
			<van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
			  <van-icon name="photograph" />
			</van-uploader>
	
			<van-cell-group>
			  <van-field
			    v-model="username"
			    label="用户名"
			    icon="clear"
			    placeholder="请输入用户名"
			    required
			    @click-icon="username = ''"
			  /> 
			</van-cell-group>
	
			<van-cell-group> 
			  <van-field
			    v-model="password"
			    type="password"
			    label="出生日期"
			    placeholder="请输入出生日期"
			    required
			  />
			</van-cell-group> 
			<van-datetime-picker
			  v-model="currentDate"
			  type="date"
			  :min-date="minDate"
			  v-show="dateShow"
			  
			/>
	
			<van-cell-group>
			  <van-field
			    v-model="email"
			    label="邮箱"
			    icon="clear"
			    placeholder="请输入邮箱"
			    required
			    @click-icon="username = ''"
			  /> 
			 
			</van-cell-group>
	
	
			<van-button size="large" >确认修改</van-button>
		</div>
	
	
		<div>
			<van-cell-group> 
			  <van-field
			    v-model="password"
			    type="password"
			    label="密码"
			    placeholder="请输入原密码"
			    required
			  />
			  <van-field
			    v-model="password"
			    type="newPassword"
			    label="新密码"
			    placeholder="请输入新密码"
			    required
			  />
			  <van-field
			    v-model="password"
			    type="confirmPassword"
			    label="确认密码"
			    placeholder="请输入确认密码"
			    required
			  />
			</van-cell-group>
			<van-button size="large">确认修改</van-button>
		</div>  
	</div>
</template>
<style lang="scss" type="text/css" scoped>
 
	.perInfoUpdate
	{	
		@include greyBackground; 
		.van
		{
			&-button
			{
				&--default
				{
					color: white;
					background:$mainColor;
				}
				&--large
				{
					@include largeButton;
				}
			}
			&-nav
			{
				&-bar
				{
					background-color: $mainColor;
					color: white;
				}
			}
			&-icon
			{
				&-photograph
				{
					margin: 1rem 11rem;
					font-size: 3rem;
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