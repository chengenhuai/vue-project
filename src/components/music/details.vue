<template>
  <div>
    <keep-alive>
      <div class='img'>
        <img v-lazy='`//y.gtimg.cn/music/photo_new/T002R300x300M000${list.mid}.jpg?max_age=2592000`' alt="">
      </div>
    </keep-alive>
    <p>
      <span v-text='list.name'></span>
    </p>
    <p>
      <span v-text='list.singername'></span>
    </p>
  </div>
</template>

<script>
  import {
    getRecommdDetails
  } from "../../common/common.js"
  export default {
    name: "",
    data() {
      return {
        list: [],
        i:0
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
        getRecommdDetails(this.$route.params.id).then(res => {
          this.list = res.data
        })
      }
    }
  }

</script>

<style scoped>
  .img {
    padding-top: 1rem;
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
  }

  .img img {
    width: 4rem;
    height: 4rem;
  }

  p {
    width: 100%;
    text-align: center;
    line-height: 0.6rem;
  }

</style>
