import Vue from 'vue'
import App from './App'
// 뷰엑스 스토어 JS불러오기
import store from './store.js'
// import $ from "jquery";

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
mounted(){
    // // 링크 클릭시 a에 클래스 on주기
    // $(".gnb a").click(function(){
    //     $(this).addClass("on")
    //     .parent().siblings()
    //     .find("a").removeClass("on");
    //     // 박스 애니
    //     showBx();
    // }); ////////// click ///////////

    // function showBx(){
    //     // 이미지와 설명박스 순서대로 나타나기
    //     $("main img")
    //     .css({opacity:0}).stop()
    //     .delay(500).fadeTo(500,1);

    //     $("main p")
    //     .css({opacity:0}).stop()
    //     .delay(1000).fadeTo(500,1);
    // } ////// showBx ////
  } ////////// mounted //////
})
