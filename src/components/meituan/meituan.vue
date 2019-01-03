<template>
  <div class='wrap'>
    <heads>
      <span>绿茶餐厅</span>
    </heads>
    <section class='section'>
      <div>
        <div class='section_left'>
          <div>
            <ul>
              <li v-for='(item,index) in list' :class='{"active":index===sum}' @click='change(index)'>{{item.name}}</li>
            </ul>
          </div>
        </div>
        <rights :list='list' :sum='sum'></rights>
      </div>
    </section>
    <div class='price'>
      <span>总数量:</span>
      <span>总额:万元</span>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import heads from "../include/header.vue"
  import rights from "./details.vue"
  export default {
    name: "",
    data() {
      return {
        list: [],
        sum: 0
      }
    },
    mounted() {
      this._getTea()
    },
    methods: {
      _getTea() {
        axios('/greenTea').then(res => {
          this.list = res.data.data.food_spu_tags
        })
      },
      change(i) {
        this.sum = i;
      }
    },
    components: {
      heads,rights
    }
  }

</script>

<style>
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    background: skyblue !important;
  }

  .header span {
    font-size: 0.3rem !important;
  }

  .price {
    width: 100%;
    background: orange;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: space-around;
  }

  .active {
    background: #fff;
  }

  .section {
    width: 100%;
    flex: 1;
    overflow: hidden;
    padding-bottom: 0.8rem;
  }

  .section>div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .section>div .section_left {
    width: 25%;
    height: 100%;
    background: #808080;
  }

  .section>div .section_left>div {
    width: 100%;
  }

  .section>div .section_left>div ul {
    width: 100%;
  }

  .section>div .section_left>div ul li {
    width: 100%;
    line-height: 1rem;
    text-align: center;
  }

  .section>div .section_right {
    width: 75%;
  }

</style>
