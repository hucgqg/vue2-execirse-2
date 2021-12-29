<template>
    <div class="cotegory">
        <h3>{{ title }}</h3>
        <slot name="conter">this is test</slot>
        <slot name="footer">this is footer</slot>
    </div>
</template>

<script>
export default {
    name: "Cotegory",
    props: ["title"],
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