<template>
    <div class="cotegory">
        <h3>{{ title }}</h3>
        <slot>this is test</slot>
    </div>
</template>

<script>
export default {
    name: "Cotegory",
    props: ["title"],
};
</script>

<style>
.cotegory {
    width: 200px;
    height: 300px;
    background-color: aqua;
}
</style>