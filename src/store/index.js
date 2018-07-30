import Vue from 'vue'
import Vuex from 'vuex'
import tools from '../utils/tools'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: tools._getCookie('isLogin'),
    userInfo : JSON.parse(tools._getCookie('userInfo'))
  },
  mutations: {
    loginStatus (state,status) {
    	console.log(status)
        // 变更登录状态
        state.isLogin = status
        tools._setCookie('isLogin',state.isLogin);
    },
    setUserInfo (state,info){
    	tools._setCookie('userInfo',JSON.stringify(info));
    }
  }
});

export default store