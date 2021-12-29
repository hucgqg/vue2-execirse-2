<template>
    <div>
        <h4>这里是Home</h4>
        <div>
            <router-link to="/home/news">News</router-link>
        </div>
        <div>
            <router-link to="/home/message">Message</router-link>
        </div>
        <div>
            <!-- 如果这里不写include="News"，将会把这里的展示组件全部缓存不进行销毁 -->
            <!-- <keep-alive include="News"> -->
            <!-- 将多个组件写入不销毁 -->
            <keep-alive :include="['News', 'Message']">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    mounted() {
        console.log(this.$router);
    },
};
</script>

<style>
</style>