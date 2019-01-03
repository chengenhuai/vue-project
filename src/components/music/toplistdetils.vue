<template>
  <div>
    <div class='toplist_header'>
      <dl>
        <dt>
          <img :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${message}.jpg?max_age=2592000`" alt="">
        </dt>
        <dd>
          <p>{{toplist.ListName}}</p>
          <p>{{Number.parseInt(toplist.listennum/365/24)}}天</p>
        </dd>
      </dl>
    </div>
    <div class='music-list'>
      <ul>
        <li v-for='(item,index) in list' :key="index">
          <dl>
            <dt>{{index+1}}</dt>
            <dd>
              <p>{{item.data.albumname}}</p>
              <span v-for='items in item.data.singer'>{{items.name}}/</span>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    getTopListDetails
  } from "../../common/common.js"
  export default {
    name: "",
    data() {
      return {
        list: [],
        message: 0,
        toplist: []
      }
    },
    watch: {
      "$route" () {
        location.reload()
      }
    },
    mounted() {
      this._getDetails()

    },
    methods: {
      _getDetails() {
        getTopListDetails(this.$route.query.id).then(res => {
          res.songlist.map((item, index) => {
            if (index == 0) {
              this.message = item.data.albummid
            }
          })
          this.list = res.songlist
          this.toplist = res.topinfo
        })
      }
    }
  }

</script>

<style>
.toplist_header{
    width: 100%;
}
.toplist_header dl{
    width: 60%;
    margin:1rem auto;
    display: flex;
}
.toplist_header dl dt{
    width: 2rem;
    height: 2rem;
}
.toplist_header dl dd{
    flex:1;
    margin-left: 0.4rem;
    line-height: 0.6rem;
}
.toplist_header dl dt img{
    width: 2rem;
    height: 2rem;
}
.music-list{
    width: 100%;
}
.music-list ul{
    width: 100%;
}
.music-list ul li{
    width: 100%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}
.music-list ul li dl{
    width: 100%;
    display: flex;
}

.music-list ul li dl dt{
    width: 0.6rem;
    height: 1.2rem;;
    line-height: 1.2rem;
    text-align: center;
    color: #808080;
}
.music-list ul li:nth-of-type(1) dl dt{
    color: red;
}
.music-list ul li:nth-of-type(2) dl dt{
    color: orange;
}
.music-list ul li:nth-of-type(3) dl dt{
    color: pink;
}
.music-list ul li dl dd{
    flex:1;
    margin-left: 0.4rem;
}
.music-list ul li dl dd span{
    line-height: 0.6rem;
}
.music-list ul li dl dd p{
    line-height: 0.6rem;
}
</style>
