<template>
    <div class="flex">
        <div v-for="tp in arr" v-bind:key="tp.key" :style="`width: ${tp.width}; height: ${tp.height};`">
        </div>
    </div>
</template>

<script>
    var arr = []; 
    for(var i = 0; i < 30; i++){
        arr.push({
            key: i,
            width: 50+parseInt(Math.random()*400)+'px',
            height: '100px' //50+parseInt(Math.random()*500)+'px'
        })
    }

    export default {
        data () {
            return {
                arr,
            }
        },
        created () {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    .flex{
        width: 100%;
        height: 750px;
        overflow: scroll;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        // position: relative; 
        // text-align: center; 
        // margin: 0 auto;
        // column-count: 5; 
        // column-gap: 0;

        &>div{
            border: 1px solid black;
            // break-inside: avoid; 
            // box-sizing: border-box; 
            // padding: 10px;
            margin: 0 10px;

        }
    }
</style>