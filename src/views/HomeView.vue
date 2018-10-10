<template>
	<div class="home">
		<SearchNav></SearchNav>
		<van-swipe :autoplay="3000" >
		  <van-swipe-item v-for="(image, index) in images" :key="index">
				<a :href="image.link">
						<img v-lazy="image" :src="image.url" style="width: 100%; height: 200px;" />
				</a> 
		  </van-swipe-item>
		</van-swipe>
		<div class="entry-list clearfix">
			<nav>
				<van-row >
					<van-col span="4"><a href="#"><img src="#"><span>商品分类</span></a></van-col>
					<van-col span="4"><a href="#"><img src="#"><span>商品分类</span></a></van-col>
					<van-col span="4"><a href="#"><img src="#"><span>商品分类</span></a></van-col>
					<van-col span="4"><a href="#"><img src="#"><span>商品分类</span></a></van-col>
					<van-col span="4"><a href="#"><img src="#"><span>商品分类</span></a></van-col>
				</van-row>
			</nav>
		</div>
		<div class="floor_img">
				 <van-row>
					<van-col span="12" class="first"><a href="#"><img src="#"><span>大的这个</span></a></van-col> 
					<van-col span="12"><a href="#"><img src="#"><span>右边一</span></a></van-col>  
					<van-col span="12"><a href="#"><img src="#"><span>右边二</span></a></van-col>
					<van-col span="12"><a href="#"><img src="#"><span>商品</span></a></van-col>
					<van-col span="12"><a href="#"><img src="#"><span>商品</span></a></van-col>
					<van-col span="12"><a href="#"><img src="#"><span>商品</span></a></van-col>
					<van-col span="12"><a href="#"><img src="#"><span>商品</span></a></van-col>
				</van-row>
		</div>

		<section class="index_floor">
				<van-row>
					<van-col span="8" class="three-shop">span: 8</van-col>
					<van-col span="8" class="three-shop">span: 8</van-col>
					<van-col span="8" class="three-shop">span: 8</van-col>
				</van-row>
		</section>

		<div>
				<van-row class="gekaida" >
					<van-col span="12" class="gekai" >隔开</van-col>
					<van-col span="12" class="gekai" >隔开</van-col>
				</van-row>
				<van-row class="gekaida" >
					<van-col span="12" class="gekai" >隔开</van-col>
					<van-col span="12" class="gekai" >隔开</van-col>
				</van-row>
		</div>
		<TabbarNav></TabbarNav>
	</div>
</template>
<style lang="scss" type="text/css" scoped>
	.home
	{
		background: $mainBackgroundColor;
	}
	.entry-list{
						 background: white;
	           img{
	            width:55px;
	            height:55px;
	            display:block;
	            margin: 0 auto 5px auto;
							border:1px solid red;
	           }
	           span{
	              color: black;
	            }
	}
	.clearfix {
	          color:black;
						padding: 10px 0;
	          .van-col{ 
	                  width: 19.66667%;
	                  text-align: center;
	          }
	}
	.floor_img{
	          padding:0 0;
	          margin:20px 0 20px 0;
	}
	.gekai{
	  height:272px;
		border:1px solid red;
	}
	.first {
	        height:250px; 
					display:block;
					border:1px solid red;
	} 
	.van-{
			&col--{
					&12{
						display:block;height:125px;
					}
			}
	}
	.three-shop{
	           height:201px;
	}
</style>
<script>
import router from '@/router';
import {mapGetters, mapActions} from 'vuex';
import SearchNav from"@/components/SearchNav";
import TabbarNav from"@/components/TabbarNav";
export default {
	components:{SearchNav,TabbarNav},
  name: 'HomeView',
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
        methods: {  
                   
              }   
}
</script>