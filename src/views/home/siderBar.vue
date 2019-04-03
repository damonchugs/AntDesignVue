<template>
    <a-layout-sider
    class="siderBar"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">{{collapsed?'Carol':'CarolTech'}}</div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
    export default {
        name: 'Sider',
        data () {
            return {
                collapsed: false,
                logos: 'CarolTech'
            }
        },
        props: ['cols'],
        watch: {
            cols (o, n) {
                this.collapsed = this.cols
            }
        },
        computed: {
            
        },
        created () {
            this.collapsed = this.cols
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="less">
    .siderBar{
        text-align: left;

        .logo{
            text-align: center;
            color: yellow;
            line-height: 0.32rem;
        }
    }
</style>