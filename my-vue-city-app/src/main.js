import Vue from 'vue'
import App from './App'
// 뷰엑스 스토어 JS불러오기
import store from './store.js'

Vue.config.productionTip = false

/* 뷰인스턴스 생성 */
new Vue({
  el: '#app',
  store, // 스토어 사용 인스턴스 등록
  components: { App },
  template: '<App/>',
  created(){
    store.commit('initSet')
    // store.commit('initSet',{
    //     url : "https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg",
    //     txt : "도시소개에 어서오세요!"
    // });
}, //// created

})
