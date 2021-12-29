<template>
    <ul>
        <li :style="{ opacity }">欢迎来中国</li>
        <li>new1 <input type="text" /></li>
        <li>new2 <input type="text" /></li>
        <li>new3 <input type="text" /></li>
        <li>new4 <input type="text" /></li>
    </ul>
</template>

<script>
export default {
    name: "News",
    data() {
        return {
            opacity: 1,
        };
    },
    activated() {
        console.log("News组件被激活了");
        this.timer = setInterval(() => {
            console.log("@");
            this.opacity -= 0.01;
            if (this.opacity <= 0) this.opacity = 1;
        }, 20);
    },
    deactivated() {
        console.log("News组件失活了");
        clearInterval(this.timer);
    },
};
</script>

<style>
</style>