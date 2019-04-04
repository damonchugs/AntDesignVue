<template>
    <a-layout-sider
    class="siderBar"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">{{collapsed?'Carol':'CarolTech'}}</div>
      <LeftMenu v-bind:coll="collapsed" />
    </a-layout-sider>
</template>

<script>
    import LeftMenu from '../../components/leftmenu.vue'
    export default {
        name: 'Sider',
        components: {
          LeftMenu
        },
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