<template>
    <div class="demo">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <button @click="sendStudentName">点击发送学生姓名</button>
        <button @click="unbind">解邦自定义事件</button>
    </div>
</template>

<script>
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
            this.$emit("aaa", this.name, 123, 456, 788, 999);
            this.$emit("demo");
        },
        unbind() {
            this.$off("aaa"); // 解邦一个自定义
            // this.$off(["aaa", "demo"]); // 解邦多个自定义
            // this.$off(); // 解邦所有的自定义
        },
    },
};
</script>
<style scoped>
.demo {
    background-color: skyblue;
}
</style>