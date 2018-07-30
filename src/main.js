// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Login from './views/system/login'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App,Login},
  render(h){
    if(this.isLogin == 1){
    	console.log('aaa')
     	return h(App);
    }else{
    	console.log('lll')
     	return h(Login);
    }
  },
  computed : {
    isLogin(state){
        return store.state.isLogin;
    }
  },

})
