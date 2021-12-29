<template>
    <div>
        <Counts />
        <hr>
        <person />
    </div>
</template>

<script>
import Counts from "./components/Counts.vue";
import Person from "./components/Person.vue";
export default {
    name: "App",
    components: { Counts, Person },
};
</script>

<style>
</style>