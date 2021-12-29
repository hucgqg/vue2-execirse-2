<template>
    <div>
        <div>
            <!-- 路由的导航 -->
            <!-- 加上 replace 浏览器就不可以后退，被新点击的页面覆盖当前页面的记录-->
            <!-- 默认是push模式，是追加的方式 -->
            <router-link :replace="true" active-class="active" to="/home">
                Home
            </router-link>
            <router-link replace active-class="active" to="/about">
                About
            </router-link>
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