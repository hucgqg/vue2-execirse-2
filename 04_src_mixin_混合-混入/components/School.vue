<template>
    <div>
        <p @click="showName">名称：{{ name }}</p>
        <p>地址：{{ address }}</p>
    </div>
</template>

<script>
// import { mixin } from "../mixin"; //局部引入，全局引入见main.js
export default {
    name: "School",
    data() {
        return {
            name: "四部曲",
            address: "北京",
        };
    },
    // mixins: [mixin],
};
</script>