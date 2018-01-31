<template>
    <Select v-model="model1.hello" v-on:on-change='model1_return' style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>

<script>
    export default {
      props: {
        cityList: {

        },
        model1:{

        },
        model1_return:{

        }
      }
    }
</script>
