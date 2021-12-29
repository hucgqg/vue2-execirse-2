<template>
    <div class="demo">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
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
};
</script>
<style scoped>
.demo {
    background-color: skyblue;
}
</style>