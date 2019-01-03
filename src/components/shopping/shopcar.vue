<template>
  <div class='wrap'>
    <heads>
      <h2>购物车</h2>
    </heads>
    <div class="section">
      <div>
        <div class="nav">
          <div class='checked'>
            <input type="checkbox" v-model='isTrue' @change='isCheked'> 全选
          </div>
        </div>
        <list :message='message' @updata='onupdata'></list>
      </div>
    </div>
    <div class='price'>
      <span>总数量:{{sunmary}}</span>
      <span>总额:{{totle}}万元</span>
    </div>
  </div>
</template>

<script>
  import heads from "../include/header"
  import axios from "axios"
  import list from "../include/carlist"
  import betterScroll from "better-scroll"
  export default {
    name: "shopcar",
    data() {
      return {
        // checkbox的选中状态
        isTrue: false,
        // 数据的内容
        message: [],
        // 总数量变量
        sunmary: 0,
        // 总额变量
        totle: 0
      }
    },
    mounted() {
      // 进入页面渲染数据
      this.getJson()
      new betterScroll('.section', {
        click: document.body.clientWidth > 500 + 'px' ? false : true
      })
    },
    methods: {
      getJson() {
        axios('/carlist').then(res => {
          this.message = res.data
        })
        this.computer()
      },
      isCheked() {
        this.message.map(item => {
          item.isChecked = this.isTrue
        })
        this.computer()
      },
      onupdata() {
        let temp = [];
        this.message.map(item => {
          if (item.isChecked == true) {
            temp.push(item)
          }
        })
        if (temp.length === this.message.length) {
          this.isTrue = true;
        } else {
          this.isTrue = false;
        }
        this.computer()
      },
      computer(){
        let sum = 0;
        let tot = 0;
        this.message.map((item,index)=>{
          if(item.isChecked){
            sum += item.max_price*item.count
            tot += item.count
          }
        })
        this.totle = sum;
        this.sunmary = tot;
      }
    },
    components: {
      heads,
      list
    }
  }

</script>

<style>
  @import url("../../../static/css/shopcar.css");
  .header {
    background: orange;
  }

</style>
