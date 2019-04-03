<template>
    <a-layout class="contentBar">
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>
    </a-layout>
</template>

<script>
    export default {
        name: 'Content',
        data(){
            return {
                collapsed: false,
            }
        },
        props: ['cols'],
        watch: {
            collapsed (n, o, t) {
                this.$emit('changeCols', n, true);
            }
        },
        created () {
            this.collapsed = this.cols
        }
    }
</script>

<style scoped>
    .contentBar{
        text-align: left;
    }
</style>