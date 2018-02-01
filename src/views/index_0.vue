<template>

</template>
<script>
    // 以jQuery的Ajax为例，部分代码省略
    import $ from '../jquery.min.js';
    export default {
        created:function () {
            this.getData()
        },
        methods: {
            getData () {
                this.$Loading.config({
                    height: 5
                });
                this.$Loading.start();
                $.ajax({
                    url: '232323',
                    type: 'get',
                    success: () => {
                        this.$Message.success('This is a success tip');
                        this.$Loading.finish();
                        this.loading()
                    },
                    error: () => {
                        this.$Loading.error();
                    }
                });
            },
            loading () {
                const msg = this.$Message.loading({
                    content: '噜啦啦啦德玛西亚，哈哈...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            }
        }
    }
</script>