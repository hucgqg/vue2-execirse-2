<template>
    <div class="demo">
        <p>名称：{{ name }}</p>
        <p>地址：{{ address }}</p>
    </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name: "School",
    data() {
        return {
            name: "四部曲",
            address: "北京",
        };
    },
    methods: {
        data(msgName, data) {
            alert(data);
        },
    },
    mounted() {
        this.pid = pubsub.subscribe("student", this.data);
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pid);
    },
};
</script>

// 加上scoped就变成了局部的样式，对其它文件同名的class没有效果
<style scoped>
.demo {
    background-color: orange;
}
</style>
