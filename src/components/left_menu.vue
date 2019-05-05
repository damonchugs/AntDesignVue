<template>
    <div>
         <a-menu
            class="a-menus"
            :defaultSelectedKeys="[]"
            :defaultOpenKeys="['sub1']"
            :openKeys='openKeys'
            mode="inline"
            theme="dark"
            :inlineCollapsed="collapsed"
        > 
            <template v-for="item in menus">
                <!-- <component v-bind:is="item.type!=='submenu'?'SubMenu':'MenuItem'" :datas="item"></component> -->
                <MenuItem :datas="item" v-if="item.type!=='submenu'" :key="item.key" />
                <SubMenu :datas="item" v-else :key="item.key" />
            </template>
        </a-menu>
    </div>
</template>

<script>
    import MenuItem from './a-menu-items.vue'
    import SubMenu from './a-menu-submenu.vue'

    export default {
        name: 'LeftMenu',
        components: {
            MenuItem,
            SubMenu
        },
        props: ['coll'],
        data () {
            return {
                menu: [],
                collapsed: false,
                rootSubmenuKeys: [],
                openKeys: ['1'],
                menuItem: 'MenuItem',
                forms: '表单',
                like: 'like'
            }
        },
        computed: {
            menus () {
                return this.$store.state.leftMenu.menusArr
            },
            showMenu () {
                return this.$store.state.leftMenu.showMenu
            }
        },
        mounted () {
            console.log(this.$store.state.leftMenu.menusArr);
        }
    }

</script>

<style lang="less" scoped>

</style>