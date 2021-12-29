<template>
    <div>
        <!-- student下面的两种写法都是一样的，自定义aaa事件给子组件 -->
        <!-- <Student v-on:aaa="getStudentName" /> -->
        <!-- <Student @aaa="getStudentName" /> -->
        <!-- 使用ref的方式，配合mounted使用，灵活性更好 -->
        <Student ref="student" @demo="m1" />
        <School :getSchoolName="getSchoolName" />
    </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
    name: "App",
    components: { Student, School },
    methods: {
        getSchoolName(name) {
            console.log("getSchoolName", name);
        },
        getStudentName(name, ...params) {
            console.log("getStudentName", name, params);
        },
        m1() {
            console.log("自定义demo");
        },
    },
    mounted() {
        // 使用mounted配合dom里的ref使用更加灵活，可以控制做完什么事以后再邦定aaa这个自定义事件
        this.$refs.student.$on("aaa", this.getStudentName);
    },
};
</script>
