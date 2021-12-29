<template>
    <div class="top">
        <input
            id="top-input"
            type="text"
            placeholder="输入任务名称，回车添加"
            v-model="title"
            @keyup.enter="add"
        />
    </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
    name: "AddOption",
    data() {
        return { title: "" };
    },
    props: ["addTodo"],
    methods: {
        add() {
            if (!this.title.trim()) return alert("输入项目不可为空"); // .trim是去掉前后空格，这里的判断作用是输入的为空时直接返回
            const todo = { id: nanoid(), title: this.title, done: false };
            this.addTodo(todo);
            this.title = ""; //当回车后将输入框置为空
        },
    },
};
</script>

<style scoped>
.top {
    text-align: center;
}
#top-input {
    width: 550px;
    height: 30px;
    margin-top: 10px;
    border: 2px solid rgb(162, 162, 199);
    border-radius: 5px;
}
</style>