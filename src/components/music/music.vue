<template>
  <div class='musicPage'>
    <heads>
      <h5>QQ 音乐</h5>
    </heads>
    <div class='musicPage-head'>
      <ul>
        <router-link to="/music/recommend">推荐</router-link>
        <router-link to="/music/rankinglist">排行榜</router-link>
        <router-link to="/music/searchmusic">搜索</router-link>   
      </ul> 
    </div>
    <div class="section">
      <keep-alive>
        <transition>
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import heads from "../include/header"
  export default {
    name: "",
    data() {
      return {}
    },
    components: {
      heads
    }
  }

</script>

<style>
  @import url('../../../static/css/musicPage.css');
  .header {
    background: #31c27c !important;
  }

  .header h5 {
    margin-left: 0.4rem;
    color: #fff;
    font-size: 0.3rem;
  }

  a {
    color: #000;
  }

  .router-link-exact-active {
    border-bottom: 1px solid #31c27c;
    color: #31c27c;
  }
  @import url('../../../static/css/animate.css');

</style>
