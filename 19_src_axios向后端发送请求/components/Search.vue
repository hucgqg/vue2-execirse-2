<template>
    <div>
        <input type="text" v-model="keyWord" />
        <button @click="searchUsers">搜索</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Search",
    data() {
        return {
            keyWord: "",
        };
    },
    methods: {
        searchUsers() {
            if (this.keyWord.replace(/\s*/g, "") === "") return;
            this.$bus.$emit("updateData", {
                isSearch: false,
                isLoad: true,
                users: [],
                errMsg: "",
            });
            axios
                .get(`https://api.github.com/search/users?q=${this.keyWord}`)
                .then(
                    (response) => {
                        // console.log("请求成功了", response.data);
                        this.$bus.$emit("updateData", {
                            isLoad: false,
                            users: response.data.items,
                            errMsg: "",
                        });
                    },
                    (error) => {
                        this.$bus.$emit("updateData", {
                            isLoad: false,
                            users: [],
                            errMsg: error.message,
                        });
                        console.log("请求失败", error.message);
                    }
                );
        },
    },
};
</script>
