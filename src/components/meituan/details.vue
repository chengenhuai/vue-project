<template>
  <div class='section_right'>
    <ul>
      <div v-for='(item,index) in list' v-if='index===sum'>
        <li v-for='(items,inx) in item.spus'>
          <dl>
            <dt></dt>
            <dd>{{items.name}}</dd>
          </dl>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "",
    props: ["list",'sum'],
    data() {
      return {

      }
    }
  }

</script>

<style>


</style>
