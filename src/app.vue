<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div>
    <li><router-link to="/">/attrs</router-link></li>

        <router-view class='view_1' name='b'></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
