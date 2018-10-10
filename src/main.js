// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Row, Col,Search,Icon,Tabbar,TabbarItem,Badge, BadgeGroup,Card,
		 GoodsAction,
		  GoodsActionBigBtn,
		  GoodsActionMiniBtn,
		   Cell, CellGroup,
		   Button,
			 List,
			 Swipe, SwipeItem,
			 NavBar,
			 SubmitBar,
			 Field,
			 Panel, 
			 Sku,
			 Tab, Tabs 
		 } from 'vant';
 
 Vue.use(Search);
 Vue.use(Icon);
 Vue.use(Tabbar).use(TabbarItem);
 Vue.use(Badge);
 Vue.use(BadgeGroup);
 Vue.use(Row).use(Col);
 Vue.use(Card);
  
Vue.use(GoodsAction);
Vue.use(GoodsActionBigBtn);
Vue.use(GoodsActionMiniBtn);
Vue.use(Cell).use(CellGroup);
Vue.use(Button);
Vue.use(List);
Vue.use(Swipe).use(SwipeItem);
Vue.use(NavBar);
Vue.use(SubmitBar);
Vue.use(Field);
Vue.use(Panel);
Vue.use(Sku);
Vue.use(Tab).use(Tabs);
Vue.config.productionTip = false

 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
