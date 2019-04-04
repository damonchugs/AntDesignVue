<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <SiderBar v-bind:cols="collapsed" />
      <Content :cols="collapsed" @changeCols="changeColsToSider" />
    </a-layout>
  </div>
</template>

<script>
import SiderBar from './views/home/siderBar.vue'
import Content from './views/home/content.vue'

export default {
  name: 'app',
  components: {
    SiderBar,
    Content
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    changeColsToSider (n) {
      this.collapsed = n;
    }
  }
}
</script>


<style lang="less">
@import './style/base.less';
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;

  #components-layout-demo-custom-trigger{
    height: 100%;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color .3s;
    }

    .trigger:hover {
      color: #1890ff;
    }

    .logo {
      height: 32px;
      background: rgba(255,255,255,.2);
      margin: 16px;
    }
  }

  
}
</style>
