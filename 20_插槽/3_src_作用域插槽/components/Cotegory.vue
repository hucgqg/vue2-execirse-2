<template>
    <div class="cotegory">
        <h3>{{ title }}</h3>
        <slot :games="games" :msg="这里表示可以传多个对象值过去">
            这里是一些默认的信息
        </slot>
    </div>
</template>

<script>
export default {
    name: "Cotegory",
    props: ["title"],
    data() {
        return {
            games: ["游戏1", "游戏2", "游戏3"],
        };
    },
};
</script>

<style scope>
.cotegory {
    width: 200px;
    height: 300px;
    background-color: aqua;
}
img {
    width: 100%;
}
video {
    width: 100%;
}
</style>