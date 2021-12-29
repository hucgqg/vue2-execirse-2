<template>
    <div>
        <div>
            <!-- 路由的导航 -->
            <router-link active-class="active" to="/home">Home</router-link>
            <router-link active-class="active" to="/about">About</router-link>
        </div>
        <div>
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
.active {
    background-color: rgb(92, 235, 245);
}
</style>