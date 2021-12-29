<template>
    <div>
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "Tom",
            age: 22,
        };
    },
};
</script>
