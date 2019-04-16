<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="text" v-model="name">
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
    <div class="fox">123</div> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="less">
  .fox{
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
</style>

