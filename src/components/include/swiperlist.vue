<template>
    <div class='banner swiper-container'>
    <ul class='swiper-wrapper'>
      <li v-for='item in list' class='swiper-slide'><img v-bind:src="item.picUrl"></li>
    </ul>
    <div class='pagination'>
      <div ref='pagination' class='ol swiper-pagination'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"",
    props:{
        list:{
            type:Array,
            require:true
        }
    },
    data(){
        return {}
    }
}
</script>

<style>

</style>
