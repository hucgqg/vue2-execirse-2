<template>
    <li>
        <!-- :checked="todo.done"  checked=true表示勾选， -->
        <label>
            <input
                type="checkbox"
                :checked="todo.done"
                @change="handleCheck(todo.id)"
            />
            <!-- 直接使用v-model来修改props传过来的数据也可以达到目的，但不建议这样使用，违反了原则，容易报错 -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
        </label>
        <span>{{ todo.title }}</span>
        <button @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: "Itme",
    // 接收list里传过来的
    props: ["todo"],
    // 这里是打印出传过来的数据
    // mounted() {
    //     console.log(this.todo);
    // },
    methods: {
        // 点击勾选或取消
        handleCheck(id) {
            // this.checkTodo(id);
            this.$bus.$emit("checkTodo", id);
        },
        // 删除
        handleDelete(id) {
            if (confirm("确定删除吗？")) {
                // this.deleteTodo(id);
                this.$bus.$emit("deleteTodo", id);
            }
        },
    },
};
</script>

<style scoped>
li {
    margin-top: -1px;
    width: auto;
    height: 30px;
    border: 1px solid rgb(156, 155, 155);
    border-radius: 5px;
}
li button {
    margin-top: 2px;
    width: 60px;
    height: 25px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    background-color: rgb(223, 2, 2);
    border-radius: 5px;
    float: right;
    margin-right: 5px;
    border: none;
    display: none;
}
li:hover {
    background: #ddd;
}
li:hover button {
    display: block;
}
</style>