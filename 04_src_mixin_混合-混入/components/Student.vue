<template>
    <div>
        <p @click="showName">姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
    </div>
</template>

<script>
// import { mixin } from "../mixin";//局部引入，全局引入见main.js
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            age: 22,
            x: 333,
        };
    },
    // mixins: [mixin],
};
</script>
