<template>
  <div>
    <div class="section">
      <div>
        <swipers :list='list'></swipers>
        <keep-alive>
          <ul class='list'>
            <li v-for='(item,index) in singerlist' :key='item.data.songid'>
              <router-link :to="{name:'recommend',params:{id:item.data.albummid}}">
                <dl>
                  <dt>
                    <img v-lazy="`//y.gtimg.cn/music/photo_new/T002R90x90M000${item.data.albummid}.jpg?max_age=2592000`" alt="">
                  </dt>
                  <dd>
                    <p>{{item.data.albumname}}</p>
                    <p v-for='items in item.data.singer'>
                      {{items.name}}
                    </p>
                    <p></p>
                  </dd>
                </dl>
              </router-link>
            </li>
          </ul>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import swipers from "../include/swiperlist.vue"
  import axios from "axios"
  import Swiper from 'swiper';
  import jsonp from "jsonp"
  import {
    getRecommdList
  } from "../../common/common.js"
  export default {
    name: "",
    data() {
      return {
        list: [],
        singerlist: []
      }
    },
    mounted() {
      setTimeout(() => {
        new Swiper('.banner', {
          pagination: {
            el: ".ol "
          }
        })
      }, 300);
      this.getJson()
      this.getList()
    },
    methods: {
      getJson() {
        axios('http://localhost:8080/banner').then(res => {
          this.list = res.data.data.slider
        })
      },
      getList() {
        getRecommdList().then(res => {
          this.singerlist = res.songlist
        })
      }
    },
    components: {
      swipers
    }
  }

</script>

<style scoped>
  .banner {
    margin-top: 0.01rem;
  }

  .section {
    width: 100%;
    flex: 1;
    overflow: hidden !important;
  }

  .section>div {
    width: 100%;
    overflow: hidden;
  }

  .section>div .list {
    width: 100%;
  }

  .section>div .list li {
    width: 100%;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  .section>div .list li dl {
    width: 100%;
    display: flex;
  }

  .section>div .list li dl dt {
    margin-left: 0.4rem;
    width: 2rem;
    height: 2rem;
  }

  .section>div .list li dl dt img {
    width: 100%;
    height: 100%;
  }

  .section>div .list li dl dd {
    flex: 1;
    margin-left: 0.2rem;
  }

  .section>div .list li dl dd p {
    line-height: 0.6rem;
  }

  a {
    text-decoration: none;
  }

</style>
