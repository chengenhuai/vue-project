<template>
<div ref='width'>
  <heads>
    <span>QQ演出</span>
  </heads>
  <banner :list='list'></banner>
  <search></search>
  <phone></phone>
  <div class='hot_section'>
    <h3><span>热门演出</span></h3>
    <ul>
      <li v-for='item in message'>
        <dl>
          <dt><img v-lazy='item.star_logo' alt=""></dt>
          <dd>
            <p>{{item.show_name}}<span>预定</span></p>
            <p><i class="icon iconfont icon-05"></i>{{item.show_time}}</p>
            <p><i class="icon iconfont icon-dizhi-01"></i>{{item.hall_name}}</p>
            <p><span>{{item.min_price/100}}-{{item.max_price/100}}</span>元</p>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import "../../../static/fonts/iconfont.css"
import axios from "axios"
import Swiper from 'swiper';
import search from "../include/search.vue"
import phone from "../include/picture.vue"
import heads from "../include/header.vue"
import banner from "../include/swiperlist.vue"

export default {
  name: 'index',
  data () {
    return {
      message:[],
      list:[]
    }
  },
  components:{
    search,phone,heads,banner
  },
  mounted() {
    setTimeout(()=>{
      new Swiper('.banner',{
        autoplay:true,
        loop:true,
        pagination:{
          el:".ol"
        }
      })
    },300)
    this.getJson()
  },
  methods:{
    getJson(){
      axios('http://localhost:8080/api').then(res=>{
        this.message = res.data
      })
      axios('http://localhost:8080/banner').then(res=>{
        this.list = res.data.data.slider
      })
    }
  }
}
</script>
<style>
@import url('../../../static/css/swiper.css');
</style>
