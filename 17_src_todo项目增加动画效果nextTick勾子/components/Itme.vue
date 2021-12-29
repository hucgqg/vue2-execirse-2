<template>
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInUp"
        leave-active-class="animate__backOutUp"
    >
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
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input
                type="text"
                v-show="todo.isEdit"
                :value="todo.title"
                @blur="handleBlur(todo, $event)"
                ref="inputTitle"
            />
            <button @click="handleDelete(todo.id)">删除</button>
            <button
                id="handleEdit"
                @click="handleEdit(todo)"
                v-show="!todo.isEdit"
            >
                编辑
            </button>
        </li>
    </transition>
</template>

<script>
import "animate.css";
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
        // 编辑项目名
        handleEdit(todo) {
            this.$set(todo, "isEdit", true);
            // 这里是判断有没有isEdit这个字段,使用下面的hasOwnProperty方式报错，未得到验证
            // if (todo.hasOwnProperty("isEdit")) {
            //     this.isEdit = true;
            // } else {
            //     this.$set(todo, "isEdit", true);
            // }
            this.$nextTick(function () {
                // nextTick的作用是等到整个dom执行完了才执行这里的内容
                this.$refs.inputTitle.focus();
            });
        },
        // 失去焦点
        handleBlur(todo, e) {
            if (!e.target.value) return alert("内容不可以为空");
            todo.isEdit = false;
            this.$bus.$emit("updateTodo", todo.id, e.target.value);
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
#handleEdit {
    background-color: rgb(27, 183, 204);
}
</style>