<template>
    <a-sub-menu :key="key">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <MenusItem v-for="(item, index) in arr" :key="index" :icon="item.icon" :title="item.title" />
    </a-sub-menu>
</template>

<script>
    import MenusItem from './a-menu-items.vue';

    export default {
        name: 'Submenu',
        components:{
            MenusItem
        },
        props: ['key', 'title', 'icon', 'arr']
    }
</script>

<style lang="scss" scoped>

</style>