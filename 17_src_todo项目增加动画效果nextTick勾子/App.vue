<template>
    <div id="outer">
        <AddOption @addTodo="addTodo" />
        <List :todos="todos" />
        <AllOption
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearAllTodo="clearAllTodo"
        />
    </div>
</template>

<script>
import AddOption from "./components/AddOption";
import List from "./components/List";
import AllOption from "./components/AllOption";

export default {
    name: "App",
    components: { AddOption, List, AllOption },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem("todos")) || [],
        };
    },
    methods: {
        // 添加一个todo
        addTodo(todo) {
            this.todos.unshift(todo);
        },
        // 勾选一个todo和取消一个todo
        checkTodo(id) {
            // this.todos.forEach 遍历this.todos
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.done = !todo.done;
            });
        },
        // 删除一个todo
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => {
                return todo.id !== id;
            });
        },
        // 全部勾选或全不选
        checkAllTodo(e) {
            return this.todos.forEach((todo) => {
                todo.done = e;
            });
        },
        // 清除已完成的选项
        clearAllTodo() {
            this.todos = this.todos.filter((todo) => {
                return !todo.done;
            });
        },
        //更新一个doto
        updateTodo(id, title) {
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.title = title.replace(/\s*/g, "");
            });
        },
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem("todos", JSON.stringify(value));
            },
        },
    },
    mounted() {
        this.$bus.$on("checkTodo", this.checkTodo);
        this.$bus.$on("deleteTodo", this.deleteTodo);
        this.$bus.$on("updateTodo", this.updateTodo);
    },
    beforeDestroy() {
        this.$bus.$off("checkTodo");
        this.$bus.$off("deleteTodo");
        this.$bus.$off("updateTodo");
    },
};
</script>
<style >
#outer {
    margin: auto;
    margin-top: 50px;
    width: 600px;
    height: auto;
    border: 1px solid rgb(156, 155, 155);
    border-radius: 10px;
}
</style>