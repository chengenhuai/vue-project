<template>
<ul class='list_car'>
    <li v-for='(item,index) in message' :key='item.id'>
        <div>
            <input type="checkbox" v-model="item.isChecked" @change='checkItem'>
        </div>
        <dl>
            <dt><img :src='item.url'></dt>
            <dd>
                <p>{{item.name}}</p>
                <p>价格 : {{item.min_price}}-{{item.max_price}}万元</p>
                <p>参数 : <span v-for='value in item.utils'>{{value.displacement}} {{value.consumption}}</span></p>
                <p>保值率 : {{item.hedge}}</p>
                <div>
                    <span @click='mimus(index)'>-</span>
                    <span>{{item.count}}</span>
                    <span @click='maxos(index)'>+</span>
                </div>
            </dd>
        </dl>
    </li>
</ul>
</template>

<script>
export default {
    name:"",
    data(){
        return {

        }
    },
    props:{
        message:{
            type:Array,
            require:true
        }
    },
    methods:{
        checkItem(){
            this.$emit('updata')
        },
        mimus(index){
            this.message[index].count--;
            this.$emit('updata')
        },
        maxos(index){
            this.message[index].count++;
            this.$emit('updata')
        }
    }

}

</script>

<style>

</style>
