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
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style>
</style>