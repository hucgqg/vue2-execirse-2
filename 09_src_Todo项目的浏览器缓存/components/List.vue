<template>
    <div class="lists-div">
        <ul>
            <Itme
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                :checkTodo="checkTodo"
                :deleteTodo="deleteTodo"
            />
            <!-- :todo="todo"是将对象传给itme -->
        </ul>
    </div>
</template>

<script>
import Itme from "./Itme.vue";
export default {
    name: "List",
    components: { Itme },
    props: ["todos", "checkTodo", "deleteTodo"],
};
</script>

<style scoped>
.lists-div {
    margin: auto;
    margin-top: 20px;
    width: 550px;
    height: auto;
    /* border: 1px solid rgb(156, 155, 155);
    border-radius: 10px; */
}
ul {
    padding: 0;
    list-style: none;
}
</style>