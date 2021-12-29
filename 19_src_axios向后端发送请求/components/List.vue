<template>
    <div>
        <div
            v-show="info.users.length"
            v-for="user in info.users"
            :key="user.login"
        >
            <a :href="user.html_url">
                <img :src="user.avatar_url" />
            </a>
            <p>{{ user.login }}</p>
        </div>
        <p v-show="info.isSearch">欢迎</p>
        <p v-show="info.isLoad">加载中。。。</p>
        <p v-show="info.errMsg">{{ info.errMsg }}</p>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            info: {
                isSearch: true,
                isLoad: false,
                users: [],
                errMsg: "",
            },
        };
    },
    methods: {
        userList(data) {
            this.info = { ...this.info, ...data };
            // console.log("list", data);
        },
    },
    mounted() {
        this.$bus.$on("updateData", this.userList);
    },
};
</script>

<style>
</style>