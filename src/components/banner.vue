<template>
    <div>
        <div>
            <h4>这是vue的路由测试</h4>
        </div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="testGo">测试go</button>
    </div>
</template>

<script>
export default {
    name: "Banner",
    methods: {
        back() {
            console.log(this.$router);
            this.$router.back();
        },
        forward() {
            this.$router.forward();
        },
        testGo() {
            this.$router.go(2); // 往前进两步
            // this.$router.go(-2); //往后退两步
        },
    },
};
</script>

<style>
</style>