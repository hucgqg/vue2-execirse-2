<template>
    <div>
        <button @click="showIs = !showIs">隐藏/显示</button>
        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__backInUp"
            leave-active-class="animate__backOutDown"
        >
            <h4 v-show="showIs" class="come">测试的文字</h4>
        </transition>
    </div>
</template>

<script>
import "animate.css";
export default {
    data() {
        return { showIs: true };
    },
};
</script>

<style scoped>
h4 {
    background-color: orange;
    /* transition: 1s linear; */
}
</style>