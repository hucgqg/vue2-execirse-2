<template>
    <div>
        <button @click="getStudents">点击获取学生数据</button>
        <button @click="getCars">点击获取汽车数据</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    methods: {
        getStudents() {
            axios.get("http://localhost:8080/api/students").then(
                (response) => {
                    console.log("请求成功", response.data);
                },
                (error) => {
                    console.log("请求失败", error.message);
                }
            );
        },
        getCars() {
            axios.get("http://localhost:8080/api/cars").then(
                (response) => {
                    console.log("请求成功", response.data);
                },
                (error) => {
                    console.log("请求失败", error.message);
                }
            );
        },
    },
};
</script>