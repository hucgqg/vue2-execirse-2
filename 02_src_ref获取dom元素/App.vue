<template>
    <div>
        <h4 ref="title">欢迎学习VUE</h4>
        <button @click="showDOM">点击查看dom元素</button>
        <school ref="school" />
    </div>
</template>

<script>
import School from "./components/School.vue";

export default {
    name: "App",
    components: { School },
    methods: {
        showDOM() {
            console.log(this.$refs.title); // 真实的dom元素
            console.log(this.$refs.school); // school组件的实例对象
        },
    },
};
</script>
