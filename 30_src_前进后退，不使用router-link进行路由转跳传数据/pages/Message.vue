<template>
    <ul>
        <li v-for="m in messages" :key="m.id">
            <router-link
                :to="{
                    name: 'd', // 命名路由的写法，配合route/index.js里对应的name
                    //path: '/home/message/detail',
                    //params: {
                    //    id: m.id,
                    //    title: m.title,
                    //},
                    query: {
                        id: m.id,
                        title: m.title,
                    },
                }"
                >{{ m.title }}
            </router-link>
            <button @click="showPush(m)">push查看</button>
            <button @click="showReplace(m)">replace查看</button>
        </li>
        <hr />
        <router-view></router-view>
    </ul>
</template>
<script>
export default {
    name: "Message",
    data() {
        return {
            messages: [
                { id: "001", title: "消息001" },
                { id: "002", title: "消息002" },
                { id: "003", title: "消息003" },
            ],
        };
    },
    methods: {
        showPush(m) {
            this.$router.push({
                name: "d",
                query: {
                    id: m.id,
                    title: m.title,
                },
            });
        },
        showReplace(m) {
            this.$router.replace({
                name: "d",
                query: {
                    id: m.id,
                    title: m.title,
                },
            });
        },
    },
};
</script>

<style>
</style>