<template>
    <div class="demo">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ myAge }}</p>
        <p>性别：{{ sex }}</p>
        <button @click="updateAge">点击年龄+1</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return { myAge: this.age }; // 如果想要对传递进来的数据进行修改，把传进来的数据在data里存一份，修改Data里的值
    },
    methods: {
        updateAge() {
            this.myAge++;
        },
    },
    // 简单声明接收
    // props: ["name", "age", "sex"],

    // 对数据类型限制接收
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number,
    // },

    props: {
        name: {
            type: String, // name的类型
            required: true, // name必须要传
        },
        age: {
            type: Number,
            default: 22, // 如果不传默认值是22，和required不会同时存在
        },
        sex: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
.demo {
    background-color: orange;
}
</style>