<template>
  <header>
    <ul class="gnb">
      <!-- v - 값, i - 속성명 -->
      <li v-for="(v,i) in sdata" v-bind:key="i"  v-if="i!=='인트로'">
        <a href="#" v-on:click="chgData(i)">{{i}}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TopArea",
  data() {
    return {
      sdata: this.$store.state.cityData
    }
  },
  methods : {
    // 스토어 변수 업데이트 메서드
    chgData(pm){
        console.log("업뎃", pm)
        // mutation 메서드 호출
        this.$store.commit('chgData', pm);
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
