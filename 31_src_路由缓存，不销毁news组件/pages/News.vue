<template>
    <ul>
        <li>new1 <input type="text" /></li>
        <li>new2 <input type="text" /></li>
        <li>new3 <input type="text" /></li>
        <li>new4 <input type="text" /></li>
    </ul>
</template>

<script>
export default {
    name: "News",
    beforeDestroy() {
        console.log("news将被销毁");
    },
};
</script>

<style>
</style>