<template>
    <div>
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