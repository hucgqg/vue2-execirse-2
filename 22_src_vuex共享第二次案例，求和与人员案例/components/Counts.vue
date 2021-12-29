<template>
    <div>
        <h4>当前求和为:{{ sum }}</h4>
        <h6>当前求和10倍值为:{{ bigSum }}</h6>
        <h6>公司名称:{{ companyName }}</h6>
        <h6>部门名称:{{ departmentName }}</h6>
        <h6>person一共有{{ persons.length }}人</h6>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="decrementOdd(n)">当前求和奇数再加</button>
        <button @click="decrementWait(n)">等等加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            n: 1,
        };
    },
    methods: {
        // mapMutations 这里的写法需要标签里把参数传过来，否则计算时不知道和n相加，也不知道n是多少，自动调用commit
        ...mapMutations({ increment: "ADD", decrement: "SUB" }),
        // mapActions 与mapMutations的写法差不多
        ...mapActions({ decrementOdd: "odd", decrementWait: "wait" }),
    },
    computed: {
        // 第三种mapState数组方式的写法,这种写法页面使用的名称需要和vuex的state使用的名称一样
        ...mapState(["sum", "companyName", "departmentName", "persons"]),
        ...mapGetters(["bigSum"]),
    },
};
</script>

<style>
button {
    margin-left: 5px;
}
</style>