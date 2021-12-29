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
            <!--  -->
            <keep-alive include="News">
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