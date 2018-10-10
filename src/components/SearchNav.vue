<template>
<div class="searchNav">  
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
			background="$mainColor"
      show-action
      @search="onSearch"
			
    >
        
      <div class="shoppingcart" slot="action">
           <van-icon name="cart" />
      </div>
    </van-search>
      
</div>
</template>

<style  lang="scss" scoped >
	@import "../scss/searchNav"; 
</style>
 
<script>
import router from '@/router'; 
export default {
  name: 'SearchNav',
  data () {
    return {
      msg: 'SearchView'
    }
  },
    
}
</script>