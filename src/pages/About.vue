<template>
    <div>
        <h4>这里是About</h4>
    </div>
</template>

<script>
export default {
    name: "About",
    beforeRouteEnter(to, from, next) {
        // 通过路由规则进入该组件时被调用
        console.log("beforeRouteEnter", to, from, next);
        if (to.meta.isAuth) {
            if (localStorage.getItem("school") === "s") {
                next();
            } else {
                alert("无权访问");
            }
        } else {
            next();
        }
    },
    beforeRouteLeave(to, from, next) {
        // 通过路由规则离开该组件时被调用
        console.log("beforeRouteLeave", to, from, next);
    },
};
</script>

<style>
</style>