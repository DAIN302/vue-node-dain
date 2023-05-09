<template>
  <header>
    <ul class="gnb">
      <!-- v - 값, i - 속성명 -->
      <!-- 리액티브 데이터와 뷰엑스 스토어 cityData 변수를 컴포넌트 변수인
           sdata에 할당하여 사용하면 처음에만 할당된 변수로 세팅이 되고
           cityData가 변경될때는 반영되지 않음
          따라서 리액티브 데이터를 직접 해당 자리에 사용  -->
      <li v-for="(v,i) in this.$store.state.cityData" v-bind:key="i"  v-if="i!=='인트로'">
        <a href="#" v-on:click="chgData(i)">{{i}}</a>
      </li>
    </ul>
    <!-- 메뉴선택이동링크 -->
    <div class="m2">
      <!-- v-on:이벤트명.prevent 기본 기능 막기
           prevent는 event.preventDefault()와 같다
           참고) 
           v-on:이벤트명.stop 이벤트 버블링 막기
           prevent는 event.stopPropagation()와 같다
       -->
      <a href="#" v-on:click.prevent="chgMenu(num)" v-text="'메뉴'+num"></a>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "TopArea",
  data() {
    return {
      // 1. 도시 정보 객체 변수
      sdata: this.$store.state.cityData,
      // 2. 메뉴 번호(처음에 다음 메뉴인 2번)
      num : 2
    }
  },
  methods : {
    // 스토어 변수 업데이트 메서드
    chgData(pm){
        console.log("업뎃", pm)
        // mutation 메서드 호출
        this.$store.commit('chgData', pm)
    },
    // 메뉴 변경하기
    chgMenu(n){ // n-메뉴 번호 전달
      console.log("메뉴변경",n)
      // mutation 메서드 호출
      this.$store.commit('chgMenu', n)
      // 메뉴1/메뉴2 전환을 위한 변수 변경
      // 컴포넌트 변수인 num을 변경
      n===1?this.num=2:this.num=1
      // 메뉴 변경 시 DOM이 변경되므로 제이쿼리 메서드 호출
      // 제이쿼리 코드블록으로 싸서 호출함으로 DOM로드 후 실행 보장
      $(()=>this.setJQ());
    },
    // 제이쿼리 세팅 메서드
    setJQ(){
      // 링크 클릭시 a에 클래스 on주기
      $(".gnb a").click(function(){
              $(this).addClass("on")
              .parent().siblings()
              .find("a").removeClass("on");
              // 박스 애니
              showBx();
          }); ////////// click ///////////

          function showBx(){
              // 이미지와 설명박스 순서대로 나타나기
              $("main img")
              .css({opacity:0}).stop()
              .delay(500).fadeTo(500,1);

              $("main p")
              .css({opacity:0}).stop()
              .delay(1000).fadeTo(500,1);
          } ////// showBx ////
      } 
  },
  // 돔을 만들고 난 후
  mounted(){
    this.setJQ();
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m2{
  display: block;
  text-align: right;
  }
  .m2 a{
    font-size: 20px;
  }
  .m2 a:hover{
    text-decoration: underline;
    text-decoration-style: double;
    color: green;
  }
  header {
      padding: 15px;
      border: 2px solid #ccc;
  }
  header ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 0 15px;
  }
  header a {
      font-size: 30px;
      color: #222;
      text-decoration: none;
  }
  header a:hover, header a.on {
      color: orangered;
      text-decoration: overline;
      text-decoration-style: wavy;
  }

</style>
