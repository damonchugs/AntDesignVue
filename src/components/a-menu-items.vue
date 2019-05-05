<template>
    <a-menu-item :key="datas.key">
        <a-icon :type="datas.icon" />
        <span>{{datas.title}}</span>
    </a-menu-item>
</template>

<script>

export default {
    name: 'Menus',
    props: ["datas"],
    data () {
        return {

        }
    },
    created () {
        console.log(this.datas);
    },
    methods: {
        
    }
}
</script>
