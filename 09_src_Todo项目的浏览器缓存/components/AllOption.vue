<template>
    <div class="all-option" v-show="total">
        <label>
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>已完成{{ doneTotal }}/全部{{ total }}</span>
        <button id="del-all" @click="clearAll">删除所有完成项</button>
    </div>
</template>

<script>
export default {
    name: "AllOption",
    props: ["todos", "checkAllTodo", "clearAllTodo"],
    methods: {
        clearAll() {
            if (confirm("确定删除全部完成的任务吗？")) {
                this.clearAllTodo();
            }
        },
    },
    computed: {
        total() {
            return this.todos.length;
        },
        doneTotal() {
            // 为了更好的理解这里的计算值写了一个遍历的方式
            // let x = 0;
            // this.todos.forEach((todo) => {
            //     if (todo.done) x++;
            // });
            // return x

            //reduce 的用法需要在查阅资料学习
            return this.todos.reduce(
                (pre, todo) => pre + (todo.done ? 1 : 0),
                0
            );
        },
        isAll: {
            get() {
                return this.total > 0 && this.total === this.doneTotal;
            },
            set(value) {
                this.checkAllTodo(value);
            },
        },
    },
};
</script>

<style scoped>
.all-option {
    margin-top: 20px;
    margin-left: 26px;
    margin-bottom: 20px;
}
#del-all {
    width: 120px;
    height: 30px;
    background-color: rgb(223, 2, 2);
    border-radius: 5px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    float: right;
    margin-right: 20px;
    border: none;
}
</style>