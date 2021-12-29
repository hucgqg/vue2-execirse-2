<template>
    <div>
        <button @click="showIs = !showIs">隐藏/显示</button>
        <!-- <transition name="hello">
            <h4 v-show="showIs" class="come">测试的文字</h4>
        </transition> -->
        <!-- appear表示一开始就有动画效果，appear等同 :appear="true" -->
        <transition appear>
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

<style>
h4 {
    background-color: orange;
}
/* 如果标签里设置了name需要把这里也写成对应的名称 */
/* .hello-enter-active {
    animation: identifier 1s linear;
}
.hello-leave-active {
    animation: identifier 1s linear reverse;
} */
.v-enter-active {
    animation: identifier 1s linear;
}
.v-leave-active {
    animation: identifier 1s linear reverse;
}
@keyframes identifier {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>