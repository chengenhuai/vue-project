<template>
<div id='app'>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
</div>
  
</template>

<script>
import Index from './components/singer/index'
import "../static/css/style.css"
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'App',
  data(){
    return{ }
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 0.14rem;
}
</style>
