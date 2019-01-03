<template>
  <div>
    <ul class='toplist'>
      <li v-for='item in ToplistData.topList' :key='item.id'>
        <router-link :to="{path:'/music/toplistdetils',query:{id:item.id}}">
          <dl>
            <dt>
              <img :src="item.picUrl">
            </dt>
            <dd>
              <p v-text='item.topTitle'></p>
              <p v-for='(items,index) in item.songList'>
                <span v-text='index+1'></span>
                <span v-text='items.songname'></span>
                <span v-text='items.singername'></span>
              </p>
            </dd>
          </dl>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "",
    data() {
      return {
        ToplistData: []
      }
    },
    mounted() {
      this.getTopData()
    },
    methods: {
      getTopData() {
        axios('/toplist').then(res => {
          console.log(res.data.data)
          this.ToplistData = res.data.data
        })
      }
    }
  }

</script>

<style scoped>
  .toplist {
    width: 100%;
    background: #f4f4f4;
  }

  .toplist li {
    width: 100%;
    margin-top: 0.6rem;
  }

  .toplist li dl {
    width: 100%;
    display: flex;
    background: #ffffff;
  }

  .toplist li dl dt {
    width: 2rem;
    height: 2rem;
    margin-left: 0.4rem;
  }

  .toplist li dl dt img {
    width: 2rem;
    height: 2rem;
  }

  .toplist li dl dd {
    flex: 1;
    margin-left: 0.2rem;
  }

  .toplist li dl dd p {
    line-height: 0.5rem;
  }

  .toplist li dl dd p span {
    margin-left: 0.1rem;
  }

  a {
    text-decoration: none;
  }

</style>
