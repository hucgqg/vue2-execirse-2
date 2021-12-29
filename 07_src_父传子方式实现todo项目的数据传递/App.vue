<template>
    <div id="outer">
        <AddOption :addTodo="addTodo" />
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <AllOption
            :todos="todos"
            :checkAllTodo="checkAllTodo"
            :clearAllTodo="clearAllTodo"
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
            todos: [
                { id: "001", title: "吃饭", done: true },
                { id: "002", title: "睡觉", done: false },
                { id: "003", title: "玩", done: true },
            ],
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