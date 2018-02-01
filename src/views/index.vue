<template>
    <Select v-model="model8" clearable label-in-value multiple collapse-tags v-on:on-change="hellos" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    import $ from '../jquery.min.js';
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: '{prodl:2}',
                        label: 'dssdd'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model8: []
            }
        },
        methods:{
            hellos:function (obj) {
                /*console.log(eval('(' + obj.value.toString() + ')').prodl);*/

            }
        }
    }
</script>
