<template>
    <div class="demo">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <button @click="sendStudentName">把学生姓名给school组件</button>
    </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            age: 22,
        };
    },
    methods: {
        sendStudentName() {
            pubsub.publish("student", this.name);
        },
    },
};
</script>
<style scoped>
.demo {
    background-color: skyblue;
}
</style>