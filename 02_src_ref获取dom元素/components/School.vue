<template>
    <div class="demo">
        <p>姓名：{{ name }}</p>
        <p>地址：{{ address }}</p>
        <button @click="showName">点击显示姓名</button>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "BeiJingDaxue",
            address: "china",
        };
    },
    methods: {
        showName() {
            alert(this.name);
        },
    },
};
</script>

<style>
.demo {
    background-color: orange;
}
</style>