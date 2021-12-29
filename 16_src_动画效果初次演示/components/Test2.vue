<template>
    <div>
        <button @click="showIs = !showIs">隐藏/显示</button>
        <transition name="hello">
            <h4 v-show="showIs" class="come">测试的文字</h4>
        </transition>
    </div>
</template>

<script>
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
/* 进入的起点/离开的终点 */
.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}
.hello-enter-active,
.hello-leave-active {
    /* 这里的写法和h4标签里的写是一样的 */
    transition: 1s linear;
}
/* 进入的终点/离开的起点 */
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
</style>