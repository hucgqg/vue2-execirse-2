<template>
    <div class="demo">
        <p>名称：{{ name }}</p>
        <p>地址：{{ address }}</p>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "四部曲",
            address: "北京",
        };
    },
};
</script>

// 加上scoped就变成了局部的样式，对其它文件同名的class没有效果
<style scoped>
.demo {
    background-color: orange;
}
</style>
