<template>
    <div>
        <h3>人员列表:</h3>
        <h4 style="color: red">counts里的sum:{{ sum }}</h4>
        <input type="text" placeholder="输入人名添加" v-model="name" />
        <button @click="add">确定</button>
        <ul>
            <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { nanoid } from "nanoid";
export default {
    data() {
        return {
            name: "",
        };
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name };
            this.$store.commit("personAbout/ADD_PERSON", personObj);
            this.name = "";
        },
    },
    computed: {
        ...mapState("personAbout", ["persons"]),
        ...mapState("countAbout", ["sum"]),
    },
};
</script>

<style>
</style>