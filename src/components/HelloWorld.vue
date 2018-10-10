<template>
  <div class="hello">
	asdasd		 
			<van-row>
				<van-col span="8">
					<button  @click="linkClassification">分类</button>
				</van-col>
				<van-col span="8">
						<router-link to="/pages/shoppingCartView">
							<button>购物车</button>
						</router-link>
				</van-col>
				<van-col span="8">
						<router-link to="/pages/personalCenterView">
								<button>
										个人中心
								</button>
						</router-link>
				</van-col>
				<van-col span="8">注册</van-col>
			</van-row>
  </div>
</template>

<script>
import router from '@/router';
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
          data () {
            
          },
        methods: {  
                
                linkClassification(){
                            router.push('/pages/classificationView');
                          } 
                 

              }   
}
</script>
 
<style lang="scss" scoped>
 
</style>
