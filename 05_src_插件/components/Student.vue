<template>
    <div>
        <p @click="showName">姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <input type="text" v-fbind:value="name" />
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
        showName() {
            this.hello();
        },
    },
};
</script>
