<template>
    <a-sub-menu :key="datas.key">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <!-- <MenusItem v-for="(item, index) in datas" :key="index" :icon="item.icon" :title="item.title" /> -->
    </a-sub-menu>
</template>

<script>
    import MenusItem from './a-menu-items.vue';

    export default {
        name: 'Submenu',
        components:{
            MenusItem
        },
        props: ['datas']
    }
</script>

<style lang="scss" scoped>

</style>