<template>
    <a-menu-item :key="keys">
        <a-icon :type="icon" />
        <span>{{title}}</span>
    </a-menu-item>
</template>

<script>
export default {
    name: 'Menus',
    props: ['keys', 'title', 'icon']
}
</script>
