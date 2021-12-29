<template>
    <ul>
        <li v-for="m in messages" :key="m.id">
            <router-link
                :to="{
                    path: '/home/message/detail',
                    query: {
                        id: m.id,
                        title: m.title,
                    },
                }"
                >{{ m.title }}
            </router-link>
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
};
</script>

<style>
</style>