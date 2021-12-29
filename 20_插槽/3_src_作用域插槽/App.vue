<template>
    <div>
        <cotegory title="游戏">
            <template scope="aaa">
                <ul>
                    <li v-for="(g, index) in aaa.games" :key="index">
                        {{ g }}
                    </li>
                </ul>
            </template>
        </cotegory>

        <cotegory title="游戏2">
            <template scope="{games}">
                <ol>
                    <li v-for="(g, index) in games" :key="index">{{ g }}</li>
                </ol>
            </template>
        </cotegory>

        <cotegory title="游戏3">
            <template slot-scope="{ games }">
                <h5 v-for="(g, i) in games" :key="i">{{ g }}</h5>
            </template>
        </cotegory>
    </div>
</template>

<script>
import Cotegory from "./components/Cotegory.vue";
export default {
    name: "App",
    components: { Cotegory },
};
</script>

<style>
</style>